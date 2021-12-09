import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Account from '../components/Account';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Main from '../components/Main';

const MyProfile = ({ supabase }) => {

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
        <h1 className="mt-8 text-2xl p-4"> My Profile</h1>


        <Account userData={userData} setUserData={setUserData} />
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

export default MyProfile;
