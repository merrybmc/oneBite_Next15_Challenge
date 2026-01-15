import Link from "next/link";

export default function CustomError({ message }: { message: string }) {
  return (
    <main className="flex flex-col items-center space-y-2 flex-1 py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg">
      <h2>🚧 앗, 무언가 잘못됐네요!</h2>
      <h3>{message}</h3>
      <Link href="/">⚙️ 홈으로 이동</Link>
    </main>
  );
}
