import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Image from 'next/image';
import BookingModal from '../../components/BookingModal';

const CoursesName = ({ slug, session }) => {
  const [courseData, setCourseData] = useState();
  const [userData, setUserData] = useState();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  const fetchCourseData = async () => {
    const { data, error } = await supabase
      .from('classes')
      .select('*')
      .eq('slug', slug);
    setCourseData(data);
  };

  const fetchEnrolmentData = async () => {
    const user = await supabase.auth.user();
    const { data, error } = await supabase
      .from('enrolments')
      .select('course_id')
      .eq('user_id', user.id);
    setEnrolledCourses(data);
  };

  const fetchData = async () => {
    const user = await supabase.auth.user();
    setUserData(user);
  };

  useEffect(() => {
    if (session) {
      fetchData();
      fetchEnrolmentData();
    }
    fetchCourseData();
  }, []);

  const enrolledArr = enrolledCourses.map(Object.values).flat();

  const bookCourse = async () => {
    if (
      courseData.length &&
      courseData[0].cur_capacity < courseData[0].max_capacity
    ) {
      const { data, error } = await supabase.from('enrolments').insert([
        {
          user_id: `${userData.id}`,
          course_id: courseData[0].id,
          user_course_id: `${userData.id}${courseData[0].id}`,
        },
      ]);

      const { capacityData, capacityError } = await supabase
        .from('classes')
        .update({ cur_capacity: courseData[0].cur_capacity + 1 })
        .match({ id: courseData[0].id });

      // window.location.reload();
    } else {
      alert('Course fully booked!');
    }
  };

  const removeCourse = async () => {
    const { data, error } = await supabase
      .from('enrolments')
      .delete()
      .match({ user_id: `${userData.id}`, course_id: courseData[0].id });

    const { capacityData, capacityError } = await supabase
      .from('classes')
      .update({ cur_capacity: courseData[0].cur_capacity - 1 })
      .match({ id: courseData[0].id });

    window.location.reload();
  };

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
              <BookingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                courseName={courseData[0].name}
              />

              {!enrolledCourses.length ||
              !enrolledArr.includes(courseData[0].id) ? (
                <button
                  className="bg-DARKPINK p-2 rounded text-WHITE"
                  onClick={async () => {
                    await bookCourse();
                    await setIsOpen(true);
                  }}
                >
                  Book
                </button>
              ) : (
                <button
                  className="bg-BLUE p-2 rounded text-WHITE"
                  onClick={removeCourse}
                >
                  Unbook
                </button>
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
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
