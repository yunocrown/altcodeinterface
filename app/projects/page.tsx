'use client'
import Link from "next/link";
import React , { useRef, useState } from "react";

const sortOptions = [
    {
      label: 'Name (ascending)',
      value: 'name ascending'
    },
    {
      label: 'Name (descending)',
      value: 'name decending'
    },
    {
      label: 'Date created (newest first)',
      value: 'recently created date'
    },
    {
      label: 'Date created (oldest first)',
      value: 'oldest created date'
    },
    {
      label: 'Date modified (Latest first)',
      value: 'date' 
    },
    {
      label: 'Date modified (oldest first)',
      value: 'oldest modified date'
    }
  ];

function ProjectConfiguration({}) {
  const handleProjectConfigurationClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
  }
  const handleFinishButtonClick = () => {
    const newProjectDiv = document.createElement('div');
    newProjectDiv.className = "w-20 h-20 border rounded bg-transparent"
  }
  return(
    <div className="absolute w-full h-full flex flex-wrap items-center justify-center top-0 left-0 z-30">
       <div className="w-[35rem] h-fit bg-slate-700 flex flex-wrap p-3 rounded-lg justify-center mb-4">
        <div className="w-full h-12 flex flex-wrap place-content-start ">
          <div className="w-full h-6 text-white font-medium text-base flex flex-wrap items-center pl-4">
            Configure Your Project
          </div>
          <div className="w-full h-4 text-gray-200 font-light text-xm flex flex-wrap items-center pl-4">
            These settings can be changed later
          </div>
        </div>
        <div className="w-full h-80 flex flex-wrap">
          <div className="w-full border rounded flex flex-wrap justify-center">
            <input 
              type="text"
              placeholder="Application Name"
              className="w-11/12 h-10 border rounded border-violet-400 bg-transparent text-white mt-1 pl-2 text-sm outline-none"
              onClick = {handleProjectConfigurationClick}
            />
            <select
              className="w-11/12 h-10 border rounded border-violet-400 bg-transparent text-white mt-1 pl-2 text-sm outline-none"
              onClick={handleProjectConfigurationClick}
            >
              <option className="bg-violet-700 text-white">Default</option>
              <option className="bg-violet-700 text-white">Dark Theme</option>
              <option className="bg-violet-700 text-white">Light Theme</option>
            </select>
            <select
              className="w-11/12 h-10 border rounded border-violet-400 bg-transparent text-white mt-1 pl-2 text-sm outline-none"
              onClick={handleProjectConfigurationClick}
            >
              <option className="bg-violet-700 text-white">Andriod 5.0-5.0.2 (API 21)</option>
              <option className="bg-violet-700 text-white">Andriod 5.1-5.1.1 (API 22)</option>
              <option className="bg-violet-700 text-white">Andriod 6.0-6.0.1 (API 23)</option>
              <option className="bg-violet-700 text-white">Andriod 7.0 (API 24)</option>
              <option className="bg-violet-700 text-white">Andriod 7.1-5.1.2 (API 25)</option>
              <option className="bg-violet-700 text-white">Andriod 8.0 (API 26)</option>
              <option className="bg-violet-700 text-white">Andriod 8.1 (API 27)</option>
              <option className="bg-violet-700 text-white">Andriod 9.0 (API 28)</option>
              <option className="bg-violet-700 text-white">Andriod 10.0 (API 29)</option>
            </select>
            <input 
              type="text"
              placeholder="Enter Package Name"
              className="w-11/12 h-10 border rounded border-violet-400 bg-transparent text-white mt-1 pl-2 text-sm outline-none"
              onClick={handleProjectConfigurationClick}
            />
            <input 
              type="color"
              className = "w-11/12 h-10 border rounded border-violet-400 bg-transparent text-white mt-1 pl-2 text-sm outline-none"
              onClick={handleProjectConfigurationClick}
            />
            <input 
              type="color"
              className="w-11/12 h-10 border rounded border-violet-400 bg-transparent text-white mt-1 pl-2 text-sm outline-none"
              onClick={handleProjectConfigurationClick}
            />
            <input 
              type="color"
              className="w-11/12 h-10 border rounded border-violet-400 bg-transparent text-white mt-1 pl-2 text-sm outline-none"
              onClick={handleProjectConfigurationClick}
            />
          </div>
        </div>
        <div className="w-full h-10 flex flex-wrap place-content-between top-3 relative">
          <div>
            <button
              className="w-20 border h-8 rounded border-violet-400 flex flex-wrap items-center justify-center mr-3"
            >
              Back
            </button>
          </div>
          <div className="w-fit flex flex-wrap gap-1">
            <button
              className="w-20 border h-8 rounded border-violet-400 flex flex-wrap items-center justify-center mr-3"
            >
              Close
            </button>
            <button
              className="w-20 border h-8 rounded border-violet-400 flex flex-wrap items-center justify-center mr-3"
              onClick={handleFinishButtonClick}
            >
              Finish
            </button>
          </div>
        </div>
       </div>
    </div>
  )
}
function Popup({setShowPopup}) {
  const [showProjectConfiguration , setShowProjectConfiguration] = useState(true); //isko false kar dena yaad se
  const [inputEmpty , setInputEmpty] = useState(false);
  const [enteredValue  , setEnteredValue] = useState('');

  const handleCreateNextClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setShowProjectConfiguration(!showProjectConfiguration);
  }
  const handleInputClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
  }
  const handleCloseButtonClick = () => {
    setShowPopup(false);
  }
  const handleInputValueEntered = (e: { target: { value: string; }; }) => {
    if(e.target.value === '') {
      setInputEmpty(true);
    } else {
      setInputEmpty(false); 
    }
  }

  return (
      <div className="absolute w-full h-full flex flex-wrap items-center justify-center top-[-10rem] left-0 z-30">
        <div className="w-[35rem] h-fit bg-slate-700 flex flex-wrap p-3 rounded-lg justify-center mb-4">
          <img 
            src="/newProject.svg"
            alt="New Project"
            width={290}
            height={290}
            className="mt-2" 
          />
          <span className="text-white mt-2 text-sm font-light w-full flex flex-wrap justify-center">
            Give your project a new name
          </span>
          <input 
            type="text"
            placeholder="enter project name"
            className="ProjectName w-11/12 mt-5 h-9 rounded bg-transparent border border-violet-400 text-sm text-white pl-3 outline-none"
            onClick={handleInputClick} 
            onChange={handleInputValueEntered}
          />
        <div className="w-full h-9 bg-transparent mt-4 flex flex-wrap place-content-end">
          <button
            className="w-20 border h-8 rounded border-violet-400 flex flex-wrap items-center justify-center mr-3"
            onClick = {handleCloseButtonClick}
          >
            Close
          </button>
          <div
            style={{
              opacity: inputEmpty ? 0.5 : 1,
              cursor: inputEmpty ? 'not-allowed' : 'pointer'  
            }}
            className="w-20 border h-8 rounded border-violet-400 flex flex-wrap items-center justify-center mr-3"
            onClick={handleCreateNextClick}
            aria-disabled = {inputEmpty}
            role="button"
            >
            Create 
            {showProjectConfiguration &&(
              <ProjectConfiguration 
                
              />
            )}
          </div>
        </div>
        </div>
      </div>
    );
}
export default function page() {
    const [showPricing , setShowPricing] = useState(false);
    const [selectedSort, setSelectedSort] = useState('date');
    const [showPopup, setShowPopup] = useState(false);

    const handleCreateProjectClick = () => {
      setShowPopup(!showPopup)
    }
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
                                    <div 
                                      className="border text-white text-sm w-36 rounded h-8 border-violet-400 flex flex-wrap items-center justify-center" 
                                      onClick={handleCreateProjectClick}
                                      role="button"
                                    >
                                        Create Project
                                        {showPopup && (
                                          <Popup 
                                            setShowPopup = {setShowPopup}
                                          />
                                        )}
                                    </div>
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
                                <div className="w-full h-[21.68rem] bg-slate-900 border border-violet-400 border-t-1 border-l-0 border-r-0 border-b-0 ProjectDisplay flex flex-wrap flex-row gap-2 pt-4 pl-4">
                                      
                                </div>
                            </div>

                </div>
            </div>
        </main>
    )
}