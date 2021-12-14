import React from 'react';

const EnrolTag = ({ enroll }) => {
  return (
    <div className="text-WHITE">
      {!enroll ? (
        <span className="bg-DARKPINK rounded-full  p-1">Book</span>
      ) : (
        <span className="bg-BLUE rounded-full  p-1">Enrolled</span>
      )}
    </div>
  );
};

export default EnrolTag;
