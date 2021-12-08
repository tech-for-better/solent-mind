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

const myCourses = ({ data }) => {
  // console.log('SUPABASE IS: ', supabase);
  // const user = supabase.auth.user();
  // console.log('user is: ', user?.email);
  // console.log('type of user is: ', typeof user);
  console.log('data is: ', data);

  return (
    <>
      <Header />
      <Greeting />
    </>
  );
};

export default myCourses;
