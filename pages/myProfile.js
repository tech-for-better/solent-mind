import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Tabs from '../components/Tabs';
import PageHeader from '../components/PageHeader';
import Auth from '../components/Auth';
import Image from 'next/image';
import Modal from '../components/Modal';
import SignOut from '../components/SignOut';
import BackButton from '../components/BackButton';
import Head from 'next/head';

const MyProfile = ({ supabase, session }) => {
  const [userData, setUserData] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [imageLink, setImageLink] = useState(
    'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'
  );

  let [isOpen, setIsOpen] = useState(false);
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');

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
      .select('username, avatar')
      .eq('id', user.id)
      .single();

    setUserProfile(data);
    if (data.avatar !== null) {
      setImageLink(data.avatar);
    }
  }

  useEffect(() => {
    if (session) {
      fetchData();
    }
  }, []);

  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <Header session={session} />
      <Main>
        {!session ? (
          <Auth />
        ) : (
          <div>
            <div>
              <PageHeader>My Profile</PageHeader>
            </div>
            <BackButton />
            <div className="text-center m-2">
              <Image
                className="img round"
                src={imageLink}
                alt={''}
                width={100}
                height={100}
              />
              <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={title}
                description={description}
              />
            </div>

            <form className="flex flex-col items-center">
              <div className="md:items-center">
                <div className="flex flex-col mt-4">
                  <label
                    className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 text-center "
                    htmlFor="inline-full-name"
                  >
                    Username
                  </label>

                  <input
                    className=" border border-DARKPINK pb-2 pt-2 pr-6 pl-6 focus:outline-none focus:ring-2 focus:ring-DARKPINK rounded"
                    id="inline-full-name text-sm"
                    type="text"
                    placeholder={
                      !userProfile ? 'Your username' : userProfile.username
                    }
                    ref={userNameRef}
                  ></input>
                </div>
              </div>
              <div className="mt-6">
                <label
                  className=" border border-DARKPINK pb-2 pt-2 pr-6 pl-6 focus:outline-none focus:ring-2 focus:ring-DARKPINK rounded-full text-xs"
                  htmlFor="single"
                >
                  Upload a profile image
                </label>
                <input
                  type="file"
                  id="single"
                  accept="image/*"
                  onChange={handleUpload}
                  style={{ display: 'none' }}
                ></input>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-2/3">
                  <button
                    onClick={async () => {
                      await updateProfileData();
                      await setTitle('Profile updated');
                      await setDescription("You've updated your profile");
                      await setIsOpen(true);
                    }}
                    className="button block bg-DARKPINK text-WHITE pb-2 pt-2 pr-4 pl-4 rounded-xl mt-6"
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
