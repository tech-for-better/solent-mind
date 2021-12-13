import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Account from '../components/Account';
import Main from '../components/Main';
import Tabs from '../components/Tabs';
import { supabase } from '../utils/supabaseClient';
import PageHeader from '../components/PageHeader';

const MyProfile = ({ supabase }) => {
  const [userData, setUserData] = useState(null);
  const contents = [
    { topic: 'My booked courses', url: '/myCourses' },
    { topic: 'Upcoming courses', url: '/courses' },
    { topic: 'My Progress', url: '/myProgress' },
  ];
  const [userProfile, setUserProfile] = useState(null);

  async function fetchData() {
    const user = await supabase.auth.user();
    setUserData(user);

    const { data, error, status } = await supabase
      .from('profiles')
      .select('username, avatar')
      .eq('id', user.id)
      .single();

    setUserProfile(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Greeting user={userData ? ` ${userData.email}` : 'User'} />
      <Main>
        <PageHeader>My Profile</PageHeader>

        <Account
          userProfile={userProfile}
          setUserProfile={setUserProfile}
          userData={userData}
        />

        <div className="bg-PURPLE shadow-md"></div>
        <Tabs contents={contents} />
      </Main>
    </>
  );
};

export default MyProfile;
