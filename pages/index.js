import Auth from '../components/Auth';
import Main from '../components/Main';
import Header from '../components/Header';
import redirect from 'nextjs-redirect';
import Head from 'next/head';

const Home = ({ session }) => {
  const Redirect = redirect('/myCourses');

  return (
    <>
      <Head>
        <title>Home: Solent Mind</title>
      </Head>
      <Header />
      <Main
        className="container font-sans"
        style={{ padding: '50px 0 100px 0' }}
      >
        {!session ? (
          <Auth />
        ) : (
          <Redirect>
            <p className="text-center text-3xl text-PURPLE mt-32">
              Logging you in... 👋{' '}
            </p>
          </Redirect>
        )}
      </Main>
    </>
  );
};

export default Home;
