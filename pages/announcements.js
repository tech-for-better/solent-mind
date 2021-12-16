import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';

const Announcements = ({ session }) => {
  return (
    <>
      <Header session={session} />
      <Main>
        <PageHeader>Announcements 🔊</PageHeader>
      </Main>
    </>
  );
};
export default Announcements;
