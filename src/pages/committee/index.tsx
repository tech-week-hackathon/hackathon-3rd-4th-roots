import { useRouter } from "next/router";


export default function index() {

  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    router.push("/");
    return <></>;
  }

  
  return (
    <div>index</div>
  )
}
