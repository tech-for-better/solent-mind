import 'tailwindcss/tailwind.css';
import { supabase, session } from '../utils/supabaseClient';

function MyApp({ Component, pageProps }) {
  // const { session, supabase } = useSupabase();
  return <Component session={session} supabase={supabase} {...pageProps} />;
}

export default MyApp;
