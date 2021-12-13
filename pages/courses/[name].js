import React, { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';
import { useRouter } from 'next/router';

const CoursesName = ({ name }) => {
  const [courseData, setCourseData] = useState(null);

  async function fetchCourseData() {
    const { data, error } = await supabase
      .from('classes')
      .select('*')
      .eq('name', name);
    setCourseData(data);
  }
  React.useEffect(() => {
    fetchCourseData();
  }, []);

  console.log(courseData);
  return (
    <>
      <Header />
      {courseData.map((course) => (
        <>
          <p key={course.name}>{course.name}</p>
          <p>{course.description}</p>
        </>
      ))}
    </>
  );
};

export async function getStaticPaths() {
  const { data, error } = await supabase.from('classes').select('name');
  return {
    paths: data.map((course) => {
      return {
        params: {
          name: course.name.trim(),
        },
      };
    }),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const pid = context.params.name;

  return {
    props: { name: pid },
  };
}
export default CoursesName;
