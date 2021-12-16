import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Main from '../components/Main';
import { supabase } from '../utils/supabaseClient';
import PageHeader from '../components/PageHeader';
import Auth from '../components/Auth';
import SignOut from '../components/SignOut';

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
      <Header session={session} />
      {!session ? (
        <Auth />
      ) : (
        <>
          <Greeting user={userData ? ` ${userData.email}` : 'User'} />
          <Main>
            <PageHeader>My Progress</PageHeader>
            <p>Coming soon</p>
            <p>Building in progress...</p>
            <SignOut />
          </Main>
        </>
      )}
    </>
  );
};

export default Progress;
