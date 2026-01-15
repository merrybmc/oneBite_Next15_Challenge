// 서버 컴포넌트에서 사용할 API 호출 함수

import { ErrorRes, PostInfoRes, PostListRes } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || "";

// 전체 게시글 조회
export async function getPosts(boardType: string): Promise<PostListRes | ErrorRes> {
  try {
    const res = await fetch(`${API_URL}/posts?types=${boardType}`, {
      headers: {
        "Client-Id": CLIENT_ID,
      },
      cache: "force-cache",
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: "일시적인 네트워크 문제로 게시글 목록 조회에 실패했습니다." };
  }
}

// 게시글 상세 조회
export async function getPost(_id: string): Promise<PostInfoRes | ErrorRes> {
  try {
    const res = await fetch(`${API_URL}/posts/${_id}`, {
      headers: {
        "Client-Id": CLIENT_ID,
      },
      cache: "force-cache",
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: "일시적인 네트워크 문제로 게시글 상세 조회에 실패했습니다." };
  }
}

// 상세 게시글 댓글 목록 조회
export async function getReplies(_id: string) {
  try {
    const res = await fetch(`${API_URL}/posts/${_id}/replies`, {
      headers: {
        "Client-Id": CLIENT_ID,
      },
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: "일시적인 네트워크 문제로 댓글 목록 조회에 실패했습니다." };
  }
}
