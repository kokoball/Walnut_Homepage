import React from 'react';
import type { NextPage } from 'next';
import { Intro, Banner } from 'components/base';
import { Layout } from 'components/domain';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Intro />
        <Banner />
      </>
    </Layout>
  );
};
export default Home;
