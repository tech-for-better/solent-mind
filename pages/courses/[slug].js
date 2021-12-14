import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Image from 'next/image';

const CoursesName = ({ slug }) => {
  const [courseData, setCourseData] = useState();

  async function fetchCourseData() {
    const { data, error } = await supabase
      .from('classes')
      .select('*')
      .eq('slug', slug);

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
            <div
              key={course.id}
              className="border border-BLUE p-10 rounded mb-4 shadow-md mt-4"
            >
              <h1 className="mb-5 font-bold text-2xl">{course.name}</h1>

              <Image
                src={course.image}
                alt={`image of ${course.name}`}
                width={200}
                height={100}
              />
              <p className="font-bold mt-2">{course.class_type}</p>
              <p className="mt-1">Course date: {course.date}</p>
              <p className="mt-1">Start time: {course.start_time}</p>
              <p>Length of class: {course.duration}</p>
              <p>Spaces left: {course.max_capacity - course.cur_capacity}</p>
              <p className="mt-5 text-sm">{course.description}</p>
            </div>
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
  const { data, error } = await supabase.from('classes').select('slug');
  return {
    paths: data.map((course) => {
      return {
        params: {
          slug: course.slug,
        },
      };
    }),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const slug = context.params.slug;

  return {
    props: { slug: slug },
  };
}
export default CoursesName;
