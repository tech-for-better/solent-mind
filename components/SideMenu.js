import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/Io';

export const SideMenu = ({ open, setOpen }) => {
  return (
    <div className="flex flex-col place-content-end h-screen w-80 bg-DARKPINK bg-opacity-90 rounded-l-lg text-WHITE">
      <section className="flex flex-row place-content-end p-2">
        <IoIosClose
          onClick={() => {
            setOpen(false);
          }}
          size={48}
          className={
            open
              ? 'transform rotate-0 transition ease-in'
              : 'transform rotate-45 transition ease-out' + ' cursor-pointer'
          }
        />
      </section>
      <section className="flex flex-col p-6 space-y-8 text-lg">
        <Link href="">
          <a>Profile</a>
        </Link>
        <Link href="">
          <a>My Courses</a>
        </Link>
        <Link href="">
          <a>Book Course</a>
        </Link>
        <Link href="">
          <a>Resources</a>
        </Link>
        <Link href="">
          <a>About Us</a>
        </Link>
        <Link href="">
          <a>My Progress</a>
        </Link>
        <Link href="">
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
