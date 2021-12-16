import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';
import SideMenu from '../components/SideMenu';

const Header = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:w-11/12 ml-auto mr-auto">
      <div className="flex flex-row items-center justify-between mt-4 mr-4">
        <Link href="/myCourses">
          <a className="ml-4">
            <Image
              src="/logo/solent.png"
              width={150}
              height={80}
              alt="solent mind organisation logo"
            />
          </a>
        </Link>
        <div className="mr-5 md:mr-2 lg:mr-1 2xl:mr-0">
          <GiHamburgerMenu
            onClick={() => {
              setOpen(true);
            }}
            className={
              open
                ? 'transform rotate-90 transition ease-in'
                : 'transform rotate-0 transition ease-out' + ' cursor-pointer'
            }
            size={32}
            style={open ? { color: '#FFFFFF' } : { color: '#1618be' }}
          />
        </div>
      </div>
      {/* SLIDE MENU */}
      <div
        className={
          open
            ? 'transform translate-x-1/5 fixed top-0 right-0 transition ease-in'
            : 'hidden top-0 right-0 transition ease-in'
        }
      >
        <SideMenu open={open} setOpen={setOpen} session={session} />
      </div>
    </div>
  );
};

export default Header;
