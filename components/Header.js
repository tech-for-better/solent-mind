import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';
import SideMenu from '../components/SideMenu';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center justify-between mt-6">
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
        <div className="flex flex-col mr-6 text-lg text-DARKPINK">
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
            style={open ? { color: '#FFFFFF' } : { color: '#FF0071' }}
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
        <SideMenu open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Header;
