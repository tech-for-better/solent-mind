import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

const SideMenu = ({ open, setOpen, session }) => {
  return (
    <div className="flex flex-col place-content-end h-screen w-80 bg-PEACH bg-opacity-90 z-10 rounded-l-lg text-BLACK">
      <section className="flex flex-row place-content-end p-6 mt-2 sm:mr-0 md:mr-4">
        <IoIosClose
          onClick={() => {
            setOpen(false);
          }}
          size={58}
          className={
            open
              ? 'transform rotate-0 transition ease-in cursor-pointer'
              : 'transform rotate-45 transition ease-out'
          }
        />
      </section>
      <section className="flex flex-col p-6 space-y-8 text-lg">
        <Link href={session ? '/myProfile' : '/'}>
          <a
            className="hover:text-ROYALBLUE"
            onClick={async () => {
              await setOpen(false);
              window.location.reload();
            }}
          >
            Profile
          </a>
        </Link>
        <Link href={session ? '/myCourses' : '/'}>
          <a
            className="hover:text-ROYALBLUE"
            onClick={async () => {
              await setOpen(false);
              window.location.reload();
            }}
          >
            My Courses
          </a>
        </Link>
        <Link href={session ? '/courses' : '/'}>
          <a
            className="hover:text-ROYALBLUE"
            onClick={async () => {
              await setOpen(false);
              window.location.reload();
            }}
          >
            Book Course
          </a>
        </Link>
        <Link href="/resources">
          <a className="hover:text-ROYALBLUE">Resources</a>
        </Link>
        <Link href="/aboutUs">
          <a className="hover:text-ROYALBLUE">About Us</a>
        </Link>
        <Link href="/myProgress">
          <a className="hover:text-ROYALBLUE">My Progress</a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-ROYALBLUE">Contact</a>
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

export default SideMenu;
