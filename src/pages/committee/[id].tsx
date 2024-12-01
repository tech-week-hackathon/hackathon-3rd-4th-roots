import { useRouter } from "next/router";
import {
  CommitteeVoteApi,
  ProposalApi,
} from "@example/src/lib/SmartDB/FrontEnd";
import { useEffect, useState } from "react";
import {
  CommitteeVoteEntity,
  ProposalEntity,
} from "@example/src/lib/SmartDB/Entities";
import {
  convertBech32CommitteeToHash,
  convertHashToBech32Committee,
  formatAddressUI,
} from "@example/src/utils/formats";
import styles from "./committee.module.scss";
import Head from "next/head";
import { LINK } from "@example/src/utils/images";
import Link from "next/link";
import PieChartVote from "@example/src/components/charts/pie";

export default function CommitteePage() {
  const [committee, setCommittee] = useState<CommitteeVoteEntity[]>([]);
  const [proposals, setProposals] = useState<ProposalEntity[]>([]);
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
        const proposals: ProposalEntity[] = await ProposalApi.getAllApi_();
        setCommittee(result);
        setProposals(proposals);
      } catch (error) {
        console.error("Error fetching dreps:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComittees();
  }, []);

  function voteStatus(vote: string) {
    if (vote === "VoteYes") return styles.voteyes;
    if (vote === "VoteNo") return styles.voteno;
    if (vote === "VoteAbstain") return styles.voteabstain;
  }

  const voteCounts = {
    yes: committee.filter((vote) => vote.vote === "VoteYes").length,
    no: committee.filter((vote) => vote.vote === "VoteNo").length,
    abstain: committee.filter((vote) => vote.vote === "VoteAbstain").length,
  };

  const dataValues: number[] = [voteCounts.yes, voteCounts.no, voteCounts.abstain];

  if (!id || loading) {
    return <div className={styles.page}>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Committee Details | DApp</title>
      </Head>
      <div className={styles.page}>
        <div className={styles.titles}>
          <h1 className={styles.title}>Committee Actions Details</h1>
          <h2 className={styles.subtitle}>{id}</h2>
        </div>
        {committee.length > 0 && (
          <div className={styles.dash}>
            <PieChartVote dataValues={dataValues} />
          </div>
        )}

        <div className={styles.voteSection}>
          <h2 className={styles.subtitle}>Votes</h2>

          <div className={styles.voteList}>
            {committee.map((commiteeVotes) => {
              const matchingProposal = proposals.find(
                (proposal) =>
                  proposal.actionId === commiteeVotes.proposalActionId
              );

              return (
                <div key={commiteeVotes.scriptHash} className={styles.voteItem}>
                  <p>
                    {`Proposal txId: 
                      ${
                        matchingProposal &&
                        formatAddressUI(matchingProposal.txId)
                      }`}
                  </p>
                  <div className={styles.voteResult}>
                    {commiteeVotes.url && (
                      <div className={styles.justify}>
                        <p className={styles.text}>Justification</p>
                        <Link
                          href={commiteeVotes.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg width="18" height="18" className={styles.icon}>
                            <use href={LINK}></use>
                          </svg>
                        </Link>
                      </div>
                    )}

                    <div
                      className={`${styles.voteStatus} ${voteStatus(
                        commiteeVotes.vote
                      )}`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
