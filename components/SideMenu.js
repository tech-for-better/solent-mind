import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

export const SideMenu = ({ open, setOpen }) => {
  return (
    <div className="flex flex-col place-content-end h-screen w-80 bg-DARKPINK bg-opacity-90 rounded-l-lg text-WHITE">
      <section className="flex flex-row place-content-end p-4 mt-4">
        <IoIosClose
          onClick={() => {
            setOpen(false);
          }}
          size={48}
          className={
            open
              ? 'transform rotate-0 transition ease-in cursor-pointer'
              : 'transform rotate-45 transition ease-out'
          }
        />
      </section>
      <section className="flex flex-col p-6 space-y-8 text-lg">
        <Link href="/myProfile">
          <a>Profile</a>
        </Link>
        <Link href="/myCourses">
          <a>My Courses</a>
        </Link>
        <Link href="/courses">
          <a>Book Course</a>
        </Link>
        <Link href="/resources">
          <a>Resources</a>
        </Link>
        <Link href="/aboutUs">
          <a>About Us</a>
        </Link>
        <Link href="/myProgress">
          <a>My Progress</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </section>

      <section className="flex justify-between w-48 mt-12 m-auto">
        <FaTwitterSquare size={32} />
        <FaInstagram size={32} />
        <FaFacebookSquare size={32} />
      </section>
    </div>
  );
};
