import React from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';

const contact = () => {
  return (
    <div>
      <div className="flex flex-row place-content-end p-4">
        <GiHamburgerMenu size={32} style={{ color: '#B01A76' }} />
      </div>

      <div className="flex justify-center">
        <Image
          src="/logo/solent.png"
          width={400}
          height={100}
          alt="solent mind organization logo"
        />
      </div>
    </div>
  );
};

export default contact;
