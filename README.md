# FEEL MARKET Betting Example
![1*cXNgzu0Pvj4HwOLw4Akwqg](https://pbs.twimg.com/profile_banners/1562011601443643393/1661501255/1500x500)

<p align="center">
  <a href="https://feel.market">feel.market</a>
  <br/>
  Prediction market game
</p>
<br/>

This repo is an example to bet 1 USDC down on FEEL market and claim available rewards.

## Getting started
- We recommend `yarn` due to `resolutions`
- Add a `.env` to root
- Populate these values
```
RPC_ENDPOINT=https://api.mainnet-beta.solana.com/
WALLET_KEYPAIR=<wallet keypair>
```
- yarn install
- npx ts-node process-userBet.ts //To bet
- npx ts-node process-claimReward.ts //To bet

## Additional datas
You can get usefull datas 
- [History : last 100 finished rounds](https://api.feel.market/current_round/history_for_bots.json)
- [Current round datas](https://api.feel.market/current_round/current_round.json)
- [Next round datas](https://api.feel.market/current_round/next_round.json)

## Disclaimer
This are code examples, please, adapt it as you need