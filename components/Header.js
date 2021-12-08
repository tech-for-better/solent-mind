import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <Image
        src="/logo/solent.png"
        width={200}
        height={40}
        alt="solent mind organisation logo"
      />
      <div>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
