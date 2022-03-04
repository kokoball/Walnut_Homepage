import React from 'react';
import type { NextPage } from 'next';
import { Intro, Banner } from 'components/base';
import { LiveClass, ReadingList, Diary } from 'components/domain';
import { Layout } from 'components/domain';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Intro />
        <Banner />
        <LiveClass />
        <ReadingList />
        <Diary />
      </>
    </Layout>
  );
};
export default Home;
