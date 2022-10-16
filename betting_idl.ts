export type Betting = {
  "version": "0.1.0",
  "name": "betting",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rankMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        },
        {
          "name": "btcPythAccount",
          "type": "publicKey"
        },
        {
          "name": "ethPythAccount",
          "type": "publicKey"
        },
        {
          "name": "solPythAccount",
          "type": "publicKey"
        },
        {
          "name": "avaxPythAccount",
          "type": "publicKey"
        },
        {
          "name": "adaPythAccount",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "openArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "startArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solPythAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "userBet",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eightBoxState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userHourState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDayState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userWeekState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        },
        {
          "name": "betAmount",
          "type": "u64"
        },
        {
          "name": "hour",
          "type": "u64"
        },
        {
          "name": "day",
          "type": "u64"
        },
        {
          "name": "week",
          "type": "u64"
        },
        {
          "name": "boxId",
          "type": "u64"
        },
        {
          "name": "betSide",
          "type": "u8"
        },
        {
          "name": "refKey",
          "type": "publicKey"
        },
        {
          "name": "hashKey",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "endArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "refUserState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "refUserVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "returnBet",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initUserState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "claimReferralReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buildNft",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftBuildState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftCreator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyNft",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftCreator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelTreasuryAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initHourState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userHourState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        },
        {
          "name": "hour",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initDayState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userDayState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        },
        {
          "name": "day",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initWeekState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userWeekState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        },
        {
          "name": "week",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initEightBoxState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eightBoxState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        },
        {
          "name": "boxId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "endHour",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "hourResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "hour",
          "type": "u64"
        },
        {
          "name": "tiers",
          "type": {
            "array": [
              "u64",
              5
            ]
          }
        },
        {
          "name": "rewards",
          "type": {
            "array": [
              "u64",
              5
            ]
          }
        }
      ]
    },
    {
      "name": "endDay",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dayResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "day",
          "type": "u64"
        },
        {
          "name": "tiers",
          "type": {
            "array": [
              "u64",
              7
            ]
          }
        },
        {
          "name": "rewards",
          "type": {
            "array": [
              "u64",
              7
            ]
          }
        }
      ]
    },
    {
      "name": "endWeek",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "weekResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "week",
          "type": "u64"
        },
        {
          "name": "tiers",
          "type": {
            "array": [
              "u64",
              9
            ]
          }
        },
        {
          "name": "rewards",
          "type": {
            "array": [
              "u64",
              9
            ]
          }
        }
      ]
    },
    {
      "name": "claimEightBox",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eightBoxState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "boxId",
          "type": "u64"
        },
        {
          "name": "prizeId",
          "type": "u8"
        }
      ]
    },
    {
      "name": "claimHourRankReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feelVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userHourState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "hourResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rankMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "hour",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimDayRankReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feelVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDayState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dayResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rankMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "day",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimWeekRankReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feelVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userWeekState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "weekResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rankMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "week",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintFragment",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fragmentNo",
          "type": "u8"
        }
      ]
    },
    {
      "name": "openBundle",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userBundleAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bundleMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bundleMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "btcPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ethPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "solPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "avaxPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "adaPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyBundle",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundleCreator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundleMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundleMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bundleEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBundleAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelTreasuryAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bundleId",
          "type": "u8"
        }
      ]
    },
    {
      "name": "burnFragments",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftBuildState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initNftBuild",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftBuildState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createFragmentMints",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fragment1Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment2Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment3Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment4Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment5Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment6Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment7Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment8Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment9Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "getHourRank",
      "accounts": [
        {
          "name": "userHourState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "hourResult",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u8"
    },
    {
      "name": "getDayRank",
      "accounts": [
        {
          "name": "userDayState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dayResult",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u8"
    },
    {
      "name": "getWeekRank",
      "accounts": [
        {
          "name": "userWeekState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "weekResult",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u8"
    },
    {
      "name": "closeHourResult",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "hourResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeDayResult",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dayResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeWeekResult",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "weekResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeArenaState",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeEightBoxState",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eightBoxState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "arenaState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "arenaId",
            "type": "u64"
          },
          {
            "name": "lockedPrice",
            "type": "u64"
          },
          {
            "name": "startTimestamp",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
          },
          {
            "name": "status",
            "type": "u8"
          },
          {
            "name": "upAmount",
            "type": "u64"
          },
          {
            "name": "upCount",
            "type": "u64"
          },
          {
            "name": "downAmount",
            "type": "u64"
          },
          {
            "name": "downCount",
            "type": "u64"
          },
          {
            "name": "finalPrice",
            "type": "u64"
          },
          {
            "name": "endTimestamp",
            "type": "u64"
          },
          {
            "name": "betResult",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "dayResult",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "day",
            "type": "u64"
          },
          {
            "name": "tiers",
            "type": {
              "array": [
                "u64",
                7
              ]
            }
          },
          {
            "name": "rewardPerTier",
            "type": {
              "array": [
                "u64",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "dayState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "eightBoxState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "claimedStatus",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isInitialized",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "btcPythAccount",
            "type": "publicKey"
          },
          {
            "name": "ethPythAccount",
            "type": "publicKey"
          },
          {
            "name": "solPythAccount",
            "type": "publicKey"
          },
          {
            "name": "avaxPythAccount",
            "type": "publicKey"
          },
          {
            "name": "adaPythAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "rankMint",
            "type": "publicKey"
          },
          {
            "name": "arenaDuration",
            "type": "u64"
          },
          {
            "name": "platformFeeRate",
            "type": "u64"
          },
          {
            "name": "referralFeeRate",
            "type": "u64"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "hourResult",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "hour",
            "type": "u64"
          },
          {
            "name": "tiers",
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          },
          {
            "name": "rewardPerTier",
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "hourState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "nftBuildState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "buildState",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "userBetState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "betTimestamp",
            "type": "u64"
          },
          {
            "name": "arenaId",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isUp",
            "type": "u8"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "isRefInited",
            "type": "u8"
          },
          {
            "name": "refReward",
            "type": "u64"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "weekResult",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "week",
            "type": "u64"
          },
          {
            "name": "tiers",
            "type": {
              "array": [
                "u64",
                9
              ]
            }
          },
          {
            "name": "rewardPerTier",
            "type": {
              "array": [
                "u64",
                9
              ]
            }
          }
        ]
      }
    },
    {
      "name": "weekState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ArenaStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Opened"
          },
          {
            "name": "Started"
          },
          {
            "name": "EndRatioBelow"
          },
          {
            "name": "EndSuccess"
          },
          {
            "name": "Cancelled"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "NotAllowedAuthority",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6002,
      "name": "InvalidParameter",
      "msg": "Invalid Parameter"
    },
    {
      "code": 6003,
      "name": "BetResultMisMatch",
      "msg": "You are not winner."
    },
    {
      "code": 6004,
      "name": "AlreadyClaimed",
      "msg": "You already claimed reward."
    },
    {
      "code": 6005,
      "name": "FinishedArena",
      "msg": "This Arena is finished"
    },
    {
      "code": 6006,
      "name": "ArenaNotFinished",
      "msg": "This Arena is not finished"
    },
    {
      "code": 6007,
      "name": "ArenaNotStarted",
      "msg": "This Arena is not started"
    },
    {
      "code": 6008,
      "name": "ArenaNotOpened",
      "msg": "This Arena is not opened or already started"
    },
    {
      "code": 6009,
      "name": "ArenaNotCancelled",
      "msg": "This Arena is not cancelled by admin"
    },
    {
      "code": 6010,
      "name": "ArenaFailed",
      "msg": "Bet amount of one side is zero."
    },
    {
      "code": 6011,
      "name": "ReferrerMisMatch",
      "msg": "Incorrect Referrer"
    },
    {
      "code": 6012,
      "name": "InvalidReferrerHash",
      "msg": "Incorrect Referrer Hash"
    },
    {
      "code": 6013,
      "name": "Incorrect8Hour",
      "msg": "Incorrect 8 Hour Box"
    },
    {
      "code": 6014,
      "name": "IncorrectHour",
      "msg": "Incorrect Hour"
    },
    {
      "code": 6015,
      "name": "IncorrectDay",
      "msg": "Incorrect Day"
    },
    {
      "code": 6016,
      "name": "IncorrectWeek",
      "msg": "Incorrect Week"
    },
    {
      "code": 6017,
      "name": "UnableToClaim",
      "msg": "Unable to claim because you are not winner"
    },
    {
      "code": 6018,
      "name": "ReduceAmountExceed",
      "msg": "Reduce amount exceeds deposit amount"
    },
    {
      "code": 6019,
      "name": "ReduceNotAccepted",
      "msg": "Reduce is not accepted by client or freelancer"
    },
    {
      "code": 6020,
      "name": "IncorrectMetadata",
      "msg": "Incorrect Metadata"
    },
    {
      "code": 6021,
      "name": "IncorrectMint",
      "msg": "Incorrect Mint"
    },
    {
      "code": 6022,
      "name": "EmptyAccount",
      "msg": "Token Account is empty"
    },
    {
      "code": 6023,
      "name": "FragmentAlreadyBurnt",
      "msg": "This fragment is already burnt"
    },
    {
      "code": 6024,
      "name": "NotReadyToBuildNFT",
      "msg": "Not ready to build NFT"
    },
    {
      "code": 6025,
      "name": "UnexpectedAction",
      "msg": "This action is not expected."
    }
  ]
};

export const IDL: Betting = {
  "version": "0.1.0",
  "name": "betting",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rankMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        },
        {
          "name": "btcPythAccount",
          "type": "publicKey"
        },
        {
          "name": "ethPythAccount",
          "type": "publicKey"
        },
        {
          "name": "solPythAccount",
          "type": "publicKey"
        },
        {
          "name": "avaxPythAccount",
          "type": "publicKey"
        },
        {
          "name": "adaPythAccount",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "openArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "startArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solPythAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "userBet",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eightBoxState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userHourState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDayState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userWeekState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        },
        {
          "name": "betAmount",
          "type": "u64"
        },
        {
          "name": "hour",
          "type": "u64"
        },
        {
          "name": "day",
          "type": "u64"
        },
        {
          "name": "week",
          "type": "u64"
        },
        {
          "name": "boxId",
          "type": "u64"
        },
        {
          "name": "betSide",
          "type": "u8"
        },
        {
          "name": "refKey",
          "type": "publicKey"
        },
        {
          "name": "hashKey",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "endArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "refUserState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "refUserVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "returnBet",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initUserState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "claimReferralReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buildNft",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftBuildState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftCreator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyNft",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftCreator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelTreasuryAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initHourState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userHourState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        },
        {
          "name": "hour",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initDayState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userDayState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        },
        {
          "name": "day",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initWeekState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userWeekState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        },
        {
          "name": "week",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initEightBoxState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eightBoxState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        },
        {
          "name": "boxId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "endHour",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "hourResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "hour",
          "type": "u64"
        },
        {
          "name": "tiers",
          "type": {
            "array": [
              "u64",
              5
            ]
          }
        },
        {
          "name": "rewards",
          "type": {
            "array": [
              "u64",
              5
            ]
          }
        }
      ]
    },
    {
      "name": "endDay",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dayResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "day",
          "type": "u64"
        },
        {
          "name": "tiers",
          "type": {
            "array": [
              "u64",
              7
            ]
          }
        },
        {
          "name": "rewards",
          "type": {
            "array": [
              "u64",
              7
            ]
          }
        }
      ]
    },
    {
      "name": "endWeek",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "weekResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "week",
          "type": "u64"
        },
        {
          "name": "tiers",
          "type": {
            "array": [
              "u64",
              9
            ]
          }
        },
        {
          "name": "rewards",
          "type": {
            "array": [
              "u64",
              9
            ]
          }
        }
      ]
    },
    {
      "name": "claimEightBox",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eightBoxState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "boxId",
          "type": "u64"
        },
        {
          "name": "prizeId",
          "type": "u8"
        }
      ]
    },
    {
      "name": "claimHourRankReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feelVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userHourState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "hourResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rankMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "hour",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimDayRankReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feelVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDayState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dayResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rankMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "day",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimWeekRankReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feelVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userWeekState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "weekResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rankMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "week",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintFragment",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fragmentNo",
          "type": "u8"
        }
      ]
    },
    {
      "name": "openBundle",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userBundleAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bundleMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bundleMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "btcPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ethPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "solPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "avaxPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "adaPythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyBundle",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundleCreator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundleMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundleMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bundleEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBundleAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeelAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelTreasuryAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feelMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bundleId",
          "type": "u8"
        }
      ]
    },
    {
      "name": "burnFragments",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftBuildState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initNftBuild",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftBuildState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createFragmentMints",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fragment1Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment2Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment3Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment4Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment5Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment6Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment7Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment8Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fragment9Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "getHourRank",
      "accounts": [
        {
          "name": "userHourState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "hourResult",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u8"
    },
    {
      "name": "getDayRank",
      "accounts": [
        {
          "name": "userDayState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dayResult",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u8"
    },
    {
      "name": "getWeekRank",
      "accounts": [
        {
          "name": "userWeekState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "weekResult",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u8"
    },
    {
      "name": "closeHourResult",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "hourResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeDayResult",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dayResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeWeekResult",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "weekResult",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeArenaState",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeEightBoxState",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eightBoxState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "arenaState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "arenaId",
            "type": "u64"
          },
          {
            "name": "lockedPrice",
            "type": "u64"
          },
          {
            "name": "startTimestamp",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
          },
          {
            "name": "status",
            "type": "u8"
          },
          {
            "name": "upAmount",
            "type": "u64"
          },
          {
            "name": "upCount",
            "type": "u64"
          },
          {
            "name": "downAmount",
            "type": "u64"
          },
          {
            "name": "downCount",
            "type": "u64"
          },
          {
            "name": "finalPrice",
            "type": "u64"
          },
          {
            "name": "endTimestamp",
            "type": "u64"
          },
          {
            "name": "betResult",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "dayResult",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "day",
            "type": "u64"
          },
          {
            "name": "tiers",
            "type": {
              "array": [
                "u64",
                7
              ]
            }
          },
          {
            "name": "rewardPerTier",
            "type": {
              "array": [
                "u64",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "dayState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "eightBoxState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "claimedStatus",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isInitialized",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "btcPythAccount",
            "type": "publicKey"
          },
          {
            "name": "ethPythAccount",
            "type": "publicKey"
          },
          {
            "name": "solPythAccount",
            "type": "publicKey"
          },
          {
            "name": "avaxPythAccount",
            "type": "publicKey"
          },
          {
            "name": "adaPythAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "rankMint",
            "type": "publicKey"
          },
          {
            "name": "arenaDuration",
            "type": "u64"
          },
          {
            "name": "platformFeeRate",
            "type": "u64"
          },
          {
            "name": "referralFeeRate",
            "type": "u64"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "hourResult",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "hour",
            "type": "u64"
          },
          {
            "name": "tiers",
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          },
          {
            "name": "rewardPerTier",
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "hourState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "nftBuildState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "buildState",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "userBetState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "betTimestamp",
            "type": "u64"
          },
          {
            "name": "arenaId",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isUp",
            "type": "u8"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "isRefInited",
            "type": "u8"
          },
          {
            "name": "refReward",
            "type": "u64"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "weekResult",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "week",
            "type": "u64"
          },
          {
            "name": "tiers",
            "type": {
              "array": [
                "u64",
                9
              ]
            }
          },
          {
            "name": "rewardPerTier",
            "type": {
              "array": [
                "u64",
                9
              ]
            }
          }
        ]
      }
    },
    {
      "name": "weekState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ArenaStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Opened"
          },
          {
            "name": "Started"
          },
          {
            "name": "EndRatioBelow"
          },
          {
            "name": "EndSuccess"
          },
          {
            "name": "Cancelled"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "NotAllowedAuthority",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6002,
      "name": "InvalidParameter",
      "msg": "Invalid Parameter"
    },
    {
      "code": 6003,
      "name": "BetResultMisMatch",
      "msg": "You are not winner."
    },
    {
      "code": 6004,
      "name": "AlreadyClaimed",
      "msg": "You already claimed reward."
    },
    {
      "code": 6005,
      "name": "FinishedArena",
      "msg": "This Arena is finished"
    },
    {
      "code": 6006,
      "name": "ArenaNotFinished",
      "msg": "This Arena is not finished"
    },
    {
      "code": 6007,
      "name": "ArenaNotStarted",
      "msg": "This Arena is not started"
    },
    {
      "code": 6008,
      "name": "ArenaNotOpened",
      "msg": "This Arena is not opened or already started"
    },
    {
      "code": 6009,
      "name": "ArenaNotCancelled",
      "msg": "This Arena is not cancelled by admin"
    },
    {
      "code": 6010,
      "name": "ArenaFailed",
      "msg": "Bet amount of one side is zero."
    },
    {
      "code": 6011,
      "name": "ReferrerMisMatch",
      "msg": "Incorrect Referrer"
    },
    {
      "code": 6012,
      "name": "InvalidReferrerHash",
      "msg": "Incorrect Referrer Hash"
    },
    {
      "code": 6013,
      "name": "Incorrect8Hour",
      "msg": "Incorrect 8 Hour Box"
    },
    {
      "code": 6014,
      "name": "IncorrectHour",
      "msg": "Incorrect Hour"
    },
    {
      "code": 6015,
      "name": "IncorrectDay",
      "msg": "Incorrect Day"
    },
    {
      "code": 6016,
      "name": "IncorrectWeek",
      "msg": "Incorrect Week"
    },
    {
      "code": 6017,
      "name": "UnableToClaim",
      "msg": "Unable to claim because you are not winner"
    },
    {
      "code": 6018,
      "name": "ReduceAmountExceed",
      "msg": "Reduce amount exceeds deposit amount"
    },
    {
      "code": 6019,
      "name": "ReduceNotAccepted",
      "msg": "Reduce is not accepted by client or freelancer"
    },
    {
      "code": 6020,
      "name": "IncorrectMetadata",
      "msg": "Incorrect Metadata"
    },
    {
      "code": 6021,
      "name": "IncorrectMint",
      "msg": "Incorrect Mint"
    },
    {
      "code": 6022,
      "name": "EmptyAccount",
      "msg": "Token Account is empty"
    },
    {
      "code": 6023,
      "name": "FragmentAlreadyBurnt",
      "msg": "This fragment is already burnt"
    },
    {
      "code": 6024,
      "name": "NotReadyToBuildNFT",
      "msg": "Not ready to build NFT"
    },
    {
      "code": 6025,
      "name": "UnexpectedAction",
      "msg": "This action is not expected."
    }
  ]
};
