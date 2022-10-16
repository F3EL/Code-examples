import {
  PublicKey
} from "@solana/web3.js";
import { BN, IdlAccounts } from "@project-serum/anchor";
import { getArenaStateKey } from "./keys";
import BigNumber from "bignumber.js";
import * as anchor from '@project-serum/anchor'

import { IDL, Betting } from './betting_idl'
import * as Constants from "./constants";

const BETTING_PROGRAM_ID = Constants.PROGRAM_ID;
const PRICE_DECIMALS = 8;
const USDC_DECIMALS = 6
export type ArenaStateType = IdlAccounts<Betting>["arenaState"];
export type UserBetStateType = IdlAccounts<Betting>["userBetState"];

export function getProgram(connection, wallet, escrowProgram = BETTING_PROGRAM_ID) {
  const provider = new anchor.AnchorProvider(connection, wallet, anchor.AnchorProvider.defaultOptions())
  return new anchor.Program(IDL, new PublicKey(escrowProgram), provider);
}

const cvtDecimalBN2Number = (x: BN, decimals: number = USDC_DECIMALS): number => {
  return new BigNumber(x.toString()).div(Math.pow(10, decimals)).toNumber();
}

export const fetchData = async (program: any, type: string, key: PublicKey) => {
  return await program.account[type].fetchNullable(key);
};


export const fetchArenaData = async (
  connection: any,
  wallet: any,
  arenaId: number
) => {
  const program = getProgram(connection, wallet);
  const arenaStateKey = await getArenaStateKey(arenaId);
  return await fetchArenaState(program, arenaStateKey);
}

export const fetchUserBetStateAll = async (
  connection: any,
  wallet: any
): Promise<Array<{ account: IdlAccounts<Betting>["userBetState"], publicKey: PublicKey }>> => {
  
  const program = getProgram(connection, wallet);
  const userBetStateAccounts = await program.account.userBetState.all([{
      memcmp: {
        offset: 8,
        bytes: wallet.publicKey.toBase58()
      }
    }
  ]);
  const parsedUserBetStateAccounts = userBetStateAccounts.map(acc => ({
    publicKey: acc.publicKey,
    account: {
      ...acc.account,
      parsedArenaId: acc.account.arenaId.toNumber(),
      parsedBetAmount: cvtDecimalBN2Number(acc.account.betAmount),
    }
  }))
  return parsedUserBetStateAccounts;
}

export const fetchGlobalState = async (
  program: any,
  key: PublicKey
): Promise<IdlAccounts<Betting>["globalState"] | null> => {
  return await fetchData(program, "globalState", key);
};

export const fetchArenaState = async (
  program: any,
  key: PublicKey
): Promise<IdlAccounts<Betting>["arenaState"] | null> => {
  return await fetchData(program, "arenaState", key);
};

export const fetchUserBetState = async (
  program: any,
  key: PublicKey
): Promise<IdlAccounts<Betting>["userBetState"] | null> => {
  return await fetchData(program, "userBetState", key);
};

export const fetchUserState = async (
  program: any,
  key: PublicKey
): Promise<IdlAccounts<Betting>["userState"] | null> => {
  return await fetchData(program, "userState", key);
};


export const fetchHourState = async (
  program: any,
  key: PublicKey
): Promise<IdlAccounts<Betting>["hourState"] | null> => {
  return await fetchData(program, "hourState", key);
};

export const fetchDayState = async (
  program: any,
  key: PublicKey
): Promise<IdlAccounts<Betting>["dayState"] | null> => {
  return await fetchData(program, "hourState", key);
};

export const fetchWeekState = async (
  program: any,
  key: PublicKey
): Promise<IdlAccounts<Betting>["weekState"] | null> => {
  return await fetchData(program, "hourState", key);
};

export const fetchEightBoxState = async (
  program: any,
  key: PublicKey
): Promise<IdlAccounts<Betting>["eightBoxState"] | null> => {
  return await fetchData(program, "eightBoxState", key);
};



export const fetchArenaStates = async (
  connection: any,
  wallet: any,
  arenaIds: Array<number>
) : Promise<any> => {
  const program = getProgram(connection, wallet);
  const keys: Array<PublicKey> = await Promise.all(arenaIds.map((id) => getArenaStateKey(id)));
  const arenaStateAccounts = await connection.getMultipleAccountsInfo(keys);
  const parsedArenaStateAccounts: any = [];
  arenaStateAccounts.forEach((acc) => {
    if (acc?.data) {
      let decodeResult: ArenaStateType = program.coder.accounts.decode("arenaState", acc?.data as Buffer);
      parsedArenaStateAccounts.push({
        ...decodeResult,
        parsedArenaId: decodeResult.arenaId.toNumber(),
        parsedDownAmount: cvtDecimalBN2Number(decodeResult.downAmount),
        parsedDownCount: cvtDecimalBN2Number(decodeResult.downCount),
        parsedUpAmount: cvtDecimalBN2Number(decodeResult.upAmount),
        parsedUpCount: cvtDecimalBN2Number(decodeResult.upCount),
        parsedFinalPrice: cvtDecimalBN2Number(decodeResult.finalPrice, PRICE_DECIMALS),
        parsedLockedPrice: cvtDecimalBN2Number(decodeResult.lockedPrice, PRICE_DECIMALS),
      });
    }
  })
  return parsedArenaStateAccounts;
}