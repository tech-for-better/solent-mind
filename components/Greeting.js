import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Greeting = ({ username }) => {
  return (
    <div>
      <CgProfile />
      <p>Hello User!</p>
      <p>My courses</p>
    </div>
  );
};

export default Greeting;
