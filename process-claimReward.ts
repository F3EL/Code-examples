import * as anchor from "@project-serum/anchor";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";

import dotenv from "dotenv";
import {
    PublicKey,
    Connection,
    SystemProgram,
    SYSVAR_RENT_PUBKEY
} from "@solana/web3.js";
import {
    getAssociatedTokenAddress,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID
} from "@solana/spl-token";

import {
    connectWallet,
    createUserStateInstruction
} from "./utils";
import BN from "bn.js";
import {
    IDL
} from "./betting_idl";
import * as Constants from "./constants";
import * as keys from "./keys";
import {
    fetchUserState,
    fetchUserBetStateAll,
    fetchArenaStates
} from "./fetch";

dotenv.config();

//@ts-ignore
const connection = new Connection(process.env.RPC_ENDPOINT);

//@ts-ignore
const wallet = connectWallet(process.env.WALLET_KEYPAIR);

let provider = new anchor.AnchorProvider(connection, new NodeWallet(wallet), anchor.AnchorProvider.defaultOptions())
const program = new anchor.Program(IDL, Constants.PROGRAM_ID, provider);

const main = async () => {


    await fetchUserBetStateAll(connection, wallet).then(async (userBetStateAccounts) => {
        let enteredArenaIds: Array < number > = [];
        userBetStateAccounts.forEach((acc) => {
            if (acc.account.isClaimed == 0)
                enteredArenaIds.push(acc.account.arenaId.toNumber());
        })


        const chunkSize = 100;
        let enteredArenaStates = [];
        for (let i = 0; i < enteredArenaIds.length; i += chunkSize) {
            const chunk = enteredArenaIds.slice(i, i + chunkSize);
            let item = await fetchArenaStates(connection, wallet, chunk)
            if (enteredArenaStates.length == 0) {
                enteredArenaStates = item;
            } else {
                for (let u in item) {
                    enteredArenaStates.push(item[u])
                }
            }
        }

        for (let i = 0; i < enteredArenaStates.length; i++) {
            let item = {}
            as any;
            item.round_id = enteredArenaStates[i].parsedArenaId;

            if (item.round_id != "50979") {
                item.variation = enteredArenaStates[i].parsedFinalPrice - enteredArenaStates[i].parsedLockedPrice;
                const userBetState = userBetStateAccounts.find((acc: any) => acc.account.parsedArenaId == item.round_id);
                item.kindofbet = userBetState?.account.isUp ? 'up' : 'down';
                item.is_won = ((item.kindofbet == 'up' && item.variation > 0) ?
                    true :
                    (
                        (item.kindofbet == 'down' && item.variation < 0) ?
                        true :
                        false
                    ))

                item.isClaimed = userBetState?.account.isClaimed

                console.log('Round ' + item.round_id + ' | is won : ' + item.is_won + ' | is claimed ' + item.isClaimed)

                if (!item.isClaimed && item.is_won) {

                    const mint = new PublicKey(Constants.USDC_MINT);
                    const globalStateKey = await keys.getGlobalStateKey();
                    //@ts-ignore
                    const userAta = await getAssociatedTokenAddress(mint, wallet.publicKey);
                    const escrowAta = await getAssociatedTokenAddress(mint, globalStateKey, true);
                    //@ts-ignore
                    const userStateKey = await keys.getUserStateKey(wallet.publicKey);
                    const userStateAccInfo = await fetchUserState(program, userStateKey);

                    if (!userStateAccInfo) throw Error("User State is not created");

                    const refUserStateKey = await keys.getUserStateKey(userStateAccInfo.referrer);
                    const preInstructions = [];
                    if (!await fetchUserState(program, refUserStateKey)) {
                        //@ts-ignore
                        const createUserStateIx = await createUserStateInstruction(program, userStateAccInfo.referrer, wallet.publicKey, refUserStateKey);
                        preInstructions.push(createUserStateIx);
                    }
                    const refUserVaultAta = await getAssociatedTokenAddress(mint, refUserStateKey, true);

                    try {
                        //@ts-ignore
                        const txHash = await program.methods
                            .claimReward(new BN(item.round_id))
                            .accounts({
                                //@ts-ignore              
                                user: wallet.publicKey,
                                globalState: await keys.getGlobalStateKey(),
                                arenaState: await keys.getArenaStateKey(item.round_id),
                                //@ts-ignore
                                userBetState: await keys.getUserBetStateKey(item.round_id, wallet.publicKey),
                                userState: userStateKey,
                                userAta,
                                escrowAta,
                                refUserState: refUserStateKey,
                                refUserVaultAta,
                                tokenMint: mint,
                                tokenProgram: TOKEN_PROGRAM_ID,
                                associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                                systemProgram: SystemProgram.programId,
                                rent: SYSVAR_RENT_PUBKEY,
                            })
                            .preInstructions(preInstructions)
                            .rpc();
                        console.log("Claiming " + item.round_id + " txHash =", txHash);
                    } catch {
                        console.log('error')
                    }
                }
            }
        }
        process.exit(1);
    })
}


main();