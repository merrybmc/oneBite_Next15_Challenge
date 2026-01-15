// 폼 제출 시 서버에서 실행될 서버 액션

import { ErrorRes } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || "";

type ActionSate = ErrorRes | null;

// 게시글 등록
