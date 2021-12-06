import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Auth from '../components/Auth';
import Header from '../components/Header';
import MyCourses from '../components/MyCourses';
import Greeting from '../components/Greeting';

const myCourses = () => {
  return (
    <>
      <Header />
      <Greeting />
      <MyCourses />
    </>
  );
};

export default myCourses;
