import Header from '../components/Header';
import Main from '../components/Main';
import PageHeader from '../components/PageHeader';
import AboutUsTab from '../components/AboutUsTab';

const AboutUs = () => {
  return (
    <>
      <Header />
      <Main>
        <PageHeader>ABOUT US</PageHeader>
        <div className="bg-PURPLE shadow-md">
          <div className="text-WHITE p-4">
            Our vision is for a world where everyone experiencing a mental
            health issue receives support and respect. Get to know us and how we
            plan to achieve it.
          </div>
        </div>
        <AboutUsTab />
      </Main>
    </>
  );
};

export default AboutUs;
