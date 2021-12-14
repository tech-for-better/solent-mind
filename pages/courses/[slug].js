import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Image from 'next/image';

const CoursesName = ({ slug, session }) => {
  const [courseData, setCourseData] = useState();
  const [userData, setUserData] = useState();

  async function fetchCourseData() {
    const { data, error } = await supabase
      .from('classes')
      .select('*')
      .eq('slug', slug);

    setCourseData(data);
  }

  async function fetchData() {
    const user = await supabase.auth.user();
    setUserData(user);
  }

  useEffect(() => {
    if (session) {
      fetchData();
    }
  }, []);

  const bookCourse = async () => {
    const { data, error } = await supabase
      .from('enrolments')
      .insert([{ user_id: `${userData.id}`, course_id: courseData[0].id }])
      .single();
  };

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
              <p
                className="mt-5 text-sm"
                dangerouslySetInnerHTML={{ __html: course.description }}
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}

        <button
          className="bg-DARKPINK p-2 rounded text-WHITE"
          onClick={bookCourse}
        >
          Book
        </button>
      </Main>
    </>
  );
};

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
