import 'tailwindcss/tailwind.css';
import { useSupabase, supabase } from '../utils/supabaseClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const session = useSupabase();
  return <Component session={session} supabase={supabase} {...pageProps} />;
}

export default MyApp;
