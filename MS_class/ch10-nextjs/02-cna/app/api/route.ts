import { getPosts } from "@/lib/posts";

// export async function GET(request: Request) {
export async function GET() {
  // console.log(request);
  // fetch(`https://fesp-api.koyeb.app/market/posts`);
  // return Response.json({ hello: "world" });

  const data = getPosts();

  return Response.json(data);
}
