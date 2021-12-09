import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Account from '../components/Account';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Main from '../components/Main';
import { supabase } from '../utils/supabaseClient';

const MyProfile = ({ supabase }) => {
  const [userData, setUserData] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState(null);
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

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <Greeting user={userData ? ` ${userData.email}` : 'User'} />
      <Main>
        <h1 className="mt-8 text-2xl p-4"> My Profile</h1>

        <Account userProfile={userProfile} setUserProfile={setUserProfile} />
        <div className="bg-PURPLE shadow-md"></div>
        <ul className=" p-4">
          <li className="border border-BLUE p-2 rounded mb-4 shadow-md">
            <div className="flex flex-row justify-between font-bold items-center">
              <div>My booked courses </div>
              <Link href="/myCourses">
                <a>
                  <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
                </a>
              </Link>
            </div>
          </li>
          <li className="border border-BLUE p-2 rounded mb-4 shadow-md">
            <div className="flex flex-row justify-between font-bold items-center">
              <div>Upcoming courses </div>
              <Link href="/courses">
                <a>
                  <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </Main>
    </>
  );
};

// export async function getServerSideProps({ session, supabase }) {
//   const user = supabase.auth.user();
//   const { userProfile, error, status } = await supabase
//     .from('profiles')
//     .select('username, avatar')
//     .eq('id', user.id)
//     .single();

//   console.log(userProfile);
//   return {
//     props: { userProfile, error },
//   };
// }

export default MyProfile;
