import React, { useState } from 'react';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import SideMenu from '../components/SideMenu';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import Link from 'next/link';
import Head from 'next/head';

const Contact = ({ session }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="font-sans">
        <Head>
          <title>Contact Us</title>
        </Head>
        <Header session={session} />

        <div className="ml-20">
          <BackButton />
        </div>

        <div className="flex flex-col m-auto sm:w-2/3 lg:w-3/5">
          <section className="flex justify-center">
            <p>
              If you feel low, anxious or need someone to talk to, speak to
              trained mental health advisors through our support line:
            </p>
          </section>

          <section className="flex flex-col justify-center m-auto w-96 bg-BLUE rounded-md shadow-lg text-WHITE mt-8">
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

          <section className="flex flex-col justify-center m-auto w-96 border-2 border-BLUE shadow-lg rounded-md mt-8">
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
            <Link href="https://twitter.com/SolentMind">
              <a target="_blank">
                <FaTwitterSquare size={32} style={{ color: '#FF0071' }} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/solentmind/">
              <a target="_blank">
                <FaInstagram size={32} style={{ color: '#FF0071' }} />
              </a>
            </Link>
            <Link href="https://www.facebook.com/SolentMind1">
              <a target="_blank">
                <FaFacebookSquare size={32} style={{ color: '#FF0071' }} />
              </a>
            </Link>
          </section>

          <section className="flex flex-col mt-8">
            <p>Solent Mind</p>
            <p>15-16 The Avenue</p>
            <p>Southampton</p>
            <p>SO17 1XF</p>
          </section>
        </div>
      </div>

      <div
        className={
          open
            ? 'transform translate-x-1/5 absolute top-0 right-0 transition ease-in'
            : 'hidden absolute top-0 right-0 transition ease-in'
        }
      >
        <SideMenu open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Contact;
