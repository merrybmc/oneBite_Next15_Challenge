import { getPost } from "@/lib/posts";
import { Metadata } from "next";

// 동적 metadata 생성
async function generateMetadata(): Promise<Metadata> {
  const data = {
    title: `1번 게시물`,
    content: "게시판 이용 수칙입니다.",
  };

  return {
    title: data.title,
    description: data.content,
  };
}

// 동적 세그먼트의 값을 꺼낼 때 params prop을 사용
export default async function PostInfo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const data = await getPost(id);

  return (
    <>
      <h1> {id}번 게시물 상세 조회</h1>
      <h2>{data.title}</h2>
      <textarea className="w-full h-full focus:outline-none" defaultValue={data.content}></textarea>
    </>
  );
}
