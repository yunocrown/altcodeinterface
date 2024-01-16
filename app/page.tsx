'use client'
import { cp } from "fs";
import Link from "next/link";
import React , { useState } from "react";

export default function Home() {
  const [showProject, setShowProject] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showAssetsUpload , setShowAssetsUplaod] = useState(false);
  const [selectedOption , setSelectedOption] = useState('');
  const [inputValue , setInputValue] = useState('');
  const [option , setOptions] = useState(["Screen 1"]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [components, setComponents] = useState(['Button', 'Checkbox', 'Circular Progress' , 'Custom Progress' , 'Date Picker' , 'Floating Action Button' , 'Image' , 'Label' , 'Linear Progressbar' , 'List Picker' , 'Notifier' , 'Radio Button' , 'Rating Bar' , 'Slider' , 'Snackbar' , 'Spinner' , 'Spotlight' , 'State Progress Bar' , 'Switch' , 'Text Box' , 'Time Picker']);
  const [item , setItem ] = useState(['user Interface' , 'Layout' , 'Media' , 'Drawing and Animation' , 'Maps' , 'Sensors' , 'Social' , 'Storage' , 'Utilities' , 'Dynamic Components' , 'Connectivity' , 'Google' , 'Monetization' , 'Extensions']);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm , setSearchTerm] = useState('');
  const [selectedScreen , setSelectedScreen] = useState('Samsung Galaxy S9');
  const [selectVisibility , setSelectVisibility]  = useState('All Components');

  const handleSelectVisibility = (e:{ target: { value: React.SetStateAction<string>; }; }) => {
    setSelectVisibility(e.target.value);
  }
  const handleSelectScreenChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedScreen(e.target.value);
  };
  const filteredComponents = components.filter((component) =>
    component.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(searchTerm)
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData("text/plain", index);
  };
  const handleSearchIconClick = () => {
    setIsSearchActive(true);
  };
  const handleCloseSearchButton = () => {
    setIsSearchActive(false);
  }
const handleFileChange = (event: { target: { files: any[]; }; }) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageSrc = e.target.result;
      const imageName = file.name;
      localStorage.setItem(imageName , imageSrc );
      const newImageDiv = document.createElement('div');
      newImageDiv.className = 'w-full h-12 border flex flex-wrap uploaded-image items-center gap-2 rounded border-black cursor-pointer';
      newImageDiv.innerHTML = `
        <img src="${imageSrc}" alt="${imageName}" class="w-12 h-12 object-contain"/>
        <p class="text-center text-white text-sm truncate w-56">${imageName}</p>
      `;
      const assetsContent = document.querySelector('.assetsContent');
      assetsContent.appendChild(newImageDiv);
      setUploadedImage(file);
    };
    reader.readAsDataURL(file);
  }
};
const handleAssetClick = (imageName: string) => {
  const imageSrc = localStorage.getItem(imageName);
  if (imageSrc) {
    const previewDiv = document.querySelector('.Preview');
    if (previewDiv) {
      previewDiv.innerHTML = `<img src="${imageSrc}" alt="${imageName}" class="w-full h-full object-contain" />`;
    } else {
      console.error('Preview div not found');
    }
  }
};


  const handleRemoveScreenClick = () => {
    const removeScreen = prompt("Please enter the screen name to be remove");
    if (removeScreen) {
      if (removeScreen === "Screen 1") {
        window.alert("Can't remove Screen 1, enter another name");
      } else {
        setOptions(option.filter(option => option !== removeScreen));
        setSelectedOption('');
      }
    }else {
      window.alert("Screen name is required. Please try again.")
    }
  }
  const handleCopyScreenClick = () => {
    const copyScreen = prompt(`Copying the content of ${selectedOption} as`);
    if (copyScreen) {
      setOptions([...option, copyScreen]);
    } else {
      window.alert("Screen name is required. Please try again.")
    }
  }
  const handleAddScreenClick = () => {
    const screenName = prompt("Please enter the screen name:");
    if (screenName) {
      if (screenName === "Screen 1") {
        window.alert("Please enter another name. 'Screen 1' is not allowed.");
      } else {
        setOptions([...option, screenName]);
      }
    } else {
      window.alert("Screen name is required. Please try again.");
    }
  };
  const handleSelectChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(event?.target.value);
  }
  const handleAssetsUpload = () => {
    setShowAssetsUplaod(!showAssetsUpload);
  }
  const handleAssetsCloseButton = () => {
    setShowAssetsUplaod(false);
  }
  const handleProjectClick = () => {
    setShowProject(!showProject);
    setShowTest(false);
    setShowExport(false);
    setShowHelp(false);
  };
  const handleTestClick = () => {
    setShowTest(!showTest);
    setShowProject(false);
    setShowExport(false);
    setShowHelp(false);
  }
  const handleExportClick = () => {
    setShowExport(!showExport);
    setShowTest(false);
    setShowProject(false);
    setShowHelp(false);
  }
  const handleHelpClick = () => {
    setShowHelp(!showHelp);
    setShowTest(false);
    setShowProject(false);
    setShowExport(false)
  }
  const handlePricingClick = () => {
    setShowPricing(!showPricing);
  }
  const handleMaybeLater = () => {
    setShowPricing(!showPricing);
  }
  
  return (
    <div className='w-full h-full bg-transparent'>
      {/* First navBar */}
      <div className="w-full h-14 bg-slate-900 items-center flex  place-content-between text-white gap-8">
        {/*Logo Section*/}
        <div className="flex p-1 content-center gap-2 w-60">
          <img
            src={"/altcode-high-resolution-logo-color-on-transparent-background.png"}
            alt="logoImage"
            width={40}
            height={50}
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

        {/* navlinks */}
        <div className="grid grid-cols-4 gap-6 place-content-between content-center text-center items-center w-[27rem">
            <div>
              <div className="p-1 h-fit hover:bg-gray-700 rounded-sm font-[system-ui] font-bold text-sm cursor-pointer" onClick={handleProjectClick}>Project</div>
              {showProject && 
                <div className="absolute w-[26rem] bg-gray-700 h-fit p-1 flex flex-wrap rounded m-1 z-10">
                  <button className="font-[system-ui] border w-96 border-b-1 border-t-0 border-l-0 border-r-0 flex m-1 hover:text-black">My project</button>
                  <button className="font-[system-ui] w-96 flex m-1 hover:text-black">New project</button>
                  <button className="font-[system-ui] w-96 flex m-1 hover:text-black">Save project</button>
                  <button className="font-[system-ui] w-96 flex m-1 hover:text-black">Save project as</button>
                  <button className="font-[system-ui] border w-96 border-b-1 border-t-0 border-l-0 border-r-0 flex m-1 hover:text-black">Delete project</button>
                  <button className="font-[system-ui] w-96 flex m-1 hover:text-black">import project (.aia) from my computer</button>
                  <button className="font-[system-ui] w-96 flex m-1 hover:text-black">import screen (.ais) from my computer</button>
                  <button className="font-[system-ui] w-fit flex m-1 hover:text-black">Export selected project (.aia) from my computer</button>
                </div>}
            </div>
            <div>
              <div className="p-1 h-fit hover:bg-gray-700 rounded-sm font-[system-ui] font-bold text-sm cursor-pointer " onClick={handleTestClick}>Test</div>
              {showTest && 
                <div className="absolute w-64 bg-gray-700 h-fit p-1 flex flex-wrap rounded m-1 z-10">
                  <button className="font-[system-ui] flex w-60 m-1 hover:text-black">Connect to Companion</button>
                  <button className="font-[system-ui] border border-b-1 border-t-0 border-l-0 border-r-0 w-96 flex m-1 hover:text-black">Connect via USB</button>
                  <button className="font-[system-ui] w-60 flex m-1 hover:text-black">Reset Connection</button>
                  <button className="font-[system-ui] w-fit flex m-1 hover:text-black">Refresh Companion Screen</button>
                </div>}
            </div>
            <div>
              <div className="p-1 h-fit hover:bg-gray-700 rounded-sm font-[system-ui] font-bold text-sm cursor-pointer" onClick={handleExportClick}>Export</div>
              {showExport && 
                <div className="absolute w-60 bg-gray-700 h-fit p-1 flex flex-wrap rounded m-1 z-10">
                  <button className="font-[system-ui] flex w-60 m-1 hover:text-black">Android App (.apk)</button>
                  <button className="font-[system-ui] w-60 flex m-1 hover:text-black">Android App Bundle (.aab)</button>
                </div>}
            </div>
            <div>
              <div className="p-1 h-fit hover:bg-gray-700 rounded-sm font-[system-ui] font-bold text-sm cursor-pointer" onClick={handleHelpClick}>Help</div>
              {showHelp && 
                <div className="absolute w-60 bg-gray-700 h-fit p-1 flex flex-wrap rounded m-1 z-10">
                  <button className="font-[system-ui] border border-b-1 border-t-0 border-l-0 border-r-0 w-96 flex m-1 hover:text-black">About Altcode</button>
                  <button className="font-[system-ui] flex w-60 m-1 hover:text-black">Report an issue</button>
                  <button className="font-[system-ui] w-60 flex m-1 hover:text-black">Release notes</button>
                </div>}
            </div>
          </div>
          
          {/* quickLinks */}
          <div className="flex items-center content-center text-center gap-6">
            <div className="font-[system-ui] font-bold text-xs rounded-lg hover:cursor-pointer border p-2 border-violet-400 w-12 h-8 flex flex-wrap items-center justify-center" onClick={handlePricingClick}>
              <span>free</span>
              {showPricing &&
                <div className="absolute w-full h-full flex flex-wrap items-center justify-center top-0 left-0 ">
                  <div className="w-[35rem] h-fit bg-slate-700 flex flex-wrap p-3 rounded-lg ">
                    <span className="text-white font-[system-ui] text-lg font-bold w-full flex text-left">Get more from Altcode. Upgarde to premimum today.</span>
                    <span className="text-white font-[system-ui] text-lg font-light w-full flex">With premimum, you can</span>
                    <div className="w-full h-full bg-black p-2 rounded-lg  text-white font-[system-ui] text-base font-light flex flex-wrap">
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

      {/*Second NavBar */}
      <div className="border-t-current border border-l-0 border-r-0 border-b-1 flex w-full h-12 bg-slate-900 text-violet-400 flex-wrap items-center gap-9 place-content-between">
          {/* Project Name */}
          <div className="w-64 flex ml-3 content-center gap-1">
            <input 
              type="text"
              className="bg-transparent text-white font-[system-ui] border p-1 rounded-md w-full"
              placeholder="Altcode"
            />
          </div>

          {/* Screen Addition and deletion */}
          <div className="flex w-fit h-9 place-content-between gap-4">
            <div className="w-32 bg-transparent">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="flex flex-wrap w-full h-full bg-transparent border border-white rounded"
              >
                {option.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button className="w-32 border bg-transparent border-white rounded" onClick={handleAddScreenClick}>
                Add Screen
            </button>
            <button className="w-32 border bg-transparent border-white rounded" onClick={handleCopyScreenClick}>
              Copy Screen
            </button>
            <button className="w-32 border bg-transparent border-white rounded" onClick={handleRemoveScreenClick}>
              Remove Screen
            </button>
          </div>

            {/* Other links */}
            <div className="flex w-fit h-full flex-wrap items-center place-content-evenly gap-4 p-3">
              <div className="w-fit h-fit mr-2 ml-2 flex flex-wrap place-content-between gap-7 items-center justify-center">
              <div className="w-fit h-fit">
                  <img 
                    src="/group1.svg"
                    alt="ImageAdd"
                    onClick={handleAssetsUpload}
                    className="cursor-pointer"
                  />
                  {showAssetsUpload &&
                    <div className="absolute top-0 left-0 w-full h-full flex flex-wrap items-center justify-center z-30">
                      <div className="w-[38rem] h-[28rem] bg-slate-600">
                        <div className="w-full h-9 flex flex-row place-content-between p-2">
                          <p className="w-fit h-full font-[system-ui] text-white font-semibold">
                            Assets Upload
                          </p>
                          <img 
                            src="/close.svg"
                            alt="close"
                            onClick={handleAssetsCloseButton}
                            className="cursor-pointer"
                          />
                        </div>
                        <div className="w-full h-full flex flex-wrap">
                          <div className="w-80 h-full p-2 flex flex-col">
                            <div className="w-full h-40 bg-black p-2 rounded">
                              <p className="text-white font-[system-ui] text-sm">You are currently on the free plan. Upgrade to Premimum to compile apps with more than 5MB in assets. You are currently using 0MB in this project. </p>
                              <p>
                                <Link href="#" className="w-full font-[system-ui] underline top-8 relative ">
                                  Upgrade to premimum
                                </Link>
                              </p>
                            </div>
                            <div className="w-full h-60 assetsContent pt-3" onClick={handleAssetClick}>
                              
                            </div>
                          </div>
                          <div className="w-72 h-96 p-2 flex flex-col">
                            <div className="w-full h-64 bg-transparent border-2 border-dotted flex flex-wrap Preview">
                              <img src="" alt="previewImage" className="w-full h-full object-cover"/>
                            </div>
                            <div className="w-full h-11 flex relative top-5 rounded-sm">
                              <label htmlFor="imageInput" className="custom-file-upload font-[system-ui] rounded bg-black w-full h-full text-white flex flex-wrap items-center justify-center relative top-8">
                                <input
                                  id="imageInput"
                                  type="file"
                                  accept="image/*"
                                  style={{ display: 'none' }}
                                  onChange= {handleFileChange}
                                />
                                Upload Image
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
              </div>
              <img 
                src="/group.svg"
                alt="settings"
                className="w-fit h-fit "
              />
              </div>
              <button className="w-fit h-6 rounded-t-md p-1 pb-7 bg-white ">
                Designer
              </button>
              <Link href="/components" className="w-fit h-6 rounded-t-md p-1 pb-7 hover:bg-gray-600">
                Blocks 
              </Link>
          </div>
      </div>

      {/* Third NavBar */}
      <div className="w-full h-full flex flex-wrap bg-transparent border broder-b-0 border-l-0 border-r-0 border-t-current">
        {/* Components and Items */}
        <div className="w-80 h-full flex flex-wrap">
                  <div className="w-full h-10 bg-slate-900 flex flex-wrap items-center gap-3">
                    <p className="w-fit h-fit ml-3 text-white relative">
                      Palette
                    </p>
                    {isSearchActive ? (
                        <div className="w-56 flex flex-wrap place-content-end">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="border outline-none bg-transparent rounded text-white w-48"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <img 
                            src="/closeWhite.png"
                            alt="close Image"
                            className="cursor-pointer"
                            onClick={handleCloseSearchButton}
                          />
                        </div>
                      ) : (
                        <div className="w-56 flex flex-wrap place-content-end">
                          <img
                            src="/search.svg"
                            alt="search icon"
                            className="w-fit h-fit cursor-pointer relative"
                            onClick={handleSearchIconClick}
                        />
                        </div>
                      )}
                  </div>
                  <div className="w-full h-[46rem] text-white flex flex-wrap border border-t-current border-l-0 border-r-0 border-b-0 bg-slate-900">
                  <div className="w-14 h-full border border-t-0 border-l-0">
                      {item.map((item, index) => (
                        <div key={index} className="w-full h-10 bg-white rounded-r-full mt-2 flex">
                          {item === "user Interface" && (
                              <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                                <img src="/devices.svg" alt="userInterface" className="w-5 h-5 relative" />
                              </div>
                          )}
                          {item === "Layout" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/space_dashboard.svg" alt="Layout" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Media" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/play_circle.svg" alt="Media" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Drawing and Animation" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/palette.svg" alt="Drawing and Animation" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Maps" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/explore_nearby.svg" alt="Maps" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Sensors" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/explore.svg" alt="Sensors" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Social" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/emoji_people.svg" alt="Social" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Storage" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/cloud_done.svg" alt="Storage" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Utilities" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/cases.svg" alt="Utilities" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Dynamic Components" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/code.svg" alt="Dynamic Components" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Connectivity" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/stream.svg" alt="Connectivity" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Google" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/Vector.svg" alt="Google" className="w-5 h-5 relative" />
                            </div>
                          )}
                          {item === "Monetization" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/monetization_on.svg" alt="Monetization" className="w-5 h-5 relative" />
                            </div>
                          )} 
                          {item === "Extensions" && (
                            <div className="w-full p-1 cursor-pointer flex flex-wrap items-center gap-2 justify-center">
                              <img src="/extension.svg" alt="Extensions" className="w-5 h-5 relative" />
                            </div>
                          )}
                          <span className="hidden">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="w-[16.5rem] h-full overflow-y-scroll border border-l-0 border-t-0">
                    {filteredComponents.map((component, index) => (
                      <div
                        key={index}
                        className="w-26 h-11 mt-2 flex border m-1 flex-wrap items-center pl-3 cursor-pointer"
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                      >
                        {component}
                      </div>
                    ))}
                    </div>
                  </div>
        </div>

        {/* Screen Display */}
        <div className="w-[34rem] h-full border border-t-0 border-l-1 border-b-0 border-r-1 bg-slate-900">
            <div className="w-full h-10 grid grid-cols-3 gap-4 items-center">
                    <p className="w-fit pl-3 text-white">
                      Viewer
                    </p>

                    {/* Different Screens */}
                    <div className="w-72 h-8 bg-gray-400 flex flex-wrap items-center rounded">
                      <img 
                        src="/devices.svg"
                        alt="devices"
                        className="pl-3"
                      />
                      <select
                        value={selectedScreen}
                        onChange={handleSelectScreenChange}
                        className="w-56 h-6 bg-transparent pl-2 outline-0"
                      >
                        <option value="">Samsung Galaxy S9</option>
                        <option value="option1">LG Nexus 5X1</option>
                        <option value="option2">Google Pixel 3</option>
                        <option value="option3">Samsung Galaxy Note 5</option>
                        <option value="option4">HTC Nexus 9</option>
                        <option value="option5">Microsoft Surface 3</option>
                      </select>
                    </div>
            </div>
            <div className="w-full h-[46rem] overflow-y-scroll border border-t-1 border-l-0 border-r-0 flex flex-wrap items-center justify-center pt-7 p-3">
                      <div className="w-[29.4rem] h-48 flex bg-white relative z-20 top-[8.8rem] left-0 rounded-t-lg">
                        
                      </div>
                      <div className="w-full z-0 relative">
                        <img 
                          src="/samsungS9.png"
                          alt="samsungS9"
                          className="w-full z-0 top-[-7rem] relative"
                        />
                      </div>
            </div>
        </div>
        {/* Components display */}
        <div className="w-[21rem] h-full bg-slate-900 flex flex-wrap">
                      <div className="w-full h-10 border border-l-0 border-b-1 border-t-0 flex flex-wrap items-center gap-4">
                      <div className="w-52 h-8 bg-gray-400 rounded ml-3 flex flex-wrap items-center justify-center">
                        <select
                            value={selectVisibility}
                            onChange={handleSelectVisibility}
                            className="w-52 h-6 bg-transparent text-black outline-0"
                          >
                            <option value="">All Components</option>
                            <option value="option1">Visibile Components</option>
                            <option value="option1">Non-Visible Components</option>
                          </select>
                      </div>
                      <div className="w-24 h-6 flex flex-wrap bg-lime-500 place-content-end gap-3">
                        <span className="w-fit h-fit relative">hello</span>
                        <span className="w-fit h-fit relative">hiya</span>
                      </div>
                      </div>
        </div>
      </div>
    </div>
  )
}
