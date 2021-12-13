import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Tabs = ({ contents }) => {
  return (
    <ul className=" p-4">
      {contents.map((content) => (
        <Link href='/' key={content.topic}>
          <a>
            <li className="border border-BLUE p-2 rounded mb-4 shadow-md">
              <div className="flex flex-row justify-between font-bold items-center">
                <div>{content.topic} </div>
                <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
              </div>
            </li>
          </a>
        </Link>
      ))}
    </ul>
  );
};

export default Tabs;
