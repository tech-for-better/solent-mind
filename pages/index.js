import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solent Mind</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <p>Hello Solent</p>
      </main>

      <footer>
        <p>contact us</p>
      </footer>
    </div>
  );
}
