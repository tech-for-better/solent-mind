import { supabase } from '../utils/supabaseClient';
import Link from 'next/link';

const SignOut = () => {
  return (
    <button
      className=""
      onClick={() => {
        supabase.auth.signOut();
      }}
    >
      <Link href="/">
        <a className="p-2 rounded-full border border-DARKPINK text-sm hover:bg-DARKPINK hover:text-WHITE">
          Sign Out
        </a>
      </Link>
    </button>
  );
};

export default SignOut;
