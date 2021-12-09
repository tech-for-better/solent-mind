import React from 'react';
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Main = ({ children }) => {
  return (
    <main className="flex flex-col m-auto w-2/3 lg:w-3/5">{children}</main>
  );
};

export default Main;
