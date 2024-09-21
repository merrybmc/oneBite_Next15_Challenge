import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    /* Programmatic Navigation */
    /* 특정 조건이 만족했을 경우 함수 내부에서 페이지를 이동하는 방식 */
    router.push('/test');

    // 뒤로가기를 방지하며 페이지 이동
    // 페이지 이동 내역이 추가되지 않음
    // router.replace('/test');

    // 뒤로 가기
    // router.back();
  };
  return (
    <>
      ㅓ{/* Link Navigation */}
      <header>
        <Link href={'/'}>index</Link>
        &nbsp;
        <Link href={'/search'}>search</Link>
        &nbsp;
        <Link href={'/book/1'}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />;
    </>
  );
}
