import { useRouter } from "next/router";

export default function id() {
  const router = useRouter();

  const { id } = router.query;
  console.log(router);
  console.log(id);

  return <div>[id]</div>;
}
