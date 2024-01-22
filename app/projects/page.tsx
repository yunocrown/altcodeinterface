'use client'
import Link from "next/link";
import React , { useState } from "react";

const sortOptions = [
    {
      label: 'Date modified (Latest first)',
      value: 'date' 
    },
    {
      label: 'Name (ascending)',
      value: 'name'
    }
  ];
  
export default function page() {
    const [showPricing , setShowPricing] = useState(false);
    const [selectedSort, setSelectedSort] = useState('date');


    const handlePricingClick = () => {
        setShowPricing(!showPricing);
    }
    const handleMaybeLater = () => {
        setShowPricing(!showPricing)
    }
    return(
        <main>
            <div className="w-full h-full flex flex-wrap items-center justify-center bg-slate-900"> 
                <div className="w-full h-14 bg-slate-900 items-center flex  place-content-between text-white gap-8 border border-b-violet-400 border-t-0 border-l-0 border-r-0">
                    <div className="flex p-1 content-center gap-2 w-60">
                        <img
                          src={"/altcode-high-resolution-logo-color-on-transparent-background.png"}
                          alt="logoImage"
                          width={35}
                          height={45}
                          className="ml-1"
                        />
                        <div className="flex font-[system-ui] gap-1 items-center flex-wrap">
                          <p className="text-mid text-white font-semibold ">
                            Altcode
                          </p>
                          <p className="text-xs text-slate-500 font-normal">
                            v1.0-Flutter 3.10.4
                          </p>
                        </div>
                    </div>
                    <div className="flex items-center content-center text-center gap-6">
                        <div className="font-[system-ui] font-bold text-xs rounded-lg hover:cursor-pointer border p-2 border-violet-400 w-12 h-8 flex flex-wrap items-center justify-center" onClick={handlePricingClick}>
                          <span>free</span>
                          {showPricing &&
                            <div className="absolute w-full h-full flex flex-wrap items-center justify-center top-0 left-0 z-30">
                              <div className="w-[35rem] h-fit bg-slate-700 flex flex-wrap p-3 rounded-lg ">
                                <span className="text-white font-[system-ui] text-lg font-bold w-full flex text-left">Get more from Altcode. Upgarde to premimum today.</span>
                                <span className="text-white font-[system-ui] text-lg font-light w-full flex">With premimum, you can</span>
                                <div className="w-full h-full bg-violet-700 p-2 rounded-lg  text-white font-[system-ui] text-base font-light flex flex-wrap">
                                  <li className="w-full text-left">Create unlimited number of projects</li>
                                  <li className="w-full text-left">Use unlimited number of extensions</li>
                                  <li className="w-full text-left">Access monetization extensions</li>
                                  <li className="w-full text-left">Fast-track approvals</li>
                                  <li className="w-full text-left">...and do much more!</li>
                                  <div className="w-full flex justify-end p-2 pt-4">
                                    <button className="w-fit h-fit border p-1 rounded mr-3" onClick={handleMaybeLater}>Maybe later</button>
                                    <button className="w-fit h-fit border p-1 rounded">Get now for Rs300/mo</button>
                                  </div>
                                </div>
                              </div>
                            </div>}
                        </div>
                        <div className="grid grid-cols-4 gap-8 justify-self-center self-center place-self-center mr-1.5">
                            <Link href="/community">
                              <img
                                src={"/-icon-people-community.svg"}
                                alt="image"
                                width={30}
                                height={30}
                                className="hover:bg-gray-700 p-1"
                                title="Community"
                              />
                            </Link>
                            <Link href="/docs">
                              <img
                                src={"/-icon-read-the-docs.svg"}
                                alt="image"
                                width={25}
                                height={25}
                                className="hover:bg-gray-700 p-1"
                                title="Docs"
                              />
                            </Link>
                            <Link href="/donate">
                              <img
                                src={"/-icon-donate.svg"}
                                alt="image"
                                width={30}
                                height={30}
                                className="hover:bg-gray-700 p-1"
                                title="Donate"
                              />
                            </Link>
                            <Link href="/profile">
                                <img
                                  src={"/-icon-user-avatar-filled.svg"}
                                  alt="image"
                                  width={30}
                                  height={30}
                                  className="hover:bg-gray-700 p-1"
                                  title="Profile"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-[30rem] h-[25rem] bg-slate-900 flex flex-wrap items-center justify-center relative mt-4">
                            <img 
                                src="/bgImage.png"
                                alt="bgImage"
                                width={400}
                                height={400}
                            />
                </div>
                <div className="w-full h-full bg-slate-900 flex flex-wrap mt-3">
                            <div className="w-full h-full relative">
                                <div className="w-full h-10 gap-3 relative flex pl-4">
                                    <button className="border text-white text-sm w-36 rounded h-8 border-violet-400">Create Project</button>
                                    <button className="border text-white text-sm w-36 rounded h-8 border-violet-400">Import Project</button>
                                    <div className="border text-white text-sm w-[20rem] h-8 border-violet-400 flex flex-wrap items-center justify-center rounded">
                                    <label>Sort by:</label>
                                    <select 
                                      value={selectedSort}
                                      onChange={e => setSelectedSort(e.target.value)}
                                      className="bg-transparent outline-none border-none w-[15rem] ml-1"
                                    >
                                      {sortOptions.map(option => (
                                        <option 
                                            key={option.value} 
                                            value={option.value}
                                            className="bg-violet-700"    
                                        >
                                          {option.label}
                                        </option>  
                                      ))}
                                    </select>
                                    </div>
                                </div>
                            </div>

                </div>
            </div>
        </main>
    )
}