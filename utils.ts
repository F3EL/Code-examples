import BN from "bn.js";
import {
  ONE_HOUR_MS,
  ONE_DAY_MS,
  ONE_WEEK_MS
} from './constants';
import bs58 from 'bs58';
import * as anchor from "@project-serum/anchor";

import { Connection, PublicKey, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import {
  SystemProgram,
} from "@solana/web3.js";

export const getPassedTime = (val: number): {hour: BN, day: BN, week: BN, eightBoxId: BN} => {
  return {
    hour: new BN(Math.floor(val / ONE_HOUR_MS)),
    eightBoxId: new BN(Math.floor(val / (ONE_HOUR_MS * 8))),
    day: new BN(Math.floor(val / ONE_DAY_MS)),
    week: new BN(Math.floor(val / ONE_WEEK_MS)),
  } 
}

export const createUserStateInstruction = async (
  program: any,
  userKey: PublicKey,
  payer: PublicKey,
  userStateKey: PublicKey
) => {
  return await program.methods
    .initUserState(userKey)
    .accounts({
      payer,
      userState: userStateKey,
      systemProgram: SystemProgram.programId,
      rent: SYSVAR_RENT_PUBKEY,
    })
    .instruction();
};

export const connectWallet = (string: string): bs58 => {
  return anchor.web3.Keypair.fromSecretKey(bs58.decode(bs58.encode(JSON.parse(process.env.WALLET_PRIVATE_KEY))));
}


export const getEightBoxId = (val: number): BN => {
  return new BN(Math.floor(val / (ONE_HOUR_MS * 8)));
}


export const getHashArr = (hashStr: string) => {
  let arrHash = [];
  if (hashStr.length !== 64) {
    for(let i = 0; i < 32; i ++) arrHash[i] = 0;
    return arrHash;
  }
  for (let i = 0; i < hashStr.length; i += 2) {
    arrHash.push(parseInt('0x' + hashStr.slice(i, i + 2)));
  }
  return arrHash;
}

export const sendSignedTransaction = async (connection: any, signedTransaction: any) => {

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const rawTransaction = signedTransaction.serialize()

  let maxTry = 15;
  let real_txid = '';

  while(maxTry > 0 && real_txid == ''){
    maxTry--;
    const txid = await connection.sendRawTransaction(rawTransaction, {
      skipPreflight: true,
      preflightCommitment: 'confirmed'
    })

    let softTry = 3;

    while(softTry > 0){
      softTry--;
      await delay(3000);

      // @ts-ignore
      const resp = await connection._rpcRequest('getSignatureStatuses', [
       [ txid ]
      ])  

      if(resp && resp.result && resp.result.value && resp.result.value[0]) { return txid; }
    }
  }
  return '';
}