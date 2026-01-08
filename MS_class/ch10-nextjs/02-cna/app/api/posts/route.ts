import { getPosts } from "@/lib/posts";

export async function GET() {
  // const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
  //   headers: {
  //     "Client-Id": "openmarket",
  //   },
  // });

  const data = await getPosts();
  return Response.json(data);
}
