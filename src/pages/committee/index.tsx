import { useRouter } from "next/router";
import { useEffect } from "react";


export default function index() {

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    router.push("/")
  }, []);

  return (
    <></>
  )
}
