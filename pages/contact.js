import React, { useState } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import SideMenu from '../components/SideMenu';

const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-sans">
      <div className="relative">
        <div className="flex justify-end p-6 mt-4">
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
            style={open ? { color: '#FFFFFF' } : { color: '#B01A76' }}
          />
        </div>

        <section className="flex justify-center -mt-8">
          <Image
            src="/logo/solent.png"
            width={400}
            height={100}
            alt="solent mind organization logo"
          />
        </section>

        <div className="flex flex-col m-auto sm:w-2/3 lg:w-3/5">
          <section className="flex justify-center">
            <p>
              If you feel low, anxious or need someone to talk to, speak to
              trained mental health advisors through our support line:
            </p>
          </section>

          <section className="flex flex-col justify-center m-auto w-96 bg-PURPLE rounded-md shadow-lg text-WHITE mt-8">
            <p className="m-4">
              Telephone: <span className="underline">023 8017 9049</span>
            </p>
            <p className="m-4">
              Weekdays: 9<span className="text-sm">am</span>-7
              <span className="text-sm">pm</span>
            </p>
            <p className="m-4">
              Weekends: 10<span className="text-sm">am</span>-2
              <span className="text-sm">pm</span>{' '}
            </p>
          </section>

          <section className="flex flex-col justify-center m-auto w-96 border-2 border-PURPLE shadow-lg rounded-md mt-8">
            <p className="text-sm m-4">
              For all other general, administrative enquires:
            </p>
            <p className="m-4">Telephone: 023 8202 7810</p>
            <p className="m-4">
              Email: <span className="underline">info@solentmind.org.uk</span> *
            </p>
          </section>

          <section className="flex justify-center mt-4">
            <p className="text-xs">
              *Please do not send any confidential information to us via email.
            </p>
          </section>

          <section className="flex justify-between w-96 mt-4 m-auto">
            <FaTwitterSquare size={32} style={{ color: '#5F55B9' }} />
            <FaInstagram size={32} style={{ color: '#5F55B9' }} />
            <FaFacebookSquare size={32} style={{ color: '#5F55B9' }} />
          </section>

          <section className="flex flex-col mt-8">
            <p>Solent Mind</p>
            <p>15-16 The Avenue</p>
            <p>Southampton</p>
            <p>SO17 1XF</p>
          </section>
        </div>
      </div>

      {/* SLIDE MENU */}
      <div
        className={
          open
            ? 'transform translate-x-1/5 absolute top-0 right-0 transition ease-in'
            : 'hidden absolute top-0 right-0 transition ease-in'
        }
      >
        <SideMenu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Contact;
