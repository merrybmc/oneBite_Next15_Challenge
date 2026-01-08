"use client";

export default function ErrorPage({ error }: { error: Error }) {
  <div>
    <h1>에러 페이지</h1>
    <p> {error.message}</p>
  </div>;
}
