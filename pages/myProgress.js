import React from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Main from '../components/Main';
import { supabase } from '../utils/supabaseClient';
import PageHeader from '../components/PageHeader';
import Auth from '../components/Auth';

const Progress = ({ session }) => {
  const [userData, setUserData] = React.useState(null);
  async function fetchData() {
    const user = await supabase.auth.user();
    setUserData(user);
  }

  React.useEffect(() => {
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
            <PageHeader>My Progress</PageHeader>
          </Main>
        </>
      )}
    </>
  );
};

export default Progress;
