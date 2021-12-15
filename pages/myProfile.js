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

            <form>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    Username
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Your username"
                  ></input>
                </div>
              </div>
              <label className="button primary block" htmlFor="single">
                Upload a profile picture
              </label>
              <input type="file" id="single" accept="image/*" />
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>

            {/* 
            <Account
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              userData={userData}
            /> */}

            <div className="bg-PURPLE shadow-md"></div>
            <Tabs contents={contents} />
          </>
        )}
      </Main>
    </>
  );
};

export default MyProfile;
