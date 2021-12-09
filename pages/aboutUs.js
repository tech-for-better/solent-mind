import Link from 'next/link';
import Header from '../components/Header';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Main from '../components/Main';

const AboutUs = () => {
  return (
    <>
      <Header />

      <Main>
        <h1 className="mt-8 text-2xl p-4">ABOUT US</h1>
        <div className="bg-PURPLE shadow-md">
          <div className="text-WHITE p-4">
            Our vision is for a world where everyone experiencing a mental
            health issue receives support and respect. Get to know us and how we
            plan to achieve it.
          </div>
        </div>
        <ul className=" p-4">
          <li className="border border-BLUE p-2 rounded mb-4 shadow-md">
            <div className="flex flex-row justify-between font-bold items-center">
              <div>What we do </div>
              <Link href="https://www.solentmind.org.uk/about-us/what-we-do/">
                <a>
                  <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
                </a>
              </Link>
            </div>
          </li>
          <li className="border border-BLUE p-2 rounded mb-4 shadow-md">
            <div className="flex flex-row justify-between font-bold items-center">
              <div>Who we are </div>
              <Link href="https://www.solentmind.org.uk/about-us/who-we-are/">
                <a>
                  <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
                </a>
              </Link>
            </div>
          </li>
          <li className="border border-BLUE p-2 rounded mb-4 shadow-md">
            <div className="flex flex-row justify-between font-bold items-center">
              <div>Reports & accounts </div>
              <Link href="https://www.solentmind.org.uk/about-us/reports-and-accounts/">
                <a>
                  <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
                </a>
              </Link>
            </div>
          </li>
          <li className="border border-BLUE p-2 rounded mb-4 shadow-md">
            <div className="flex flex-row justify-between font-bold items-center">
              <div>Policies </div>
              <Link href="https://www.solentmind.org.uk/about-us/policies/">
                <a>
                  <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </Main>
    </>
  );
};

export default AboutUs;
