import React from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';

const CoursesName = ({ data }) => {
  return (
    <>
      <Header />
      {data.map((course) => (
        <p key={course.name}>{course.name}</p>
      ))}
    </>
  );
};

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
