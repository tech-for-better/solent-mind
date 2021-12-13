import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';
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
      {courseData ? (
        courseData.map((course) => (
          <>
            <p key={course.name}>{course.name}</p>
            <p>{course.description}</p>
          </>
        ))
      ) : (
        <p>Loading...</p>

      )}
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
