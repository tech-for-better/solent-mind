import React, { useState } from 'react';
import Header from '../../components/Header';
import { supabase } from '../../utils/supabaseClient';
import Link from 'next/link';
import Main from '../../components/Main';
import PageHeader from '../../components/PageHeader';
import Image from 'next/image';
import CourseTab from '../../components/CourseTab';

const AllCourses = ({ courses }) => {
  return (
    <>
      <Header />
      <Main>
        <PageHeader>Upcoming courses</PageHeader>
        <CourseTab courses={courses} />
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
