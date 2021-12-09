import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Tabs = ({ contents }) => {
  return (
    <ul className=" p-4">
      {contents.map((content) => (
        <li
          key={content.topic}
          className="border border-BLUE p-2 rounded mb-4 shadow-md"
        >
          <div className="flex flex-row justify-between font-bold items-center">
            <div>{content.topic} </div>
            <Link href={content.url}>
              <a>
                <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
              </a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
