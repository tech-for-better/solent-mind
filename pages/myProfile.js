import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Main from '../components/Main';
import Tabs from '../components/Tabs';
import PageHeader from '../components/PageHeader';
import Auth from '../components/Auth';
import Image from 'next/image';

const MyProfile = ({ supabase, session }) => {
  const [userData, setUserData] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const userNameRef = React.createRef();

  const contents = [
    { topic: 'My booked courses', url: '/myCourses' },
    { topic: 'Upcoming courses', url: '/courses' },
    { topic: 'My Progress', url: '/myProgress' },
  ];

  const handleUpload = async (event) => {
    const avatarFile = event.target.files[0];

    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(`public/${avatarFile.name}`, avatarFile, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) alert(error?.message);

    const { imageData, imageError } = await supabase
      .from('profiles')
      .update([
        {
          avatar: `https://bstlldhfipmjeqohhmmo.supabase.in/storage/v1/object/public/avatars/public/${avatarFile.name}`,
        },
      ])
      .match({ id: userData.id });
    return true;
  };

  const updateProfileData = async () => {
    await supabase
      .from('profiles')
      .update([
        {
          username: userNameRef.current.value,
        },
      ])
      .match({ id: userData.id });
  };

  async function fetchData() {
    const user = await supabase.auth.user();
    setUserData(user);

    const { data, error, status } = await supabase
      .from('profiles')
      .select('username')
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
          <div>
            <Greeting user={userData ? ` ${userData.email}` : 'User'} />
            <PageHeader>My Profile</PageHeader>
            <Image
              src={
                'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'
              }
              alt={''}
              width={100}
              height={100}
            />
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
                    ref={userNameRef}
                  ></input>
                </div>
              </div>
              <label className="button primary block" htmlFor="single">
                Upload a profile picture
              </label>
              <input
                type="file"
                id="single"
                accept="image/*"
                onChange={handleUpload}
              />
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    onClick={updateProfileData}
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>

            <div className="bg-PURPLE shadow-md"></div>
            <Tabs contents={contents} />
          </div>
        )}
      </Main>
    </>
  );
};

export default MyProfile;
