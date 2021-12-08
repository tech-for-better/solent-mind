import React from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';

const contact = () => {
  return (
    <div className="font-sans">
      <div className="flex flex-row place-content-end p-4">
        <GiHamburgerMenu size={32} style={{ color: '#B01A76' }} />
      </div>

      <section className="flex justify-center">
        <Image
          src="/logo/solent.png"
          width={400}
          height={100}
          alt="solent mind organization logo"
        />
      </section>

      <section className="flex justify-center mb-4">
        <p>
          If you feel low, anxious or need someone to talk to, speak to trained
          mental health advisors through our support line:
        </p>
      </section>

      <section className="flex flex-col justify-center m-auto w-96 bg-PURPLE rounded-lg text-WHITE">
        <p className="mt-4">Telephone: 023 8017 9049 </p>
        <p className="mt-4">Weekdays: 9am-7pm </p>
        <p className="mt-4">Weekends: 10am-2pm </p>
      </section>
    </div>
  );
};

export default contact;
