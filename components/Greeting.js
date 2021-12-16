import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Greeting = ({ user }) => {
  return (
    <div className="flex flex-row justify-center mt-8">
      <p className="text-md md:text-3xl ml-auto mr-auto">
        Hello, <span className="text-DARKPINK">{user}</span>!
      </p>
    </div>
  );
};

export default Greeting;
