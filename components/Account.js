import { supabase } from '../utils/supabaseClient';
import Image from 'next/image';

const Account = ({ userProfile, userData }) => {
  const handleUpload = async (event) => {
    const avatarFile = event.target.files[0];

    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(`public/${userData.id}.png`, avatarFile, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) alert(error?.message);

    console.log(data);

    return true;
  };

  return (
    <>
      <div>
        <div>
          <p>Welcome {userProfile.username}</p>{' '}
          <Image
            src={userProfile.avatar}
            alt={`image of ${userProfile.username}`}
            width={500}
            height={500}
          />
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
          />
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
      </div>
    </>
  );
};

export default Account;
