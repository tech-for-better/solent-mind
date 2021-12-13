import { supabase } from '../utils/supabaseClient';

const SignOut = () => {
  return (
    <button
      className="bg-PURPLE text-WHITE font-bold w-32 px-5 py-2 rounded"
      onClick={() => supabase.auth.signOut()}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
