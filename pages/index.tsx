import React from 'react';
import type { NextPage } from 'next';
import { Intro, Banner } from 'components/base';
import {
  Layout,
  LiveClass,
  LiveAccess,
  ReadingList,
  Diary,
  Challenge,
  Feature,
} from 'components/domain';

const Home: NextPage = () => {
  return (
    <Layout>
      <Intro />
      <Banner />
      <LiveClass />
      <ReadingList />
      <LiveAccess />
      <Diary />
      <Challenge />
      <Feature />
    </Layout>
  );
};
export default Home;
