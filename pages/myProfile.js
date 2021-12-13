import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Account from '../components/Account';
import Main from '../components/Main';
import Tabs from '../components/Tabs';
import PageHeader from '../components/PageHeader';
import redirect from 'nextjs-redirect';
import Auth from '../components/Auth';

const MyProfile = ({ supabase, session }) => {
  const Redirect = redirect('/');
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
    if (session) {
      fetchData();
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        {!session ? (
          <Auth />
        ) : (
          <>
            <Greeting user={userData ? ` ${userData.email}` : 'User'} />
            <PageHeader>My Profile</PageHeader>

            <Account
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              userData={userData}
            />

            <div className="bg-PURPLE shadow-md"></div>
            <Tabs contents={contents} />
          </>
        )}
      </Main>
    </>
  );
};

export default MyProfile;
