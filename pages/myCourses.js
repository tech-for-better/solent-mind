import React, { useState, useEffect } from 'react';
// import { supabase } from '../utils/supabaseClient';
import Header from '../components/Header';
import MyCourses from '../components/MyCourses';
import Greeting from '../components/Greeting';

export async function getServerSideProps({ session, supabase }) {
  const user = supabase.auth.user();
  console.log('THis is our user ✅✅', user);
  console.log('supabase is 📦', supabase.auth);

  const { data, error } = await supabase.from('enrolments').select(
    `
    course_id,
    classes (
      name
    )
  `
  );
  // .eq('user_id', user.id);

  console.log(data);
  return { props: { data, error } };
}

const myCourses = () => {
  return (
    <>
      <Header />
      <Greeting />
      <MyCourses />
    </>
  );
};

export default myCourses;
