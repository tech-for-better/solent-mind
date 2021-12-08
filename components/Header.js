import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex flex-row justify-between m-4 pr-4">
      <Image
        src="/logo/solent.png"
        width={200}
        height={40}
        alt="solent mind organisation logo"
      />
      <p>1</p>
      <p className="mt-4 text-PURPLE">2</p>
      <div className="flex flex-col">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
