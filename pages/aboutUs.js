import Header from '../components/Header';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import AboutUsTab from '../components/AboutUsTab';
import BackButton from '../components/BackButton';

const AboutUs = () => {
  const contents = [
    {
      topic: 'What we do',
      url: 'https://www.solentmind.org.uk/about-us/what-we-do/',
    },
    {
      topic: 'Who we are',
      url: 'https://www.solentmind.org.uk/about-us/who-we-are/',
    },
    {
      topic: 'Reports & accounts',
      url: 'https://www.solentmind.org.uk/about-us/reports-and-accounts/',
    },
    {
      topic: 'Policies',
      url: 'https://www.solentmind.org.uk/about-us/policies/',
    },
  ];
  return (
    <>
      <Header />
      <Main>
        <BackButton />
        <PageHeader>ABOUT US</PageHeader>
        <div className="bg-PURPLE shadow-md">
          <div className="text-WHITE p-4">
            Our vision is for a world where everyone experiencing a mental
            health issue receives support and respect. Get to know us and how we
            plan to achieve it.
          </div>
        </div>
        <AboutUsTab contents={contents} />
      </Main>
    </>
  );
};

export default AboutUs;
