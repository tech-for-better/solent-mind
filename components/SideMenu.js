import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import SignOut from './SignOut';

const SideMenu = ({ open, setOpen, session }) => {
  return (
    <div className="flex flex-col place-content-end h-screen w-80 bg-PEACH bg-opacity-90 z-10 rounded-l-lg text-BLACK">
      <section className="flex flex-row justify-between place-content-end p-6 mt-2 sm:mr-0 md:mr-4">
        {session ? <SignOut /> : <div></div>}
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
              if (!session) {
                window.location.reload();
              }
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
              if (!session) {
                window.location.reload();
              }
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
              if (!session) {
                window.location.reload();
              }
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
        <Link href={session ? '/myProgress' : '/'}>
          <a
            className="hover:text-ROYALBLUE"
            onClick={async () => {
              await setOpen(false);
            }}
          >
            My Progress
          </a>
        </Link>

        <Link href="/contact">
          <a className="hover:text-ROYALBLUE">Contact</a>
        </Link>
      </section>

      <section className="flex justify-between w-48 mt-12 m-auto">
        <Link href="https://twitter.com/SolentMind">
          <a target="_blank">
            <FaTwitterSquare size={32} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/solentmind/">
          <a target="_blank">
            <FaInstagram size={32} />
          </a>
        </Link>
        <Link href="https://www.facebook.com/SolentMind1">
          <a target="_blank">
            <FaFacebookSquare size={32} />
          </a>
        </Link>
      </section>
    </div>
  );
};

export default SideMenu;
