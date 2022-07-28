import React from 'react';
import Link from 'next/link';
import sidebarData from '@/data/sidebar';

import { LogoSM, Sun, RightArrow, SelectArrowIcon, Overview, Market } from '@/public/assets/svgsIcons';

const NavLink = ({ icon, url, name }) => (
  <li className="cursor-pointer mb-6">
    <Link href={url} passHref className="">
      <a>
        <div className="mb-2 flex flex-col items-center justify-center ">{icon}</div>
        <span className="text-xs text-center text-black-300 font-black ">{name}</span>
      </a>
    </Link>
  </li>
);
const Dashboard = () => {
  return (
    <>
      {/** Navbar */}
      <div className="relative z-50 bg-white ">
        <div className="fixed w-full bg-white flex items-center border-b-2 border-gray-200">
          <div className="flex items-center justify-between w-[55%] border-r-2 border-gray-200 pr-6">
            <LogoSM />

            <div className="flex item-center gap-x-1 bg-gray-200 rounded-[45px] p-1.5 pr-2 ">
              <span className="uppercase mt-1 font-medium text-black-300 pl-1.5">LIGHT</span>
              <span className=" bg-white rounded-full p-2">
                <Sun />
              </span>
            </div>
          </div>
          <div className="w-[45%]">
            <div className="flex items-center">
              <RightArrow className="mx-4" />
              <div className="flex items-center gap-6 border-r-2 border-gray-200 pr-3">
                <div className="m-2">
                  <p className="uppercase text-semibold text-black-700">CASH BALANCE</p>
                  <div className="uppercase text-black text-xl text-black-300">₦8,374,763</div>
                </div>
                <div className="m-2">
                  <p className="uppercase text-semibold text-black-700">SECURITIES VALUE</p>
                  <div className="uppercase text-black text-xl text-black-300">₦8,374,763</div>
                </div>
                <div className="m-2">
                  <p className="uppercase text-semibold text-black-700">LOAN BALANCE</p>
                  <div className="uppercase text-black text-xl text-black-300">₦8,374,763</div>
                </div>
              </div>
              <div className="p-4 relative ">
                <div className=" flex items-center gap-3 justify-end pl-5">
                  <div className="bg-black-300 text-white py-1 px-2 font-bold ">DEMO</div>
                  <SelectArrowIcon stroke="#000" n />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Navbar */}
      <div className="flex pt-[65px] flex-no-wrap">
        {/* Sidebar starts */}
        {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
        <div className="relative">
          <div className="w-[90px] absolute sm:fixed sm:overflow-y-auto scrollbar bg-white shadow md:h-full hidden sm:flex">
            <div className="px-1">
              <ul className="mt-16 text-center">
                {sidebarData.map((data, index) => {
                  return (
                    <NavLink
                      key={index}
                      name={data.name}
                      url={data.url}
                      icon={data.icon}
                      // activeIcon={data.activeIcon}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="relativ">
          <div className="w-60  sm:fixed sm:overflow-y-auto scrollbar ml-24 bg-black-400 h-full">
            <p className="text-xl md:text-3xl  text-red-300">Text white</p>
            <ul className="mt-16 text-center">
              {sidebarData.map((data, index) => {
                return (
                  <NavLink
                    key={index}
                    name={data.name}
                    url={data.url}
                    icon={data.icon}
                    // activeIcon={data.activeIcon}
                  />
                );
              })}
            </ul>
            <div className="flex justify-center mt-48 mb-4 w-full">
              <div className="relative ">
                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                </div>
                <input
                  className=" focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar ends */}
        {/* Remove class [ h-64 ] when adding a card block */}
        <div className="container overflow-y-auto scrollbar  ml-80 py-10 h-full md:w-4/5 w-11/12 px-6">
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {/* Place your content here */}
            <ul className="mt-16 text-center">
              {sidebarData.map((data, index) => {
                return (
                  <NavLink
                    key={index}
                    name={data.name}
                    url={data.url}
                    icon={data.icon}
                    // activeIcon={data.activeIcon}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        {/* <div className="ml-32">
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
