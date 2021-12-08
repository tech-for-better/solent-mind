import React, { useState, useEffect } from 'react';
import Auth from '../components/Auth';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import { supabase } from '../utils/supabaseClient';

export default function allCourses({ courses }) {
  return (
    <>
      <Header />

      <h1 className="mt-8 text-2xl p-4">Upcoming courses</h1>
      <ul className=" p-4">
        {courses.map((course) => (
          <li
            key={course.course_id}
            className="border border-BLUE p-2 rounded mb-4"
          >
            <div className="flex flex-row justify-between mb-2">
              <div className="font-bold">{course.name}</div>
            </div>

            <div className="font-thin font-montserrat">
              {course.short_description}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await supabase.from('classes').select();
  return {
    props: {
      courses: data,
    },
  };
}
