import { ErrorRes, PostListRes } from "@/types";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "게시글 목록",
  description: "게시글 목록 조회 페이지입니다.",
};

export default async function PostList() {
  // 3초 후에 resolve 됨
  // await new Promise((resolve) => setTimeout(resolve, 1000 * 3));

  const res = await fetch("http://localhost:3000/api/posts");

  const data: PostListRes | ErrorRes = await res.json();

  if (data.ok) {
  }

  const list = data.item.map((post) => (
    <li key={post._id}>
      <Link href={`/posts/${post._id}`}>
        {post._id} - {post.title}
      </Link>
    </li>
  ));
  return (
    <div>
      <h1>목록 조회</h1>
      <ul>list</ul>
    </div>
  );
}
