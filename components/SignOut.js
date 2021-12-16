import { supabase } from '../utils/supabaseClient';

const SignOut = () => {
  return (
    <button className="" onClick={() => supabase.auth.signOut()}>
      <span className="bg-DARKPINK bg-opacity-90 p-4 rounded-full text-WHITE">
        Sign Out
      </span>
    </button>
  );
};

export default SignOut;
