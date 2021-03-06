import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { supabase } from '../../utils/supabaseClient';
import Main from '../../components/Main';
import PageHeader from '../../components/PageHeader';
import DatePicker from '../../components/DatePicker';
import BackButton from '../../components/BackButton';
import Head from 'next/head';

const AllCourses = ({ courses, session }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const fetchData = async () => {
    const user = await supabase.auth.user();
    const { data } = await supabase
      .from('enrolments')
      .select('course_id')
      .eq('user_id', user.id);

    setEnrolledCourses(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Book Courses</title>
      </Head>
      <Header session={session} />
      <Main>
        <PageHeader>Upcoming courses</PageHeader>
        <BackButton />
        <DatePicker courses={courses} enrolledCourses={enrolledCourses} />
      </Main>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await supabase.from('classes').select('*');
  return {
    props: {
      courses: data,
    },
  };
}

export default AllCourses;
