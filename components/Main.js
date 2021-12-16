import React from 'react';

const Main = ({ children }) => {
  return (
    <main className="flex flex-col m-auto w-5/6 lg:w-3/5">{children}</main>
  );
};

export default Main;
