import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Image from 'next/image';

export default function Account({ userData, setUserData }) {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState(null);
  const [loggedinAt, setLoggedinAt] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from('profiles')
        .select('username, avatar')
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setAvatar(data.avatar);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  // async function updateProfile({ username }) {
  //   try {
  //     setLoading(true);
  //     const user = supabase.auth.user();

  //     const updates = {
  //       id: profiles.id,
  //       username,
  //     };

  //     let { error } = await supabase.from('users').upsert(updates, {
  //       returning: 'minimal', // Don't return the value after inserting
  //     });

  //     if (error) {
  //       throw error;
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  console.log(avatar);
  return (
    <>
      <div>Welcome {username}!</div>
      <div>You last signed in at</div>
      {/* <Image src={avatar} alt={username} width={500} height={500} /> */}
      <div>
        <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      </div>
    </>
  );
}
