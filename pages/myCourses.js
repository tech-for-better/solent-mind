import React, { useState, useEffect } from 'react';
import Auth from '../components/Auth';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import { supabase, session } from '../utils/supabaseClient';

export async function getServerSideProps() {
  let { data, error } = await supabase.from('enrolments').select('*');
  // const user = await supabase.auth.user();
  // console.log('user is: ', user);
  // console.log('SUPABASE IS: ', supabase);
  return {
    props: { data },
  };
}

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
      <p>Your Class: {enrolData ? `${enrolData[0].classes.name}` : ``}</p>
    </>
  );
}
