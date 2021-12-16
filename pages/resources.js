import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import BackButton from '../components/BackButton';
import Head from 'next/head';

const Resources = ({ session }) => {
  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <Header session={session} />

      <Main>
        <BackButton />
        <PageHeader>Resources</PageHeader>
        <p>Coming soon</p>
        <p>Building in progress...</p>
      </Main>
    </>
  );
};

export default Resources;
