import { useRouter } from "next/router";
import { CommitteeVoteApi } from "@example/src/lib/SmartDB/FrontEnd";
import { useEffect, useState } from "react";
import { CommitteeVoteEntity } from "@example/src/lib/SmartDB/Entities";
import {
  convertBech32CommitteeToHash,
  convertHashToBech32Committee,
  formatAddressUI,
} from "@example/src/utils/formats";
import styles from "./committee.module.scss";
import Head from "next/head";

export default function CommitteePage() {
  const [committee, setCommittee] = useState<CommitteeVoteEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchComittees = async () => {
      if (!id) return;
      try {
        const result: CommitteeVoteEntity[] =
          await CommitteeVoteApi.getByParamsApi_({
            scriptHash: convertBech32CommitteeToHash(id as string),
          });
        setCommittee(result);
      } catch (error) {
        console.error("Error fetching dreps:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComittees();
  }, []);

  if (!id || loading) {
    return <div className={styles.page}>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Committee Details | DApp</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>Committee Actions Details</h1>
        <div className={styles.voteSection}>
          <h2 className={styles.subtitle}>Votes</h2>
          <div className={styles.voteGroup}>
          <div className={styles.dash}>a</div>
          <div className={styles.voteList}>
            {committee.map((commiteeVotes) => {
              return (
                <div
                  key={commiteeVotes.scriptHash}
                  className={styles.voteItem}
                >
                  <p className={styles.text}>
                    {formatAddressUI(
                      convertHashToBech32Committee(commiteeVotes.scriptHash)
                    )}
                  </p>
                  <p>{commiteeVotes.vote}</p>
                </div>
              );
            })}
          </div>
          </div>

        </div>
      </div>
    </>
  );
}
