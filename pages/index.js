import { useState, useEffect } from 'react';
import Auth from '../components/Auth';
import Account from '../components/Account';
import Head from 'next/head';

export default function Home({ supabase, session }) {
  return (
    <>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <div
        className="container font-sans"
        style={{ padding: '50px 0 100px 0' }}
      >
        {!session ? (
          <Auth />
        ) : (
          <Account key={session.user.id} session={session} />
        )}
      </div>
    </>
  );
}
