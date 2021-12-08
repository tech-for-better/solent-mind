import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Account from '../components/Account';
import { supabase } from '../utils/supabaseClient';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function myProfile() {
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
      <div className="flex flex-col m-auto w-2/3 lg:w-3/5">
        <h1 className="mt-8 text-2xl p-4"> My Details</h1>

        {/* <Account /> */}
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
              <Link href="/allCourses">
                <a>
                  <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
