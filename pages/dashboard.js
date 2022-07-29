import React from 'react';
import Link from 'next/link';
import sidebarData from '@/data/sidebar';
import subMenudata from '@/data/subMenuSidebar';
import { ButtonGroup, ButtonOutline } from '@/components/form/Button';

import { LogoSM, Sun, RightArrow, SelectArrowIcon, Search } from '@/public/assets/svgsIcons';

const Menu = ({ icon, url, name, color }) => (
  <li className="cursor-pointer mb-6">
    <Link href={url} passHref className="">
      <a>
        <div className="mb-2 flex flex-col items-center justify-center ">{icon}</div>
        <span className={`text-xs text-center font-black ${color === true ? 'text-red-300' : 'text-black-300'}`}>
          {name}
        </span>
      </a>
    </Link>
  </li>
);
const SubMenu = ({ icon, name, url, color }) => (
  <div className="flex  relative my-8 gap-2">
    <div className="px-2 pl-3 absolute">{icon}</div>
    <Link href={url} passHref>
      <a>
        <p className={`text-sm ml-10 font-bold ${color === true ? 'text-red-300' : 'text-black-300'}`}>{name}</p>
      </a>
    </Link>
  </div>
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
                  <p className="uppercase text-xs text-semibold text-black-700">CASH BALANCE</p>
                  <div className="uppercase text-base tracking-widest text-black-300 font-black">₦8,374,763</div>
                </div>
                <div className="m-2">
                  <p className="uppercase text-xs text-semibold text-black-700">SECURITIES VALUE</p>
                  <div className="uppercase text-base tracking-widest text-black-300 font-black">₦8,374,763</div>
                </div>
                <div className="m-2">
                  <p className="uppercase text-xs text-semibold text-black-700">LOAN BALANCE</p>
                  <div className="uppercase text-base tracking-widest text-black-300 font-black">₦8,374,763</div>
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
          <div className="w-[90px] absolute sm:fixed sm:overflow-y-auto scrollbar  bg-white shadow md:h-full hidden sm:flex">
            <div className="px-1">
              <ul className="mt-16 pb-32 text-center">
                {sidebarData.map((data, index) => {
                  return <Menu key={index} name={data.name} color={data.color} url={data.url} icon={data.icon} />;
                })}
              </ul>
            </div>
          </div>
        </div>
        {/**sub menu */}
        <div className="relative">
          <div className="w-52  sm:fixed sm:overflow-y-auto scrollbar ml-[92px] bg-gray-100 h-full">
            <div className="bg-white py-0.5 m-1.5 ">
              <div className="flex justify-center my-4 w-full">
                <div className="relative mx-2 ">
                  <div className="text-gray-100 absolute ml-4 inset-0 m-auto w-4 h-4">
                    <Search />
                  </div>
                  <input
                    className=" focus:outline-none rounded w-full text-sm border-2 border-gray-300 text-gray-300 bg-gray-100 pl-10 py-1.5"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="mt-6 pb-28">
                {subMenudata.map((data, index) => {
                  return <SubMenu key={index} color={data.color} name={data.name} url={data.url} icon={data.icon} />;
                })}
              </div>
            </div>
          </div>
        </div>
        {/**sub menu */}

        {/* Sidebar ends */}

        {/* Remove class [ h-64 ] when adding a card block */}
        <div className="container overflow-y-auto scrollbar rounded bg-gray-100  ml-[296px] mb-16 py-2 h-full md:w-4/5 w-11/12 px-2">
          <div className="bg-white">
            <div className="w-full h-full rounded border-gray-300">
              {/* Place your content here */}
              <div className="p-6">
                <div className="flex items-center gap-6">
                  <p className="text-sm pb-1 font-bold text-black-300">Board</p>
                  <ButtonGroup color="secondary"> X-Traded</ButtonGroup>
                  <ButtonGroup> OTC</ButtonGroup>
                  <ButtonGroup> FI</ButtonGroup>
                  <ButtonGroup> Derivatives</ButtonGroup>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-sm pb-1 font-bold text-black-300">Product</p>
                  <ButtonGroup color="secondary"> All</ButtonGroup>
                  <ButtonGroup> SMAZ</ButtonGroup>
                  <ButtonGroup> SBBS</ButtonGroup>
                  <ButtonGroup> SPRL</ButtonGroup>
                  <ButtonGroup> SGNG</ButtonGroup>
                  <ButtonGroup> SSGM</ButtonGroup>
                  <ButtonGroup> FETC</ButtonGroup>
                  <ButtonGroup> SCOC</ButtonGroup>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1/2">
                  <div className="scrollbar min-w-full overflow-auto">
                    <table className="is-hoverable w-full text-left">
                      <thead>
                        <tr>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm  lg:px-5">Products</th>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">Quantity</th>
                          <th className=" bg-white px-3 py-3 font-semibold text-sm text-black-700 lg:px-5">
                            Bid Price
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-black-300">
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Soybeans (SSBS) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">2003</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-green-100">1736.92</td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline>Buy </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Paddy Rice (SPRL) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">11293</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-green-100">3627.00 </td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline>Buy </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Maize (SMAZ) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">1832</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-green-100">8294.01</td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline>Buy </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Sorghum (SSGM) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">29102</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-green-100">8192.00</td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline>Buy </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Fair Trade ETC (FETC) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">3212</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-green-100">1736.92 </td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline>Buy </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Fair Trade ETC (FETC) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">3212</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-green-100">1736.92 </td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline>Buy </ButtonOutline>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="scrollbar min-w-full overflow-auto">
                    <table className="is-hoverable w-full text-left">
                      <thead>
                        <tr>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">Products</th>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">Quantity</th>
                          <th className=" bg-white px-3 py-3 font-semibold text-sm text-black-700 lg:px-5">
                            Offer Price
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-black-300">
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Soybeans (SSBS) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">2003</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">1736.92</td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline color="secondary">Sell </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Paddy Rice (SPRL) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">11293</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">3627.00 </td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline color="secondary">Sell </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Maize (SMAZ) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">1832</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">8294.01</td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline color="secondary">Sell </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Sorghum (SSGM) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">29102</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">8192.00</td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline color="secondary">Sell </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Fair Trade ETC (FETC) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">3212</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">1736.92 </td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline color="secondary">Sell </ButtonOutline>
                          </td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Fair Trade ETC (FETC) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">3212</td>
                          <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">1736.92 </td>
                          <td className="px-4 py-3 sm:px-5">
                            <ButtonOutline color="secondary">Sell </ButtonOutline>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/**Tables */}

              <div className="w-full p-2 my-3 bg-gray-100">
                <div className="bg-white">
                  <p className="uppercase font-bold text-black-700 m-1">Trade Log</p>

                  <div className="scrollbar min-w-full overflow-auto">
                    <table className="is-hoverable w-full text-left">
                      <thead>
                        <tr>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">Security</th>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">Board</th>
                          <th className=" bg-white px-3 py-3 font-semibold text-sm text-black-700 lg:px-5">
                            Order Type
                          </th>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">
                            Matched Price
                          </th>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">Quantity</th>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">Date</th>
                          <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">Time</th>
                        </tr>
                      </thead>
                      <tbody className="text-black-300">
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Soybeans (SSBS) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">X-Traded</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">Buy</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">1792.65</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">9265</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">17 Oct, 2020</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">07:38</td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Paddy Rice (SPRL) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">X-Traded</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">Buy</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">1792.65</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">9265</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">8 Sep, 2020</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">02:02</td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Maize (SMAZ) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">OTC</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">Buy</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">Sell</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">9265</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">24 May, 2020</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">06:42</td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Sorghum (SSGM) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">FI</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">Sell</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">1792.65</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">9265</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">1 Feb, 2020</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">01:09</td>
                        </tr>
                        <tr className="border border-transparent border-b-slate-200">
                          <td className="px-4 font-semibold py-3 sm:px-5">Soybeans (SSBS) </td>
                          <td className="px-4 font-semibold py-3 sm:px-5">X-Traded</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">Buy</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">1792.65</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">9265</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">17 Oct, 2020</td>
                          <td className="px-4 font-semibold py-3 sm:px-5">07:38</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="relative z-50 bg-white scrollbar">
        <div className="fixed w-full bottom-0 bg-white flex items-center border-b-2 border-gray-200">
          <div className="flex items-center relative w-full ">
            <div className="bg-black-300 text-center right-0 px-8 flex py-4 w-40">
              <p className="text-white font-semibold text-sm">Live Market</p>
            </div>
            <marquee behavior="scroll" scrollamount="7" width="100%" direction="left">
              <div className="flex items-center gap-5">
                <div className="m-2">
                  <p className=" text-base  text-black-300 font-black "> Soybean (SBBS)</p>
                  <div className=" text-base  text-black-300 font-black  ">₦30,834.59</div>
                </div>
                <div className="m-2">
                  <p className=" text-base  text-black-300 font-black "> Sorghum (SSGM)</p>
                  <div className=" text-base  text-black-300 font-black  ">₦30,834.59</div>
                </div>
                <div className="m-2">
                  <p className=" text-base  text-black-300 font-black "> Soybean (SBBS)</p>
                  <div className=" text-base  text-black-300 font-black  ">₦30,834.59</div>
                </div>
                <div className="m-2">
                  <p className=" text-base  text-black-300 font-black "> Maize (SMAZ)</p>
                  <div className=" text-base  text-black-300 font-black  ">₦30,834.59</div>
                </div>
                <div className="m-2">
                  <p className=" text-base  text-black-300 font-black "> Paddy Rice (SPRL)</p>
                  <div className=" text-base  text-black-300 font-black  ">₦30,834.59</div>
                </div>
                <div className="m-2">
                  <p className=" text-base  text-black-300 font-black "> Cocoa (SCOC)</p>
                  <div className=" text-base  text-black-300 font-black  ">₦30,834.59</div>
                </div>
                <div className="m-2">
                  <p className=" text-base  text-black-300 font-black ">Soybean (SBBS)</p>
                  <div className=" text-base  text-black-300 font-black  ">₦30,834.59</div>
                </div>
                <div className="m-2">
                  <p className=" text-base  text-black-300 font-black "> Sorghum (SSGM)</p>
                  <div className=" text-base  text-black-300 font-black  ">₦30,834.59</div>
                </div>
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
