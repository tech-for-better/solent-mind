import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Image from 'next/image';
import Modal from '../../components/Modal';
import ModalAlert from '../../components/ModalAlert';
import redirect from 'nextjs-redirect';
import { useRouter } from 'next/router';

const CoursesName = ({ slug, session }) => {
  const [courseData, setCourseData] = useState();
  const [userData, setUserData] = useState();
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  let [isOpen, setIsOpen] = useState(false);
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');

  let [openAlert, setOpenAlert] = useState(false);
  let [titleAlert, setTitleAlert] = useState('');
  let [descriptionAlert, setDescriptionAlert] = useState('');

  let fullClass = false;

  // const Redirect = redirect('/courses');
  const router = useRouter();

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
      fullClass = false;
    } else {
      fullClass = true;
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
              <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={title}
                description={description}
              />

              {!enrolledCourses.length ||
              !enrolledArr.includes(courseData[0].id) ? (
                <button
                  className="bg-DARKPINK p-2 rounded text-WHITE"
                  onClick={async () => {
                    await bookCourse();
                    if (!fullClass) {
                      await setTitle('Booking successful!');
                      await setDescription(
                        `You have been successfully enrolled in ${courseData[0].name}!`
                      );
                      await setIsOpen(true);
                    } else {
                      await setTitle('Class unavailable');
                      await setDescription(
                        `${courseData[0].name} is currently full, try again later!`
                      );
                      await setIsOpen(true);
                      if (!isOpen) {
                        router.back();
                      }
                    }
                  }}
                >
                  Book
                </button>
              ) : (
                <button
                  className="bg-BLUE p-2 rounded text-WHITE"
                  onClick={async () => {
                    await removeCourse();
                    await setTitle('You have been successfully unenrolled!');
                    await setDescription(`Bye!`);
                    await setIsOpen(true);
                  }}
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
