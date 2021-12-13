import React, { useState } from 'react';
import Header from '../../components/Header';
import { supabase } from '../../utils/supabaseClient';
import Link from 'next/link';
import Main from '../../components/Main';
import PageHeader from '../../components/PageHeader';
import Image from 'next/image';
import Tabs from '../../components/Tabs';

export async function getStaticProps() {
  const { data } = await supabase.from('classes').select();
  return {
    props: {
      courses: data,
    },
  };
}

const AllCourses = ({ courses }) => {
  // const [enrolled, setEnrolled] = useState(false);

  return (
    <>
      <Header />
      <Main>
        <PageHeader>Upcoming courses</PageHeader>
        <ul className=" p-4">
          {courses.map((course) => (
            <Tabs contents={courses} key={course.course_id}>
              <li className="border border-BLUE p-2 rounded mb-4">
                <div className="flex flex-row justify-between mb-2">
                  <div className="font-bold">
                    <Link href="/courses/[name]" as={`/courses/${course.name}`}>
                      {course.name}
                    </Link>
                  </div>
                </div>
                <Image
                  src={course.image}
                  alt={`image of ${course.name}`}
                  width={200}
                  height={100}
                />
                <div className="font-thin font-montserrat">
                  {course.description}
                </div>
              </li>
            </Tabs>
          ))}
        </ul>
      </Main>
    </>
  );
};

export default AllCourses;
