import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import { supabase } from '../utils/supabaseClient';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import Auth from '../components/Auth';
import Link from 'next/link';
import Image from 'next/image';

const MyCourses = ({ session }) => {
  const [userData, setUserData] = useState(null);
  const [enrolData, setEnrolData] = useState(null);

  async function fetchData() {
    const user = await supabase.auth.user();

    setUserData(user);

    const { data, error } = await supabase
      .from('enrolments')
      .select('user_id, course_id, classes("name", "description", "image")')
      .eq('user_id', user.id);
    setEnrolData(data);
    console.log(data);
  }

  useEffect(() => {
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
            <PageHeader>My Courses</PageHeader>
            <ul className=" p-4">
              {enrolData && enrolData[0]
                ? enrolData.map((data) => (
                    <li
                      key={data.course_id}
                      className="bg-BLUE p-4 rounded-xl mb-4 shadow-md cursor-pointer hover:bg-PEACH hover:bg-opacity-60"
                    >
                      <div className="flex flex-row justify-between mb-2">
                        <div className="font-bold">
                          {data.classes.name.length > 25
                            ? `${data.classes.name.slice(0, 25)} ...`
                            : data.classes.name}
                        </div>
                        <span className="bg-GREEN pr-2 pl-2 rounded-full">
                          Enrolled
                        </span>
                      </div>

                      <Image
                        src={data.classes.image}
                        alt={`image of ${data.classes.name}`}
                        width={200}
                        height={100}
                      />
                      <div
                        className="font-thin font-montserrat"
                        dangerouslySetInnerHTML={{
                          __html: data.classes.description,
                        }}
                      />
                    </li>
                  ))
                : 'You are not enrolled in any classes!'}
            </ul>
          </Main>
        </>
      )}
    </>
  );
};

export default MyCourses;
