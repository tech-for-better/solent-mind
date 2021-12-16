import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import BackButton from '../components/BackButton';

const Resources = () => {
  return (
    <>
      <Header />

      <Main>
        <BackButton />
        <PageHeader>Resources</PageHeader>
      </Main>
    </>
  );
};

export default Resources;
