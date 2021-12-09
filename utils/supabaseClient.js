import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const useSupabase = () => {
  const [session, setSession] = useState(supabase.auth.session());

  supabase.auth.onAuthStateChange(async (_event, session) => {
    setSession(session);
  });

  return session;
};

export const DEFAULT_AVATARS_BUCKET = 'avatars';
