import React from 'react';
import DatePicker from './DatePicker';

const CourseTab = ({ courses, enrolledCourses }) => {
  const enrolledArr = enrolledCourses.map(Object.values).flat();
  return (
    <>
      <DatePicker courses={courses} enroll={enrolledArr.includes(course.id)} />
    </>
  );
};

export default CourseTab;
