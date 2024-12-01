// Home.tsx
import { useHome } from './useHome';
import Head from "next/head";
import styles from "./Home.module.scss";
import { CommitteeEntity, ProposalEntity, DRepVoteEntity, StakePoolVoteEntity, ConstitutionEntity, CommitteeVoteEntity, CurrentParametersEntity } from '@/lib/SmartDB/Entities/index'; // Asegúrate de tener las entidades definidas
import { BlockfrostProvider } from "@meshsdk/core";
import { useEffect } from 'react';
import { BaseSmartDBFrontEndApiCalls } from 'smart-db';
import { CommitteeApi, CommitteeVoteApi, ConstitutionApi, CurrentParametersApi, DRepVoteApi, ProposalApi, StakePoolVoteApi } from '@example/src/lib/SmartDB/FrontEnd';

const blockchainProvider = new BlockfrostProvider(
  "preprod4eC1bMDlOtVNOxGaMuauOiR8AlbbfR3x"
);

// Función principal para leer y guardar los datos
async function processAndSaveQueryData() {
  try {
    // Leer y parsear el archivo JSON
    const jsonDataExtended= {
    "committee": {
        "members": {
            "scriptHash-2f4a6c6f098e20ee4bfd5b39942c164575f8ceb348e754df5d0ec04f": 229,
            "scriptHash-5098dfd0deba725fadd692198fc33ee959fbe7e6edf1b5a695e06e61": 229,
            "scriptHash-5a71f17f4ce4c1c0be053575d717ade6ad8a1d5453d02a65ce40d4b1": 229,
            "scriptHash-6095e643ea6f1cccb6e463ec34349026b3a48621aac5d512655ab1bf": 229,
            "scriptHash-94c0de47e7ae32e3f7234ada5cf976506b68e3bb88c54dc53b4ba984": 229,
            "scriptHash-94f51c795a6c11adb9c1e30f0b6def4230cbd0b8bc800098e2d2307b": 229,
            "scriptHash-a6a5e006fd4e8f51062dc431362369b2a43140abced8aa2ff2256d7b": 229
        },
        "threshold": {
            "denominator": 3,
            "numerator": 2
        }
    },
    "constitution": {
        "anchor": {
            "dataHash": "ca41a91f399259bcefe57f9858e91f6d00e1a38d6d9c63d4052914ea7bd70cb2",
            "url": "ipfs://bafkreifnwj6zpu3ixa4siz2lndqybyc5wnnt3jkwyutci4e2tmbnj3xrdm"
        },
        "script": "fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64"
    },
    "currentPParams": {},
    "futurePParams": {},
    "nextRatifyState": {
        "enactedGovActions": [],
        "expiredGovActions": [],
        "nextEnactState": {
            "committee": {
                "members": {
                    "scriptHash-2f4a6c6f098e20ee4bfd5b39942c164575f8ceb348e754df5d0ec04f": 229,
                    "scriptHash-5098dfd0deba725fadd692198fc33ee959fbe7e6edf1b5a695e06e61": 229,
                    "scriptHash-5a71f17f4ce4c1c0be053575d717ade6ad8a1d5453d02a65ce40d4b1": 229,
                    "scriptHash-6095e643ea6f1cccb6e463ec34349026b3a48621aac5d512655ab1bf": 229,
                    "scriptHash-94c0de47e7ae32e3f7234ada5cf976506b68e3bb88c54dc53b4ba984": 229,
                    "scriptHash-94f51c795a6c11adb9c1e30f0b6def4230cbd0b8bc800098e2d2307b": 229,
                    "scriptHash-a6a5e006fd4e8f51062dc431362369b2a43140abced8aa2ff2256d7b": 229
                },
                "threshold": {
                    "denominator": 3,
                    "numerator": 2
                }
            },
            "constitution": {
                "anchor": {
                    "dataHash": "ca41a91f399259bcefe57f9858e91f6d00e1a38d6d9c63d4052914ea7bd70cb2",
                    "url": "ipfs://bafkreifnwj6zpu3ixa4siz2lndqybyc5wnnt3jkwyutci4e2tmbnj3xrdm"
                },
                "script": "fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64"
            },
            "curPParams": {},
            "prevGovActionIds": {
                "Committee": null,
                "Constitution": null,
                "HardFork": {
                    "govActionIx": 0,
                    "txId": "ccb27f6b0d58c25ae33fd821b62c387f5230dae930afd07489fa3df56ae56522"
                },
                "PParamUpdate": {
                    "govActionIx": 0,
                    "txId": "b52f02288e3ce8c7e57455522f4edd09c12797749e2db32098ecbe980b645d45"
                }
            },
            "prevPParams": {}
        },
        "ratificationDelayed": false
    },
    "previousPParams": {},
    "proposals": [
        {
            "actionId": {
                "govActionIx": 0,
                "txId": "8338efe8106db60822fef974b9914cbd012205232b39d151c1720ec36e71fe9f"
            },
            "committeeVotes": {},
            "dRepVotes": {
                "keyHash-11ee7ea43198d7265e6e46ad56caff515b974dd2af4ff1c2562a4f43": "VoteYes",
                "keyHash-d1bffcf5008a05f9103c36904f5a68d362aead7b4399c5a1ce420e50": "VoteYes",
                "scriptHash-d04d39c4e4b42e9edddbb741bb6636683b6822ae2c68df704b65ce4a": "Abstain"
            },
            "expiresAfter": 183,
            "proposalProcedure": {
                "anchor": {
                    "dataHash": "179df93f3456f540d773c5802786ac08a92260e241d1b7109416891d849521fa",
                    "url": "https://my-ip.at/test/CIP108-example-signer.json"
                },
                "deposit": 100000000000,
                "govAction": {
                    "tag": "InfoAction"
                },
                "returnAddr": {
                    "credential": {
                        "keyHash": "c13582aec9a44fcc6d984be003c5058c660e1d2ff1370fd8b49ba73f"
                    },
                    "network": "Testnet"
                }
            },
            "proposedIn": 177,
            "stakePoolVotes": {
                "f9c8e7275348d3b1a3596c94095f43307990cc5f800bbbb256298658": "VoteYes"
            }
        },
        {
            "actionId": {
                "govActionIx": 1,
                "txId": "a338efe8106db60822fef974b9914cbd012205232b39d151c1720ec36e72fe9f"
            },
            "committeeVotes": {
                "scriptHash-2f4a6c6f098e20ee4bfd5b39942c164575f8ceb348e754df5d0ec04f": "VoteYes",
                "scriptHash-5098dfd0deba725fadd692198fc33ee959fbe7e6edf1b5a695e06e61": "VoteNo"
            },
            "dRepVotes": {
                "keyHash-11ee7ea43198d7265e6e46ad56caff515b974dd2af4ff1c2562a4f43": "VoteNo",
                "keyHash-d1bffcf5008a05f9103c36904f5a68d362aead7b4399c5a1ce420e50": "VoteYes"
            },
            "expiresAfter": 200,
            "proposalProcedure": {
                "anchor": {
                    "dataHash": "279df93f3456f540d773c5802786ac08a92260e241d1b7109416891d849521fa",
                    "url": "https://future.example.com/CIP203-example-signer.json"
                },
                "deposit": 150000000000,
                "govAction": {
                    "tag": "UpdateAction",
                    "details": "Increase block size for network scalability."
                },
                "returnAddr": {
                    "credential": {
                        "keyHash": "d34582aec9a44fcc6d984be003c5058c660e1d2ff1370fd8b49ba73f"
                    },
                    "network": "Mainnet"
                }
            },
            "proposedIn": 190,
            "stakePoolVotes": {
                "f9c8e7275348d3b1a3596c94095f43307990cc5f800bbbb256298658": "VoteYes"
            }
        },
        {
            "actionId": {
                "govActionIx": 2,
                "txId": "c338efe8106db60822fef974b9914cbd012205232b39d151c1720ec36e73fe9f"
            },
            "committeeVotes": {
                "scriptHash-5a71f17f4ce4c1c0be053575d717ade6ad8a1d5453d02a65ce40d4b1": "VoteYes",
                "scriptHash-6095e643ea6f1cccb6e463ec34349026b3a48621aac5d512655ab1bf": "VoteNo"
            },
            "dRepVotes": {
                "keyHash-11ee7ea43198d7265e6e46ad56caff515b974dd2af4ff1c2562a4f43": "VoteYes",
                "keyHash-d1bffcf5008a05f9103c36904f5a68d362aead7b4399c5a1ce420e50": "Abstain"
            },
            "expiresAfter": 250,
            "proposalProcedure": {
                "anchor": {
                    "dataHash": "379df93f3456f540d773c5802786ac08a92260e241d1b7109416891d849521fa",
                    "url": "https://future.example.com/CIP300-example-signer.json"
                },
                "deposit": 200000000000,
                "govAction": {
                    "tag": "HardForkInitiation",
                    "details": "Introduce new consensus mechanism."
                },
                "returnAddr": {
                    "credential": {
                        "keyHash": "e34582aec9a44fcc6d984be003c5058c660e1d2ff1370fd8b49ba73f"
                    },
                    "network": "Mainnet"
                }
            },
            "proposedIn": 200,
            "stakePoolVotes": {
                "f9c8e7275348d3b1a3596c94095f43307990cc5f800bbbb256298658": "VoteNo"
            }
        },
        {
            "actionId": {
                "govActionIx": 3,
                "txId": "e338efe8106db60822fef974b9914cbd012205232b39d151c1720ec36e74fe9f"
            },
            "committeeVotes": {
                "scriptHash-94c0de47e7ae32e3f7234ada5cf976506b68e3bb88c54dc53b4ba984": "VoteYes",
                "scriptHash-94f51c795a6c11adb9c1e30f0b6def4230cbd0b8bc800098e2d2307b": "VoteAbstain"
            },
            "dRepVotes": {
                "keyHash-21ff7ea43198d7265e6e46ad56caff515b974dd2af4ff1c2562a4f43": "VoteYes",
                "keyHash-f2cffcf5008a05f9103c36904f5a68d362aead7b4399c5a1ce420e50": "VoteNo"
            },
            "expiresAfter": 300,
            "proposalProcedure": {
                "anchor": {
                    "dataHash": "479df93f3456f540d773c5802786ac08a92260e241d1b7109416891d849521fa",
                    "url": "https://future.example.com/CIP400-example-signer.json"
                },
                "deposit": 250000000000,
                "govAction": {
                    "tag": "TreasuryWithdrawal",
                    "details": "Funding for educational blockchain initiatives."
                },
                "returnAddr": {
                    "credential": {
                        "keyHash": "f34582aec9a44fcc6d984be003c5058c660e1d2ff1370fd8b49ba73f"
                    },
                    "network": "Mainnet"
                }
            },
            "proposedIn": 210,
            "stakePoolVotes": {
                "f9c8e7275348d3b1a3596c94095f43307990cc5f800bbbb256298658": "VoteYes"
            }
        },
        {
            "actionId": {
                "govActionIx": 4,
                "txId": "f338efe8106db60822fef974b9914cbd012205232b39d151c1720ec36e75fe9f"
            },
            "committeeVotes": {
                "scriptHash-a6a5e006fd4e8f51062dc431362369b2a43140abced8aa2ff2256d7b": "VoteNo",
                "scriptHash-2f4a6c6f098e20ee4bfd5b39942c164575f8ceb348e754df5d0ec04f": "VoteYes"
            },
            "dRepVotes": {
                "keyHash-11ee7ea43198d7265e6e46ad56caff515b974dd2af4ff1c2562a4f43": "VoteYes",
                "keyHash-d1bffcf5008a05f9103c36904f5a68d362aead7b4399c5a1ce420e50": "Abstain"
            },
            "expiresAfter": 400,
            "proposalProcedure": {
                "anchor": {
                    "dataHash": "579df93f3456f540d773c5802786ac08a92260e241d1b7109416891d849521fa",
                    "url": "https://future.example.com/CIP500-example-signer.json"
                },
                "deposit": 300000000000,
                "govAction": {
                    "tag": "UpdateConstitution",
                    "details": "Adding guidelines for decentralized identity governance."
                },
                "returnAddr": {
                    "credential": {
                        "keyHash": "g34582aec9a44fcc6d984be003c5058c660e1d2ff1370fd8b49ba73f"
                    },
                    "network": "Mainnet"
                }
            },
            "proposedIn": 220,
            "stakePoolVotes": {
                "f9c8e7275348d3b1a3596c94095f43307990cc5f800bbbb256298658": "VoteNo"
            }
        }
    ]
}
    const jsonDataActual = {
      "committee": {
        "members": {
          "scriptHash-2f4a6c6f098e20ee4bfd5b39942c164575f8ceb348e754df5d0ec04f": 229,
          "scriptHash-5098dfd0deba725fadd692198fc33ee959fbe7e6edf1b5a695e06e61": 229,
          "scriptHash-5a71f17f4ce4c1c0be053575d717ade6ad8a1d5453d02a65ce40d4b1": 229,
          "scriptHash-6095e643ea6f1cccb6e463ec34349026b3a48621aac5d512655ab1bf": 229,
          "scriptHash-94c0de47e7ae32e3f7234ada5cf976506b68e3bb88c54dc53b4ba984": 229,
          "scriptHash-94f51c795a6c11adb9c1e30f0b6def4230cbd0b8bc800098e2d2307b": 229,
          "scriptHash-a6a5e006fd4e8f51062dc431362369b2a43140abced8aa2ff2256d7b": 229
        },
        "threshold": {
          "denominator": 3,
          "numerator": 2
        }
      },
      "constitution": {
        "anchor": {
          "dataHash": "ca41a91f399259bcefe57f9858e91f6d00e1a38d6d9c63d4052914ea7bd70cb2",
          "url": "ipfs://bafkreifnwj6zpu3ixa4siz2lndqybyc5wnnt3jkwyutci4e2tmbnj3xrdm"
        },
        "script": "fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64"
      },
      "futurePParams": {
        "tag": "NoPParamsUpdate"
      },
      "nextRatifyState": {
        "enactedGovActions": [],
        "expiredGovActions": [],
        "nextEnactState": {
          "committee": {
            "members": {
              "scriptHash-2f4a6c6f098e20ee4bfd5b39942c164575f8ceb348e754df5d0ec04f": 229,
              "scriptHash-5098dfd0deba725fadd692198fc33ee959fbe7e6edf1b5a695e06e61": 229,
              "scriptHash-5a71f17f4ce4c1c0be053575d717ade6ad8a1d5453d02a65ce40d4b1": 229,
              "scriptHash-6095e643ea6f1cccb6e463ec34349026b3a48621aac5d512655ab1bf": 229,
              "scriptHash-94c0de47e7ae32e3f7234ada5cf976506b68e3bb88c54dc53b4ba984": 229,
              "scriptHash-94f51c795a6c11adb9c1e30f0b6def4230cbd0b8bc800098e2d2307b": 229,
              "scriptHash-a6a5e006fd4e8f51062dc431362369b2a43140abced8aa2ff2256d7b": 229
            },
            "threshold": {
              "denominator": 3,
              "numerator": 2
            }
          },
          "constitution": {
            "anchor": {
              "dataHash": "ca41a91f399259bcefe57f9858e91f6d00e1a38d6d9c63d4052914ea7bd70cb2",
              "url": "ipfs://bafkreifnwj6zpu3ixa4siz2lndqybyc5wnnt3jkwyutci4e2tmbnj3xrdm"
            },
            "script": "fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64"
          },
          "prevGovActionIds": {
            "Committee": null,
            "Constitution": null,
            "HardFork": {
              "govActionIx": 0,
              "txId": "ccb27f6b0d58c25ae33fd821b62c387f5230dae930afd07489fa3df56ae56522"
            },
            "PParamUpdate": {
              "govActionIx": 0,
              "txId": "b52f02288e3ce8c7e57455522f4edd09c12797749e2db32098ecbe980b645d45"
            }
          },
        },
        "ratificationDelayed": false
      },
      "proposals": [
        {
          "actionId": {
            "govActionIx": 0,
            "txId": "8338efe8106db60822fef974b9914cbd012205232b39d151c1720ec36e71fe9f"
          },
          "committeeVotes": {},
          "dRepVotes": {
            "keyHash-11ee7ea43198d7265e6e46ad56caff515b974dd2af4ff1c2562a4f43": "VoteYes",
            "keyHash-d1bffcf5008a05f9103c36904f5a68d362aead7b4399c5a1ce420e50": "VoteYes",
            "scriptHash-d04d39c4e4b42e9edddbb741bb6636683b6822ae2c68df704b65ce4a": "Abstain"
          },
          "expiresAfter": 183,
          "proposalProcedure": {
            "anchor": {
              "dataHash": "179df93f3456f540d773c5802786ac08a92260e241d1b7109416891d849521fa",
              "url": "https://my-ip.at/test/CIP108-example-signer.json"
            },
            "deposit": 100000000000,
            "govAction": {
              "tag": "InfoAction"
            },
            "returnAddr": {
              "credential": {
                "keyHash": "c13582aec9a44fcc6d984be003c5058c660e1d2ff1370fd8b49ba73f"
              },
              "network": "Testnet"
            }
          },
          "proposedIn": 177,
          "stakePoolVotes": {
            "f9c8e7275348d3b1a3596c94095f43307990cc5f800bbbb256298658": "VoteYes"
          }
        }
      ]
    }

    // Llamar a la función de extracción y guardado
    await extractAndSaveData(jsonDataExtended);

    console.log('Datos procesados y guardados exitosamente.');
  } catch (error) {
    console.error('Error al procesar y guardar los datos:', error);
  }
}

// Función que extrae y guarda la información del JSON (reutilizada)
async function extractAndSaveData(jsonData: any) {
const { committee, constitution, proposals, currentPParams } = jsonData;

// Guardar Comité
const committeeMembers = Object.entries(committee.members);
for (const [scriptHash, relevance] of committeeMembers) {
  const exists = await CommitteeApi.checkIfExistsApi_({ scriptHash: scriptHash });
  if (!exists) {
    const committeeEntity = new CommitteeEntity();
    committeeEntity.scriptHash = scriptHash;
    committeeEntity.revelance = relevance as number;
    CommitteeApi.createApi(committeeEntity);
  }
}

// Guardar Constitución
const constitutionExists = await ConstitutionApi.checkIfExistsApi_({ dataHash: constitution.anchor.dataHash });
if (!constitutionExists) {
  const constitutionEntity = new ConstitutionEntity();
  constitutionEntity.dataHash = constitution.anchor.dataHash;
  constitutionEntity.url = constitution.anchor.url;
  constitutionEntity.script = constitution.script;
  ConstitutionApi.createApi(constitutionEntity);
}

// Guardar Propuestas
for (const proposal of proposals) {
  const proposalExists = await ProposalApi.checkIfExistsApi_({ actionId: proposal.actionId.govActionIx });
  if (!proposalExists) {
    const proposalEntity = new ProposalEntity();
    proposalEntity.actionId = proposal.actionId.govActionIx;
    proposalEntity.txId = proposal.actionId.txId;
    proposalEntity.proposedIn = proposal.proposedIn;
    proposalEntity.expiresAfter = proposal.expiresAfter;
    proposalEntity.dataHash = proposal.proposalProcedure.anchor.dataHash;
    proposalEntity.url = proposal.proposalProcedure.anchor.url;
    proposalEntity.deposit = proposal.proposalProcedure.deposit;
    ProposalApi.createApi(proposalEntity);
  }

  // Guardar Votos del Comité
  const committeeVotes = Object.entries(proposal.committeeVotes);
  for (const [scriptHash, vote] of committeeVotes) {
    const committeeVoteExists = await CommitteeVoteApi.checkIfExistsApi_({
      proposalActionId: proposal.actionId.govActionIx,
      scriptHash,
    });
    if (!committeeVoteExists) {
      const committeeVoteEntity = new CommitteeVoteEntity();
      committeeVoteEntity.proposalActionId = proposal.actionId.govActionIx;
      committeeVoteEntity.scriptHash = scriptHash;
      committeeVoteEntity.vote = vote as string;
      CommitteeVoteApi.createApi(committeeVoteEntity);
    }
  }

  // Guardar Votos de DRep
  const dRepVotes = Object.entries(proposal.dRepVotes);
  for (const [keyHash, vote] of dRepVotes) {
    const dRepVoteExists = await DRepVoteApi.checkIfExistsApi_({
      proposalActionId: proposal.actionId.govActionIx,
      keyHash,
    });
    if (!dRepVoteExists) {
      const dRepVoteEntity = new DRepVoteEntity();
      dRepVoteEntity.proposalActionId = proposal.actionId.govActionIx;
      dRepVoteEntity.keyHash = keyHash;
      dRepVoteEntity.vote = vote as string;
      DRepVoteApi.createApi(dRepVoteEntity);
    }
  }

  // Guardar Votos de Stake Pools
  const stakePoolVotes = Object.entries(proposal.stakePoolVotes);
  for (const [poolId, vote] of stakePoolVotes) {
    const stakePoolVoteExists = await StakePoolVoteApi.checkIfExistsApi_({
      proposalActionId: proposal.actionId.govActionIx,
      poolId,
    });
    if (!stakePoolVoteExists) {
      const stakePoolVoteEntity = new StakePoolVoteEntity();
      stakePoolVoteEntity.proposalActionId = proposal.actionId.govActionIx;
      stakePoolVoteEntity.poolId = poolId;
      stakePoolVoteEntity.vote = vote as string;
      StakePoolVoteApi.createApi(stakePoolVoteEntity);
    }
  }
}

// Guardar Parámetros Actuales
const parametersExists = await CurrentParametersApi.checkIfExistsApi_({ maxTxSize: currentPParams.maxTxSize });
if (!parametersExists) {
  const parametersEntity = new CurrentParametersEntity();
  parametersEntity.collateralPercentage = currentPParams.collateralPercentage;
  parametersEntity.committeeMaxTermLength = currentPParams.committeeMaxTermLength;
  parametersEntity.committeeminSize = currentPParams.committeeMinSize;
  parametersEntity.monetaryExpansion = currentPParams.monetaryExpansion;
  parametersEntity.treasuryCut = currentPParams.treasuryCut;
  parametersEntity.maxTxSize = currentPParams.maxTxSize;
  parametersEntity.txFeePerByte = currentPParams.txFeePerByte;
  CurrentParametersApi.createApi(parametersEntity);
}}

export default function Home() {
  const { } = useHome();


  // Effect hook to trigger the script generation when the Lucid instance is available
  useEffect(() => {
    const fetch = async () => {
      await processAndSaveQueryData(); // Generate scripts with Lucid instance
    };

    fetch();
  }, []);

  async function getDataDreps() {
    const result = await blockchainProvider.get("/governance/dreps");

    console.log(result);
  }

  async function getDataProposals() {
    const result = await blockchainProvider.get("/governance/proposals");

    console.log(result);
  }

  return (
    <>
      <Head>
        <title>Governance DApp | Home</title>
        <meta name="description" content="Governance DApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <h1>Welcome to Governance DApp</h1>
        <div>
          <button onClick={getDataDreps}>Get Data dreps</button>
        </div>
        <div>
          <button onClick={getDataProposals}>Get Data Proposals</button>
        </div>
      </div>
    </>
  );
}

