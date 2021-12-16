import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Main from '../components/Main';
import { supabase } from '../utils/supabaseClient';
import PageHeader from '../components/PageHeader';
import Auth from '../components/Auth';
import SignOut from '../components/SignOut';
import BackButton from '../components/BackButton';

const Progress = ({ session }) => {
  const [userData, setUserData] = useState(null);
  async function fetchData() {
    const user = await supabase.auth.user();
    setUserData(user);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {!session ? (
        <Auth />
      ) : (
        <>
          <Greeting user={userData ? ` ${userData.email}` : 'User'} />
          <Main>
            <BackButton />
            <PageHeader>My Progress</PageHeader>

            <SignOut />
          </Main>
        </>
      )}
    </>
  );
};

export default Progress;
