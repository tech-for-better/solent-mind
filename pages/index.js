import Auth from '../components/Auth';
import Account from '../components/Account';

export default function Home({ supabase, session }) {
  return (
    <>
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
