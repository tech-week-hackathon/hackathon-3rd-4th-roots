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

  const [constitutions, setConstitution] = useState<ConstitutionEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchConstitution = async () => {
      try {
        const result: ConstitutionEntity[] = await ConstitutionApi.getAllApi_();
        setConstitution(result);
      } catch (error) {
        console.error("Error fetching Constitution:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchConstitution();
  }, []);

  if (loading) {
    return <div className={styles.page}>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Constitution | dExpo</title>
        <meta name="description" content="dExpo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>Welcome to dExpo</h1>
        <h2 className={styles.subtitle}>Active Constitution</h2>
        <div className={styles.committeeList}>
          {constitutions.map((constitution) => {
            return (
              <div key={constitution.dataHash} className={styles.committeeItem}>
                <p className={styles.text}>
                  {constitution.url}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
