import 'tailwindcss/tailwind.css';
import supabaseClient from '../utils/supabaseClient';

function MyApp({ Component, pageProps }) {
  const { session, supabase } = supabaseClient();
  return <Component session={session} supabase={supabase} {...pageProps} />;
}

export default MyApp;
