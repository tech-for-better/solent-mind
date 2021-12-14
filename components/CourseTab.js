import React from 'react';
import DatePicker from './DatePicker';

const CourseTab = ({ courses }) => {
  const enroll = false;
  return (
    <>
      <DatePicker courses={courses} enroll={enroll} />
    </>
  );
};

export default CourseTab;
