import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EnrolTag from './EnrolTag';

const CourseTab = ({ courses, enrolledArr }) => {
  // const enrolledArr = enrolledCourses.map(Object.values).flat();
  return (
    <div>
      <ul className=" p-4">
        {/* {courses.map((course) => (
          <Link href={`/courses/${course.slug}`} key={course.course_id}>
            <a> */}
        {
          <li
            contents={courses}
            className="border border-BLUE p-2 rounded mb-4 shadow-md"
          >
            <div className="flex flex-row justify-between mb-2">
              <div className="font-bold">{course.name}</div>
              <EnrolTag enroll={enrolledArr.includes(course.id)} />
            </div>
            <Image
              src={course.image}
              alt={`image of ${course.name}`}
              width={200}
              height={100}
            />
            <p>{course.date}</p>
            <div
              className="font-thin font-montserrat"
              dangerouslySetInnerHTML={{ __html: course.description }}
            />
          </li>
        }
        {/* </a>
          </Link>
        ))} */}
      </ul>
    </div>
  );
};

export default CourseTab;
