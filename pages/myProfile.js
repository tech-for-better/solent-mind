import React from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import Account from '../components/Account';
import Main from '../components/Main';
import Tabs from '../components/Tabs';

const MyProfile = ({ supabase }) => {
  const [userData, setUserData] = React.useState(null);
  const contents = [
    { topic: 'My booked courses', url: '/myCourses' },
    { topic: 'Upcoming courses', url: '/courses' },
  ];

  async function fetchData() {
    const user = await supabase.auth.user();

    setUserData(user);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Greeting user={userData ? ` ${userData.email}` : 'User'} />
      <Main>
        <h1 className="mt-8 text-2xl p-4"> My Profile</h1>
        <Account userData={userData} setUserData={setUserData} />
        <div className="bg-PURPLE shadow-md"></div>
        <Tabs contents={contents} />
      </Main>
    </>
  );
};

export default MyProfile;
