import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between mt-6">
      <Link href="/myCourses">
        <a>
          <Image
            src="/logo/solent.png"
            width={180}
            height={50}
            alt="solent mind organisation logo"
          />
        </a>
      </Link>
      <div className="flex flex-col mr-6 text-lg text-DARKPINK">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
