import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { supabase } from '../utils/supabaseClient';

const Greeting = () => {
 

  return (
    <div>
      <CgProfile />
      <p>My courses</p>
    </div>
  );
};

export default Greeting;
