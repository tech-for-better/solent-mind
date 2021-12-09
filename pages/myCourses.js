import React, { useState, useEffect } from 'react';
import Auth from '../components/Auth';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import { supabase } from '../utils/supabaseClient';
import Main from '../components/Main';

export default function MyCourses() {
  const [userData, setUserData] = React.useState(null);
  const [enrolData, setEnrolData] = React.useState(null);

  async function fetchData() {
    const user = await supabase.auth.user();

    setUserData(user);
    const { data, error } = await supabase
      .from('enrolments')
      .select('user_id, course_id, classes("name", "short_description")')
      .eq('user_id', user.id);
    setEnrolData(data);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Greeting user={userData ? ` ${userData.email}` : 'User'} />
      <Main>
        <h1 className="mt-8 text-2xl p-4">My Courses</h1>
        <ul className=" p-4">
          {enrolData && enrolData[0]
            ? enrolData.map((data) => (
                <li
                  key={data.course_id}
                  className="border border-BLUE p-2 rounded mb-4"
                >
                  <div className="flex flex-row justify-between mb-2">
                    <div className="font-bold">
                      {data.classes.name.length > 25
                        ? `${data.classes.name.slice(0, 25)} ...`
                        : data.classes.name}
                    </div>
                    <span className="bg-PURPLE pr-2 pl-2 text-WHITE rounded-full">
                      Enrolled
                    </span>
                  </div>
                  <div className="font-thin font-montserrat">
                    {data.classes.short_description}
                  </div>
                </li>
              ))
            : 'You are not enrolled in any classes!'}
        </ul>
      </Main>
    </>
  );
}
