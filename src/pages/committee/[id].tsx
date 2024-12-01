import { useRouter } from "next/router";
import { CommitteeVoteApi } from "@example/src/lib/SmartDB/FrontEnd";
import { useEffect, useState } from "react";
import { CommitteeVoteEntity } from "@example/src/lib/SmartDB/Entities";
import { convertBech32CommitteeToHash } from "@example/src/utils/formats";


export default function CommitteePage() {

  const [committee, setCommittee] = useState<CommitteeVoteEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const { id } = router.query;

  

  useEffect(() => {
    const fetchComittees = async () => {
      if (!id) return;
      try {
        const result: CommitteeVoteEntity[] = await CommitteeVoteApi.getByParamsApi_({ scriptHash: convertBech32CommitteeToHash(id as string) });
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
    return <div>Loading</div>;
  }


  return (
    <div>index {id} - {convertBech32CommitteeToHash(id as string)} </div>
  )
}
