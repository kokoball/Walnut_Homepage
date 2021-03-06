import React from 'react';
import type { NextPage } from 'next';
import { Intro, Banner, Footer, PostScript } from 'components/base';
import {
  Layout,
  LiveClass,
  LiveAccess,
  ReadingList,
  Diary,
  ImageSlider,
  Feature,
  Ticket,
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
      <ImageSlider />
      <Feature />
      <PostScript />
      <Ticket />
      <Footer />
    </Layout>
  );
};
export default Home;
