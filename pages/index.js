import Auth from '../components/Auth';
import Main from '../components/Main';
import Header from '../components/Header';
import redirect from 'nextjs-redirect';

export default function Home({ session }) {
  const Redirect = redirect('http://localhost:3000/myCourses');

  return (
    <>
      <Header />
      <Main
        className="container font-sans"
        style={{ padding: '50px 0 100px 0' }}
      >
        {!session ? (
          <Auth />
        ) : (
          <Redirect>
            {' '}
            <p className="text-center">Logging you in...</p>
          </Redirect>
        )}
      </Main>
    </>
  );
}
