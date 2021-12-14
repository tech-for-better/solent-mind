import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import Main from './Main';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Main>
      <section className="flex flex-col items-center text-center">
        <h1 className="header m-2 mt-10 text-bold text-2xl">
          Welcome to <span className="text-PURPLE">Solent Mind</span>
        </h1>
        <p className="m-2">Enter your email for a sign in link below</p>
        <div className="m-4">
          <input
            className="text-center border border-DARKPINK pb-2 pt-2 pr-6 pl-6 focus:outline-none focus:ring-2 focus:ring-DARKPINK rounded"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            className="button block bg-DARKPINK text-WHITE pb-2 pt-2 pr-4 pl-4 rounded-xl"
            disabled={loading}
          >
            <span>{loading ? 'Loading' : 'Send Link'}</span>
          </button>
        </div>
      </section>
    </Main>
  );
};

export default Auth;
