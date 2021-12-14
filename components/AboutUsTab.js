import React from 'react';
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const AboutUsTab = ({ contents }) => {
  return (
    <ul className=" p-4">
      {contents.map((content) => (
        <Link href={content.url} key={content.topic}>
          <a target="_blank">
            <li className="border border-BLUE p-2 rounded mb-4 shadow-md">
              <div className="flex flex-row justify-between font-bold items-center ml-12 mr-12">
                <p>{content.topic}</p>
                <BsFillArrowRightCircleFill className="text-lg text-PURPLE" />
              </div>
            </li>
          </a>
        </Link>
      ))}
    </ul>
  );
};

export default AboutUsTab;
