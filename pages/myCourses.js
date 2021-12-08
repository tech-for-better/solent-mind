import React from 'react';
import { supabase } from '../utils/supabaseClient';
import getClasses from '../utils/getClasses';
import Header from '../components/Header';
import Greeting from '../components/Greeting';

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

  console.log('enrolData', enrolData);
  console.log('userData', userData);

  return (
    <>
      <Header />
      <Greeting />
      <p>
        Hello
        {userData ? `${userData.email}` : 'User'}
      </p>
      <p>Your Class: {enrolData ? `${enrolData[0].classes.name}` : ``}</p>
    </>
  );
}
