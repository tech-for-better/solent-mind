import React from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';
import { useRouter } from 'next/router';

const CoursesName = ({ data }) => {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);
  // return (
  //   <>
  //     <Header />
  //     {data.map((course) => (
  //       <p key={course.name}>{course.name}</p>
  //     ))}
  //   </>
  // );
  return <>{name}</>;
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

export async function getStaticProps({ name }) {
  const { data, error } = await supabase.from('classes').select('*');

  console.log(data);
  return {
    props: {
      data,
    },
  };
}
export default CoursesName;
