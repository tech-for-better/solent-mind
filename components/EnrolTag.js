import React from 'react';

const EnrolTag = ({ enroll }) => {
  return (
    <div className="text-WHITE bg-DARKPINK rounded-full p-1">
      {!enroll ? <span>Enrolled</span> : <span>Book</span>}
    </div>
  );
};

export default EnrolTag;
