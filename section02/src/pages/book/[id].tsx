import { useRouter } from 'next/router';
import style from './[id].module.css';
import { getServerSideProps } from './../index';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import fetchOneBook from '@/lib/fetch-one-book';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.params!;

  const book = await fetchOneBook(Number(id));
  return {
    props: { book },
  };
};

export default function Page({ book }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return '문제가 발생하였습니다. 다시 시도해주세요.';

  const { id, title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>

      <div className={style.title}>{title}</div>
      <div className={style.subtitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}

// export default function Page() {
//   const router = useRouter();

//   const { id } = router.query;

//   return <div>Book {id}</div>;
// }

// [id] = 단일 쿼리에 대응하는 페이지
// ex) /book/123

// [...id] = Catch All Segment
// ex) /book/123/456/789
// /로 구분되는 모든 구간을 대응하는 페이지

// [[...id]] = Optional Catch All Segment
// ex) /book
// 쿼리가 없는 경로에도 대응하는 범용적인 페이지
