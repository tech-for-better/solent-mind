import React from 'react';
import { GiHamburgerMenu } from 'react-icons/Gi';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <Image
        src="/logo/solent.png"
        width={200}
        height={40}
        alt="solent mind organization logo"
      />
      {/* <GiHamburgerMenu /> */}
    </div>
  );
};

export default Header;
