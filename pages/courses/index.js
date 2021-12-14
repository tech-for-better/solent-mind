import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { supabase } from '../../utils/supabaseClient';
import Link from 'next/link';
import Main from '../../components/Main';
import PageHeader from '../../components/PageHeader';
import Image from 'next/image';
import CourseTab from '../../components/CourseTab';

const AllCourses = ({ courses }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const fetchData = async () => {
    const user = await supabase.auth.user();
    console.log('USER is: ', user);
    const { data } = await supabase
      .from('enrolments')
      .select('course_id')
      .eq('user_id', user.id);
    console.log('data from index:', data);
    setEnrolledCourses(data);
    console.log('enfolledCourses:', enrolledCourses);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <PageHeader>Upcoming courses</PageHeader>
        <CourseTab courses={courses} enrolledCourses={enrolledCourses} />
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
