import React from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Main from '../components/Main';
import { supabase } from '../utils/supabaseClient';

const Progress = () => {
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
      <Greeting user={userData ? ` ${userData.email}` : 'User'} />
      <Main>
        <h1 className="mt-8 text-2xl p-4"> My Progress</h1>
      </Main>
    </>
  );
};

export default Progress;
