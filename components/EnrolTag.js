import React from 'react';

const EnrolTag = ({ enroll }) => {
  return (
    <div className="text-WHITE">
      {!enroll ? (
        <span className="bg-DARKPINK bg-opacity-90 p-2 rounded-full">Book</span>
      ) : (
        <span className="bg-GREEN p-2 rounded-full text-BLACK">Enrolled</span>
      )}
    </div>
  );
};

export default EnrolTag;
