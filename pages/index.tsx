// import Head from 'next/head';
import { NextPage, InferGetServerSidePropsType } from 'next';

import styles from './index.module.scss';

// import { AppProps } from 'next/app';
import { demo } from '@/services/demo';

type Data = { data: string };
export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data: Data = await res.json();
  demo();
  return {
    props: {
      data,
    },
  };
};

const IndexPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {
  console.log(data);

  return <div className={styles.wrap}>IndexPage</div>;
};

export default IndexPage;
