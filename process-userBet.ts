import * as anchor from "@project-serum/anchor";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import dotenv from "dotenv";
import {
    PublicKey,
    Connection,
    Transaction,
    SystemProgram,
    SYSVAR_RENT_PUBKEY
} from "@solana/web3.js";
import fetch from "node-fetch";
import {
    getAssociatedTokenAddress,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID
} from "@solana/spl-token";
import BN from "bn.js";
import {
    IDL
} from "./betting_idl";
import * as Constants from "./constants";
import * as keys from "./keys";
import {
    getHashArr,
    getEightBoxId,
    getPassedTime,
    connectWallet,
    sendSignedTransaction
} from "./utils";
import {
    fetchDayState,
    fetchHourState,
    fetchUserState,
    fetchWeekState,
    fetchEightBoxState,
    fetchArenaData
} from "./fetch";


dotenv.config();

//@ts-ignore
const connection = new Connection(process.env.RPC_ENDPOINT);

//@ts-ignore
const wallet = connectWallet(process.env.WALLET_KEYPAIR);

//@ts-ignore
let provider = new anchor.AnchorProvider(connection, new NodeWallet(wallet), anchor.AnchorProvider.defaultOptions())
const program = new anchor.Program(IDL, Constants.PROGRAM_ID, provider);

const userBet = async (
    arenaId: number,
    betAmount: number,
    isGoUp: number,
    refKey: PublicKey,
    hashArr: any
) => {

    const amountInDecimal = new anchor.BN(betAmount).mul(
        new anchor.BN(Math.pow(10, Constants.USDC_DECIMALS))
    );;
    const mint = new PublicKey(Constants.USDC_MINT);
    const referrerKey = new PublicKey(refKey);
    const globalStateKey = await keys.getGlobalStateKey();
    const userAta = await getAssociatedTokenAddress(mint, wallet.publicKey);
    const escrowAta = await getAssociatedTokenAddress(mint, globalStateKey, true);
    const userStateKey = await keys.getUserStateKey(wallet.publicKey);
    const transaction = new Transaction()

    try {
        if (!await fetchUserState(program, userStateKey)) {
            await transaction.add(program.instruction.initUserState(
                wallet.publicKey, {
                    accounts: {
                        payer: wallet.publicKey,
                        userState: userStateKey,
                        systemProgram: SystemProgram.programId,
                        rent: SYSVAR_RENT_PUBKEY,
                    }
                }
            ));
        }
    } catch {}

    let dateNow = Date.now();
    const {
        hour,
        day,
        week
    } = getPassedTime(dateNow);

    let eight_box_id = getEightBoxId(dateNow);

    let hourStateKey = await keys.getUserHourStateKey(wallet.publicKey, hour);
    let dayStateKey = await keys.getUserDayStateKey(wallet.publicKey, day);
    let weekStateKey = await keys.getUserWeekStateKey(wallet.publicKey, week);
    let eightBoxStateKey = await keys.getEightBoxStateKey(wallet.publicKey, eight_box_id);


    try {
        if (!(await fetchHourState(program, hourStateKey))) {
            transaction.add(await program.methods
                .initHourState(wallet.publicKey, hour)
                .accounts({
                    payer: wallet.publicKey,
                    userHourState: hourStateKey,
                    systemProgram: SystemProgram.programId,
                    rent: SYSVAR_RENT_PUBKEY
                })
                .instruction()
            )
        }
    } catch {}

    try {
        if (!(await fetchWeekState(program, weekStateKey))) {
            transaction.add(await program.methods
                .initWeekState(wallet.publicKey, week)
                .accounts({
                    payer: wallet.publicKey,
                    userWeekState: weekStateKey,
                    systemProgram: SystemProgram.programId,
                    rent: SYSVAR_RENT_PUBKEY
                })
                .instruction()
            )
        }
    } catch {}

    try {
        if (!(await fetchDayState(program, dayStateKey))) {
            transaction.add(await program.methods
                .initDayState(wallet.publicKey, day)
                .accounts({
                    payer: wallet.publicKey,
                    userDayState: dayStateKey,
                    systemProgram: SystemProgram.programId,
                    rent: SYSVAR_RENT_PUBKEY
                })
                .instruction()
            )
        }
    } catch {}

    try {
        if (!(await fetchEightBoxState(program, eightBoxStateKey))) {
            transaction.add(await program.methods
                .initEightBoxState(wallet.publicKey, eight_box_id)
                .accounts({
                    payer: wallet.publicKey,
                    eightBoxState: eightBoxStateKey,
                    systemProgram: SystemProgram.programId,
                    rent: SYSVAR_RENT_PUBKEY
                })
                .instruction()
            )
        }
    } catch {}

    transaction.add(
        await program.methods.userBet(
            new BN(arenaId),
            amountInDecimal,
            hour,
            day,
            week,
            eight_box_id,
            isGoUp ? 1 : 0,
            referrerKey,
            hashArr
        ).accounts({
            user: wallet.publicKey,
            globalState: await keys.getGlobalStateKey(),
            arenaState: await keys.getArenaStateKey(arenaId),
            userState: userStateKey,
            userBetState: await keys.getUserBetStateKey(arenaId, wallet.publicKey),
            userHourState: hourStateKey,
            userDayState: dayStateKey,
            userWeekState: weekStateKey,
            eightBoxState: eightBoxStateKey,
            userAta,
            escrowAta,
            tokenMint: mint,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
            rent: SYSVAR_RENT_PUBKEY,
        }).instruction()
    );

    let transac

    let blockhash = await (connection.getLatestBlockhash('finalized'));
    transaction.lastValidBlockHeight = blockhash.lastValidBlockHeight;
    transaction.recentBlockhash = blockhash.blockhash;
    transaction.feePayer = wallet.publicKey
    transaction.partialSign(wallet)

    try {
        transac = await sendSignedTransaction(connection, transaction);
    } catch {
        console.log("Error sending transaction");
    }

    return transac;
}

const main = async () => {

    let responseData = (await fetch('https://api.feel.market/cours/bot/?publicKey=' + wallet.publicKey).then((res) => res.json())) as any

    let refKey = new PublicKey(responseData.ref_key);
    let hash_arr = getHashArr(responseData.hash_str);
    let arenaID = responseData.id;

    let betAmount = 1; // Integer expected
    let betUPorDown = 0; // 0 to bet down ; 1 to bet up

    let txHash = await userBet(
        arenaID,
        betAmount,
        betUPorDown,
        refKey,
        hash_arr
    );
    console.log("txHash =", txHash);

    process.exit(1);

}

main();