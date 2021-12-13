import React from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

const CoursesName = ({ data }) => {
  const enrolled = true;
  return (
    <>
      <Header />

      {data.map((course) => (
        <p key={course.name}>{course.name}</p>
      ))}
      {enrolled ? (
        <button className="bg-PURPLE">Unenrol</button>
      ) : (
        <button className="bg-DARKPINK">Book</button>
      )}
    </>
  );
};
// check
// update course cur_capacity +1
// enrolments table user_id -> course_id

export async function getStaticProps() {
  const { data, error } = await supabase.from('classes').select('name');

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from('classes').select('name');
  const paths = data.map((course) => {
    return {
      params: {
        name: course.name,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default CoursesName;
