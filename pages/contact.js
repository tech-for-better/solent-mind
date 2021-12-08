import React from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

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

      <section className="flex justify-center">
        <p>
          If you feel low, anxious or need someone to talk to, speak to trained
          mental health advisors through our support line:
        </p>
      </section>

      <section className="flex flex-col justify-center m-auto w-96 bg-PURPLE rounded-md text-WHITE mt-8">
        <p className="m-4">Telephone: 023 8017 9049 </p>
        <p className="m-4">Weekdays: 9am-7pm </p>
        <p className="m-4">Weekends: 10am-2pm </p>
      </section>

      <section className="flex flex-col justify-center m-auto w-96 border-2 border-PURPLE shadow-lg rounded-md mt-8">
        <p className="m-4">For all other general, administrative enquires:</p>
        <p className="m-4">Telephone: 023 8202 7810</p>
        <p className="m-4">Email: info@solentmind.org.uk *</p>
      </section>

      <section className="flex justify-center mt-4">
        <p className="text-sm">
          *Please do not send any confidential information to us via email.
        </p>
      </section>

      <section className="flex justify-between w-96 mt-4 m-auto">
        <FaTwitterSquare size={32} style={{ color: '#5F55B9' }} />
        <FaInstagram size={32} style={{ color: '#5F55B9' }} />
        <FaFacebookSquare size={32} style={{ color: '#5F55B9' }} />
      </section>
    </div>
  );
};

export default contact;
