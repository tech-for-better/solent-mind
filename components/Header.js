import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex flex-row justify-between m-4 pr-4">
      <Link href="/myCourses">
        <a>
          <Image
            src="/logo/solent.png"
            width={200}
            height={40}
            alt="solent mind organisation logo"
          />
        </a>
      </Link>
      <div className="flex flex-col">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
