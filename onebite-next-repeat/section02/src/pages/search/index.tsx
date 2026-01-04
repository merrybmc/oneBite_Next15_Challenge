import React from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();

  // 쿼리 스트링 값 추출
  const { q } = router.query;

  console.log(router);
  return <div>Search {q}</div>;
}
