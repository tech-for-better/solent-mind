import Auth from '../components/Auth';
import Account from '../components/Account';
import Main from '../components/Main';
import Header from '../components/Header';

export default function Home({ session }) {
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
          <Account key={session.user.id} session={session} />
        )}
      </Main>
    </>
  );
}
