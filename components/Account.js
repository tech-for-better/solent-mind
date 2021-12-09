import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Image from 'next/image';

export default function Account({ userProfile, setUserProfile }) {
  return (
    <>
      <div>
        {userProfile === null ? (
          'Loding'
        ) : (
          <div>
            <p>Welcome {userProfile.username}</p>{' '}
            <Image
              src={userProfile.avatar}
              alt={`image of ${userProfile.username}`}
              width={500}
              height={500}
            />
            <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
          </div>
        )}
      </div>
    </>
  );
}
