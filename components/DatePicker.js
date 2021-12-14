import { React, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EnrolTag from './EnrolTag';
import CourseTab from './CourseTab';

const DatePicker = ({ courses, enrolledCourses }) => {
  const [month, setMonth] = useState(null);
  const enrolledArr = enrolledCourses.map(Object.values).flat();

  return (
    <>
      <fieldset className=" pl-4">
        <legend className="mb-2">Select classes by month</legend>

        <label className="mr-2" htmlFor="January">
          January
          <input
            className="ml-1"
            type="radio"
            name="months"
            id="January"
            value="January"
            onChange={(event) => setMonth(event.target.value)}
          />
        </label>

        <label className="mr-2" htmlFor="February">
          February
          <input
            className="ml-1.5"
            type="radio"
            name="months"
            id="February"
            value="February"
            onChange={(event) => setMonth(event.target.value)}
          />
        </label>
        <label className="mr-2" htmlFor="March">
          March
          <input
            className="ml-1"
            type="radio"
            name="months"
            id="March"
            value="March"
            onChange={(event) => setMonth(event.target.value)}
          />
        </label>
        <label className="mr-2" htmlFor="April">
          April
          <input
            className="ml-1"
            type="radio"
            name="months"
            id="April"
            value="April"
            onChange={(event) => setMonth(event.target.value)}
          />
        </label>
      </fieldset>
      <div>
        <ul className=" p-4">
          {courses
            .filter((course) => course.month == month || month === null)
            .map((course) => (
              <Link href={`/courses/${course.slug}`} key={course.id}>
                <a>
                  <li
                    // contents={courses}
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
                    <p className="mt-1">Course date: {course.date}</p>
                    <div
                      className="font-thin font-montserrat"
                      dangerouslySetInnerHTML={{ __html: course.description }}
                    />
                  </li>
                </a>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};

export default DatePicker;
