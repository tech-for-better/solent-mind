import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import Main from '../../components/Main';
import Greeting from '../../components/Greeting';
import Tabs from '../../components/Tabs';

const CoursesName = ({ name }) => {
  const [courseData, setCourseData] = useState();

  async function fetchCourseData() {
    const { data, error } = await supabase
      .from('classes')
      .select('*')
      .eq('name', name);

    setCourseData(data);
  }
  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <>
      <Header />

      <Main>
        {courseData ? (
          courseData.map((course) => (
            <>
              <PageHeader key={course.name}>{course.name}</PageHeader>

              <p>{course.date}</p>
              <p>{course.duration}</p>
              <p>{course.description}</p>
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Main>
    </>
  );
};

// check
// update course cur_capacity +1
// enrolments table user_id -> course_id

export async function getStaticPaths() {
  const { data, error } = await supabase.from('classes').select('name');
  return {
    paths: data.map((course) => {
      return {
        params: {
          name: course.name,
        },
      };
    }),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const name = context.params.name;

  return {
    props: { name: name },
  };
}
export default CoursesName;
