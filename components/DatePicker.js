import { React, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EnrolTag from './EnrolTag';

const DatePicker = ({ courses, enrolledCourses }) => {
  const [month, setMonth] = useState(null);
  const enrolledArr = enrolledCourses.map(Object.values).flat();

  return (
    <>
      <fieldset className=" pl-4 pb-3 border border-BLUE rounded mb-4 shadow-md">
        <legend className="mb-2 text-lg">Select classes by month</legend>

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
                  <li className="border border-BLUE bg-opacity-70 p-8 rounded-xl mb-4 cursor-pointer mb-4 shadow-md hover:bg-PEACH hover:bg-opacity-60 -z-10">
                    <div className="flex flex-row justify-between mb-2">
                      <div className="font-bold text-lg">{course.name}</div>
                      <EnrolTag enroll={enrolledArr.includes(course.id)} />
                    </div>
                    <Image
                      className="img"
                      src={course.image}
                      alt={`image of ${course.name}`}
                      width={200}
                      height={100}
                    />
                    <div className="mt-2 mb-2 font-bold">
                      Course date: {course.date}
                    </div>
                    <div
                      className="font-montserrat text-base leading-6 "
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
