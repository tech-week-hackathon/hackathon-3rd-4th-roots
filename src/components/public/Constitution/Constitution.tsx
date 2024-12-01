// Home.tsx
import { useConstitution } from "./useConstitution";
import Head from "next/head";
import styles from "./Constitution.module.scss";
import {
  CommitteeEntity,
  ProposalEntity,
  DRepVoteEntity,
  StakePoolVoteEntity,
  ConstitutionEntity,
  CommitteeVoteEntity,
  CurrentParametersEntity,
} from "@/lib/SmartDB/Entities/index";
import { useEffect, useState } from "react";
import { BaseEntity, BaseSmartDBFrontEndApiCalls } from "smart-db";
import {
  CommitteeApi,
  CommitteeVoteApi,
  ConstitutionApi,
  CurrentParametersApi,
  DRepVoteApi,
  ProposalApi,
  StakePoolVoteApi,
} from "@example/src/lib/SmartDB/FrontEnd";
import {
  convertHashToBech32Committee,
  formatAddressUI,
} from "@example/src/utils/formats";
import { useRouter } from "next/router";

export default function Constitution() {
  const { } = useConstitution();

  // Effect hook to trigger the script generation when the Lucid instance is available
  useEffect(() => {
    const fetch = async () => {
    };

    fetch();
  }, []);

  /*   async function getDataCommittee() {
    const commit = await CommitteeApi.getAllApi_();

    console.log(convertHashToBech32(commit[0].scriptHash));
  } */

  const [commitees, setCommmitees] = useState<CommitteeEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchComittees = async () => {
      try {
        const result: CommitteeEntity[] = await CommitteeApi.getAllApi_();
        setCommmitees(result);
      } catch (error) {
        console.error("Error fetching dreps:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComittees();
  }, []);

  if (loading) {
    return <div className={styles.page}>Loading...</div>;
  }

  const router = useRouter();

  function handleClickCommittee(id: string) {
    router.push(`/committee/${id}`);
  }

  return (
    <>
      <Head>
        <title>Committees | dExpo</title>
        <meta name="description" content="dExpo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>Welcome to dExpo</h1>
        <h2 className={styles.subtitle}>Active Committees</h2>
        <div className={styles.committeeList}>
          {commitees.map((commitee) => {
            return (
              <div key={commitee.scriptHash} className={styles.committeeItem}>
                <p className={styles.text}>
                  {formatAddressUI(
                    convertHashToBech32Committee(commitee.scriptHash)
                  )}
                </p>
                <p className={styles.active}>Active until epoch: {commitee.revelance}</p>
                <div className={styles.btnCommittee} onClick={() => handleClickCommittee(convertHashToBech32Committee(commitee.scriptHash))}>View Committee</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
