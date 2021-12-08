import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

async function getServerSideProps() {
  const user = await supabase.auth.user();
  const { data, error } = await supabase
    .from('enrolments')
    .select('user_id, course_id, classes("name")')
    .eq('user_id', userID);

  console.log('user 🚀', user);
  console.log('data 🚀', data);
  return {
    props: { user, data },
  };
}

export default getStaticProps;
