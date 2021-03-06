import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import { supabase } from '../utils/supabaseClient';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import Auth from '../components/Auth';
import BackButton from '../components/BackButton';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const MyCourses = ({ session }) => {
  const [userData, setUserData] = useState(null);
  const [enrolData, setEnrolData] = useState(null);

  async function fetchData() {
    const user = await supabase.auth.user();

    setUserData(user);

    const { data, error } = await supabase
      .from('enrolments')
      .select(
        'user_id, course_id, classes("name", "description", "image", "slug")'
      )
      .eq('user_id', user.id);

    setEnrolData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>My Courses</title>
      </Head>
      <Header session={session} />

      {!session ? (
        <Auth />
      ) : (
        <>
          <Greeting user={userData ? ` ${userData.email}` : 'User'} />
          <Main>
            <BackButton />
            <PageHeader>My Courses</PageHeader>
            <ul className=" p-2">
              {enrolData && enrolData[0]
                ? enrolData.map((data) => (
                    <Link
                      key={data.course_id}
                      href={`/courses/${data.classes.slug}`}
                      passHref
                    >
                      <li
                        key={data.course_id}
                        className="border border-BLUE p-4 rounded-xl mb-4 shadow-md cursor-pointer hover:bg-PEACH hover:bg-opacity-60"
                      >
                        <div className="flex flex-col justify-between md:flex-row mb-2">
                          <div className="font-bold">
                            {data.classes.name.length > 25
                              ? `${data.classes.name.slice(0, 25)} ...`
                              : data.classes.name}
                          </div>
                          <div className="inline-block text-right mt-2">
                            <span className="bg-GREEN pr-2 pl-2 rounded-full ">
                              Enrolled
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <Image
                            className="img"
                            src={data.classes.image}
                            alt={`image of ${data.classes.name}`}
                            width={200}
                            height={100}
                          />
                        </div>
                        <div
                          className="font-thin font-montserrat mt-2"
                          dangerouslySetInnerHTML={{
                            __html: data.classes.description,
                          }}
                        />
                      </li>
                    </Link>
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
