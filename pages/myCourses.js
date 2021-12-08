import React, { useState, useEffect } from 'react';
import Auth from '../components/Auth';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import { supabase } from '../utils/supabaseClient';

export default function MyCourses() {
  const [userData, setUserData] = React.useState(null);
  const [enrolData, setEnrolData] = React.useState(null);

  async function fetchData() {
    const user = await supabase.auth.user();

    setUserData(user);
    const { data, error } = await supabase
      .from('enrolments')
      .select('user_id, course_id, classes("name")')
      .eq('user_id', user.id);
    setEnrolData(data);
    console.log('Enrol data is: ', data);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Greeting />

      <p>
        Hello
        {userData ? ` ${userData.email}` : 'User'}
      </p>
      <p className="text-PURPLE">
        {enrolData && enrolData[0]
          ? enrolData.map((data) => (
              <p key={data.course_id}>{data.classes.name}</p>
            ))
          : 'You are not enrolled in any classes!'}
      </p>
    </>
  );
}
