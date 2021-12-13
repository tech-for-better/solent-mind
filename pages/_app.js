import 'tailwindcss/tailwind.css';
import { useSupabase, supabase } from '../utils/supabaseClient';

function MyApp({ Component, pageProps }) {
  const session = useSupabase();
  return <Component session={session} supabase={supabase} {...pageProps} />;
}

export default MyApp;
