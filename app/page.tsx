'use client'

{/* Imports */}
import Link from "next/link";
import React , { useState , useEffect , useRef, SetStateAction } from "react";

{/* Device list */}
const devices = {
  'Samsung Galaxy S9' : {
    image : '/samsungS9.png',
    width: 380,
    height: 640
  },
  'Pixel 7 Pro' : {
    image : '/pixel7pro.png',
    width: 360,
    heigth: 640
  }
}
function Devices({selected , devices }) {
  return(
    <DeviceModel
      selected = {selected}
      devices = {devices}
    >
    </DeviceModel>
  )
}
function DeviceModel({selected , devices}) {
  const device = devices[selected];
  return (
    <div>
      <img 
        src={device.image}
        width={device.width}
        height={device.height}
      />
      <DropTargetForDevice selected={selected} />
    </div>
  )
}
function DropTargetForDevice({selected}) {
  if (selected === 'Samsung Galaxy S9') {
    return <S9DropTarget />
  }
  if (selected === 'Pixel 7 Pro') {
    return <Pixel7ProDropTarget />
  }
  if (selected === 'LG Nexus 5X1' ) {
    return <LGNexus5X1DropTarget />
  }
  if (selected === 'Samsung Galaxy Note 5') {
    return <SamsungGalaxy5DropTarget />
  }
  if (selected === 'HTC Nexus 9') {
    return <HTCNexusDropTarget />
  }
  if (selected === 'Microsoft Surface 3') {
    return <MicrosoftSurfaceDropTarget />
  }
}

{/* DropTarget Mentioned Here */}
function MicrosoftSurfaceDropTarget() {
  return( 
    <div className="w-[22.5rem] h-[47rem] bg-pink-600 items-center justify-center flex flex-wrap">
      Sixth
    </div>
  )
}
function HTCNexusDropTarget() {
  return( 
    <div className="w-[22.5rem] h-[47rem] bg-slate-600 text-white items-center justify-center flex flex-wrap">
      Fifth
    </div>
  )
}
function SamsungGalaxy5DropTarget() {
  return( 
    <div className="w-[22.5rem] h-[47rem] bg-lime-600 items-center justify-center flex flex-wrap">
      Mine 
    </div>
  )
}
function LGNexus5X1DropTarget() {
  return( 
    <div className="w-[22.5rem] h-[47rem] bg-green-600 items-center justify-center flex flex-wrap">
      Hiya
    </div>
  )
}
function Pixel7ProDropTarget() {
  return( 
    <div className="w-[21.5rem] h-[12rem] items-center justify-center flex flex-wrap relative top-[-48.3rem] left-[0.6rem]">
          {/* Top NavBar */}
      <div className="w-full h-5 bg-blue-500 rounded-t-[7rem] flex relative top-0 flex-wrap items-center text-sm text-white place-content-end gap-1">
        <img
          src="/network_wifi.svg"
          alt="wifi"
          className="w-3 h-3"
        />
        <img 
          src="/battery_6_bar.svg"
          alt="battery"
          className="w-4 h-3"
        />
        <span className="font-normal text-[0.5rem] pr-4">12:00</span>
      </div> 
      {/* Drop Target */}
      <div 
        className="w-full h-[44rem] DropTarget bg-white"
      >
      </div>
      {/* Bottom Navigation */}
      <div className="w-full h-7 bg-blue-500 rounded-b-[1rem] flex flex-wrap justify-center">
        <div className ="w-48 h-full flex flex-wrap gap-20 justify-center" >
          <img 
            src="/arrow_back_ios.svg"
            alt="Back_Arrow"
            className="w-2"
          />
          <img 
            src="/radio_button_unchecked.svg"
            alt="home"
            className="w-3"
          />
          <img 
            src="/drag_handle.svg"
            alt="tasks"
            className="w-3"
          />
        </div>
      </div>
    </div>
  )
}
function S9DropTarget() {
  const handleComponentDrop = (event: { preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; }) => {
    event.preventDefault();
    const componentType = event.dataTransfer.getData("text/plain");
    const dropTarget = document.querySelector(".DropTarget");
    const AllComponents = document.querySelector(".AllComponents");
    
    if (componentType === "Button") {
      const buttonDroppedDiv = document.createElement("div");
      const elementDropped = document.createElement('div');
      elementDropped.className = "w-60 text-sm text-white border border-violet-500 h-11 border border-violet-400 text-white flex flex-wrap items-center pl-4 mt-3 ml-3 rounded"
      elementDropped.innerHTML = `
        value = "button"
      `
      elementDropped.textContent = "Button"
      buttonDroppedDiv.className = "w-fit h-fit text-sm border bg-violet-500 text-white"
      buttonDroppedDiv.textContent = "Button dropped";
      dropTarget.appendChild(buttonDroppedDiv);
      AllComponents?.appendChild(elementDropped);
    }
  }

  const handleComponentDragOver = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  }
  return(
    <div className="w-[22.5rem] h-[12rem] items-center justify-center flex flex-wrap relative top-[-48.3rem] left-[0.6rem]">
          {/* Top NavBar */}
      <div className="w-full h-5 bg-blue-500 rounded-t-[7rem] flex relative top-0 flex-wrap items-center text-sm text-white place-content-end gap-1">
        <img
          src="/network_wifi.svg"
          alt="wifi"
          className="w-3 h-3"
        />
        <img 
          src="/battery_6_bar.svg"
          alt="battery"
          className="w-4 h-3"
        />
        <span className="font-normal text-[0.5rem] pr-4">12:00</span>
      </div> 
      {/* Drop Target */}
      <div 
        className="w-full h-[43rem] DropTarget bg-white"
        onDrop={handleComponentDrop}
        onDragOver={handleComponentDragOver}
      >
      </div>
      {/* Bottom Navigation */}
      <div className="w-full h-7 bg-blue-500 rounded-b-[7rem] flex flex-wrap justify-center">
        <div className ="w-48 h-full flex flex-wrap gap-20 justify-center" >
          <img 
            src="/arrow_back_ios.svg"
            alt="Back_Arrow"
            className="w-2"
          />
          <img 
            src="/radio_button_unchecked.svg"
            alt="home"
            className="w-3"
          />
          <img 
            src="/drag_handle.svg"
            alt="tasks"
            className="w-3"
          />
        </div>
    </div>
    </div>
  )
}
function PropertiesDisplay({propertyDisplay , selectedColor  , handleBackgroundColor , handleAssetsUpload , handlePreviewButtonClick , handlePreviewButtonCloseClick}) {
  if(propertyDisplay === 'screen') {
    return <ScreenDisplay 
      selectedColor = {selectedColor}
      handleBackgroundColor = {handleBackgroundColor}
      handleAssetsUpload = {handleAssetsUpload}
      handlePreviewButtonClick = {handlePreviewButtonClick}
      handlePreviewButtonCloseClick = {handlePreviewButtonCloseClick}
    />
  }
  if(propertyDisplay === 'component') {
    return <ComponentDisplay />
  }
  if(propertyDisplay === 'button') {
    return <ButtonDisplay />
  }
}
function ButtonDisplay() {
  return (
    <div>
      Mine
    </div>
  )
}
function ScreenDisplay(selectedColor , handleBackgroundColor , handleAssetsUpload , handlePreviewButtonClick) {
  const [selectedAlignment , showSelectedAlignment] = useState('left');

  return (
    <div>
                        <div className="w-full h-full flex flex-wrap justify-center gap-2">
                          <div className="w-60 h-9 relative">
                            <input 
                              type="text"
                              className="bg-transparent border rounded h-9 w-60 text-white text-sm p-1"
                              placeholder="About Screen"
                            />
                          </div>
                          <div className="w-60 h-9 border flex flex-wrap items-center pl-3 relative rounded">
                            <input 
                              type="color"
                              className="rounded-full w-6 border-none outline-none cursor-pointer"
                            />
                            <p className="w-fit pl-2 text-white text-sm">About Screen BGColor</p>
                          </div>
                          <div className="w-60 h-9 flex flex-wrap items-center">
                            <input 
                              type="checkbox"
                              className="bg-transparent border outline-none"
                            />
                            <p className="text-white text-sm pl-2">
                              About Screen Light Theme
                            </p>
                          </div>
                          <div className="w-60 h-9 relative">
                            <input 
                              type="text"
                              className="bg-transparent border rounded h-9 w-60 mt-3 text-white text-sm p-1"
                              placeholder="About Screen title"
                            />
                          </div>
                          <div className="w-60 h-9">
                            <select
                              className="w-full h-full bg-transparent text-white border rounded text-sm pl-2"
                              // onChange={handleHorizontalAlignment}
                            >
                              <option value= "Option1" className="text-black">Left : 1</option>
                              <option value= "Option2" className="text-black">Center : 3</option>
                              <option value= "Option3" className="text-black">Right : 2</option>
                            </select>
                          </div>
                          <div className="w-60 h-9">
                            <select
                              className="w-full h-full bg-transparent text-white border rounded text-sm pl-2"
                            >
                              <option value= "Option1" className="text-black">Top : 1</option>
                              <option value= "Option2" className="text-black">Center : 2</option>
                              <option value= "Option3" className="text-black">Botton : 3</option>
                            </select>
                          </div>
                          <div className="w-60 h-9 border flex flex-wrap items-center pl-3 relative rounded">
                            <input 
                              type="color"
                              className="rounded-full w-6 border-none outline-none cursor-pointer"
                              value={selectedColor}
                              onChange={handleBackgroundColor}
                            />
                            <p className="w-fit pl-2 text-white text-sm">Background Color</p>
                          </div>
                          <div className="w-60 h-9 border flex flex-wrap items-center rounded">
                            <select
                              className="w-40 h-full bg-transparent text-white text-sm pl-2"
                            >
                              <option value="">None</option>
                            </select>
                            <div className="w-[4.6rem] h-full flex flex-wrap items-center justify-center border border-t-0 border-b-0 border-r-0 gap-4">
                              <img 
                                src="/upload.svg"
                                alt="uploadFiles"
                                className="w-5 h-5 hover:bg-violet-800 rounded cursor-pointer"
                                title="uploadFiles"
                                onClick={handleAssetsUpload}
                              />
                              <img 
                                src="/gallery_thumbnail.svg"
                                alt="previewOption"
                                className="w-5 h-5 hover:bg-violet-800 rounded cursor-pointer"
                                onClick={handlePreviewButtonClick}
                              />
                            </div>
                          </div>
                          <div className="w-60 h-9 border flex flex-wrap items-center rounded">
                            <select
                              className="w-full h-full bg-transparent text-white border rounded text-sm pl-2"
                            >
                              <option value= "Default" className="text-white bg-violet-700">Default</option>
                              <option value= "Fade" className="text-white bg-violet-700">Fade</option>
                              <option value= "Zoom" className="text-white bg-violet-700">Zoom</option>
                              <option value= "Slide Horizontal" className="text-white bg-violet-700">Slide Horizontal</option>
                              <option value= "Slide Vertical" className="text-white bg-violet-700">Slide Vertical</option>
                              <option value= "None" className="text-white bg-violet-700">None</option>
                            </select>
                          </div>
                          <div className="w-60 h-9 border flex flex-wrap items-center pl-3 relative rounded">
                            <input 
                              type="color"
                              className="rounded-full w-6 border-none outline-none cursor-pointer"
                            />
                            <p className="w-fit pl-2 text-white text-sm">Navigation Bar Color</p>
                          </div>
                          <div className="w-60 h-9 border flex flex-wrap items-center rounded">
                            <select
                              className="w-full h-full bg-transparent text-white border rounded text-sm pl-2"
                            >
                              <option value= "Default" className="text-white bg-violet-700">Default</option>
                              <option value= "Fade" className="text-white bg-violet-700">Fade</option>
                              <option value= "Zoom" className="text-white bg-violet-700">Zoom</option>
                              <option value= "Slide Horizontal" className="text-white bg-violet-700">Slide Horizontal</option>
                              <option value= "Slide Vertical" className="text-white bg-violet-700">Slide Vertical</option>
                              <option value= "None" className="text-white bg-violet-700">None</option>
                            </select>
                          </div>
                          <div className="w-60 h-9 border flex flex-wrap items-center rounded">
                            <select
                              className="w-full h-full bg-transparent text-white border rounded text-sm pl-2"
                            >
                              <option value= "Unspecified" className="text-white bg-violet-700">Unspecified</option>
                              <option value= "Behind" className="text-white bg-violet-700">Behind</option>
                              <option value= "Full Sensor" className="text-white bg-violet-700">Zoom</option>
                              <option value= "Landscape" className="text-white bg-violet-700">Slide Horizontal</option>
                              <option value= "No Sensor" className="text-white bg-violet-700">Slide Vertical</option>
                              <option value= "Portrait" className="text-white bg-violet-700">None</option>
                              <option value= "Reverse Landscape" className="text-white bg-violet-700">None</option>
                            </select>
                          </div>
                          <div className="w-60 h-9 flex flex-wrap items-center">
                            <input 
                              type="checkbox"
                              className="bg-transparent border outline-none"
                            />
                            <p className="text-white text-sm pl-2">
                              Scrollable
                            </p>
                          </div>
                          <div className="w-60 h-9 flex flex-wrap items-center">
                            <input 
                              type="checkbox"
                              className="bg-transparent border outline-none"
                            />
                            <p className="text-white text-sm pl-2">
                              Show Menu Option
                            </p>
                          </div>
                          <div className="w-60 h-9 flex flex-wrap items-center">
                            <input 
                              type="checkbox"
                              className="bg-transparent border outline-none"
                            />
                            <p className="text-white text-sm pl-2">
                              Show Status Bar
                            </p>
                          </div>
                          <div className="w-60 h-9 flex flex-wrap">
                              <input 
                                type="text"
                                className="bg-transparent border rounded h-9 w-60 mt-3 text-white text-sm p-1"
                                placeholder="Title"
                              />
                          </div>
                          <div className="w-60 h-9 border flex flex-wrap items-center rounded">
                            <select
                              className="w-full h-full bg-transparent text-white border rounded text-sm pl-2"
                            >
                              <option value= "Unspecified" className="text-white bg-violet-700">Default</option>
                              <option value= "Behind" className="text-white bg-violet-700">Sans Serif</option>
                              <option value= "Full Sensor" className="text-white bg-violet-700">Monospace</option>
                              <option value= "Landscape" className="text-white bg-violet-700">Roboto Thin</option>
                              <option value= "No Sensor" className="text-white bg-violet-700">Roboto Regular</option>
                            </select>
                          </div>
                          <div className="w-60 h-9 flex flex-wrap">
                              <input 
                                type="text"
                                className="bg-transparent border rounded h-9 w-60 mt-3 text-white text-sm p-1"
                                placeholder="Title Bar Subtitle"
                              />
                          </div>
                          <div className="w-60 h-9 flex flex-wrap items-center">
                            <input 
                              type="checkbox"
                              className="bg-transparent border outline-none"
                            />
                            <p className="text-white text-sm pl-2">
                              Title Visible
                            </p>
                          </div>
                        </div> 
    </div>
  )
}
function ComponentDisplay() {
  return (
    <div>
      Hiya
    </div>
  )
}
export default function Home() {
  const [showProject, setShowProject] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showAssetsUpload , setShowAssetsUplaod] = useState(false);
  const [option , setOptions] = useState(["Screen 1"]);
  const [selectedOption , setSelectedOption] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [components, setComponents] = useState(['Button', 'Checkbox', 'Circular Progress' , 'Custom Progress' , 'Date Picker' , 'Floating Action Button' , 'Image' , 'Label' , 'Linear Progressbar' , 'List Picker' , 'Notifier' , 'Radio Button' , 'Rating Bar' , 'Slider' , 'Snackbar' , 'Spinner' , 'Spotlight' , 'State Progress Bar' , 'Switch' , 'Text Box' , 'Time Picker']);
  const [item , setItem ] = useState(['user Interface' , 'Layout' , 'Media' , 'Drawing and Animation' , 'Maps' , 'Sensors' , 'Social' , 'Storage' , 'Utilities' , 'Dynamic Components' , 'Connectivity' , 'Google' , 'Monetization' , 'Extensions']);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm , setSearchTerm] = useState('');
  const [selected , setSelectedScreen] = useState('Samsung Galaxy S9');
  const [screens , setScreens] = useState([]);
  const [selectVisibility , setSelectVisibility]  = useState('All Components');
  const [selectedColor, setSelectedColor] = useState('#fff');
  const [droppedComponent, setDroppedComponent] = useState(null);
  const [showPreviewScreen , setShowPreviewScreen] = useState(true);
  const [properties , setProperties] = useState('screen');

  const handlePropertiesClick = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setProperties(e.target.value);
  }
  const handleDragEnd = (index: number | React.SetStateAction<null>) => {
    setDroppedComponent(index);
  }
  const handleBackgroundColor = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedColor(e.target.value);
  }
  useEffect(() => {
    document.body.style.backgroundColor = selectedColor;
  }, [selectedColor]);
  const visibleComponentProperties = useRef();
  const visibleComponentRef = useRef();
  useEffect(() => {
    const visibleComponent = visibleComponentRef.current;
    if(!visibleComponent) return;
    visibleComponent.innerHTML = selectedOption || 'Screen 1';
    return () => {
      visibleComponent.innerHTML = ''; 
    }
  }, [selectedOption]);
  useEffect(() => {
    const visibleComponentproperties = visibleComponentProperties.current;
    if(!visibleComponentproperties) return;
    visibleComponentproperties.innerHTML = selectedOption || 'Screen 1';
    return () => {
      visibleComponentproperties.innerHTML = '';
    }
  }, [selectedOption]);
  const handleSelectVisibility = (e:{ target: { value: React.SetStateAction<string>; }; }) => {
    setSelectVisibility(e.target.value);
  }
  const handleSelectScreenChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedScreen(e.target.value);
  };
  const filteredComponents = components.filter((component) =>
    component.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, componentType: string | number) => {
    e.dataTransfer.setData("text/plain", componentType);
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

  {/*Screen management and storage code part*/}
  const openDatabase = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('MyAppDatabase' , 1);
      request.onerror = () => {
        reject('Error opening Database');
      }
      request.onsuccess = () => {
        resolve(request.result);
      }
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const objectStore = db.createObjectStore('screens' , { keypath:'id' , autoIncrement: true});
        objectStore.createIndex('name' , 'name' , {unique: true });
      }
    })
  }
  const addScreen = (screen) => {
    return new Promise((resolve, reject) => {
        openDatabase().then((db) => {
            const transaction = db.transaction(['screens'], 'readwrite');
            const objectStore = transaction.objectStore('screens');
            const request = objectStore.add(screen);
            request.onsuccess = () => {
                resolve('Screen added successfully');
            };
            request.onerror = () => {
                reject('Error adding screen');
            };
        }).catch((error) => {
            reject(error);
        });
    });
}
const getScreens = () => {
  return new Promise((resolve, reject) => {
      openDatabase().then((db) => {
          const transaction = db.transaction(['screens'], 'readonly');
          const objectStore = transaction.objectStore('screens');
          const request = objectStore.getAll();
          request.onsuccess = () => {
              resolve(request.result);
          };
          request.onerror = () => {
              reject('Error retrieving screens');
          };
      }).catch((error) => {
          reject(error);
      });
  });
};
  const handleRemoveScreenClick = () => {
    const removeScreen = prompt("Please enter the screen name to be remove");
    if (removeScreen) {
      if (removeScreen === "Screen 1") {
        window.alert("Can't remove Screen 1, enter another name");
      } else {
        setOptions(option.filter(option => option !== removeScreen));
        setSelectedOption('');
        removeScreenFromDatabase(removeScreen);
      }
    }else {
      window.alert("Screen name is required. Please try again.")
    }
  }
  const handleCopyScreenClick = () => {
    const copyScreen = prompt(`Copying the content of ${selectedOption} as`);
    if (copyScreen) {
      setOptions([...option, copyScreen]);
      copyScreenToDatabase(copyScreen)
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
        addScreenToDatabase(selectedOption , screenName);
      }
    } else {
      window.alert("Screen name is required. Please try again.");
    }
  };
  const addScreenToDatabase = (selectOption: string , screenName: string) => {
    const newScreen = {
        name: screenName,
    };
    addScreen(newScreen)
        .then(() => {
            fetchScreens();
        })
        .catch((error) => {
            console.error('Error adding screen:', error);
        });
  };
  const removeScreenFromDatabase = (removeScreen: string) => {
    openDatabase().then((db) => {
      const transaction = db.transaction(['screens'], 'readwrite');
      const objectStore = transaction.objectStore('screens');
      const request = objectStore.index('name').get(removeScreen);
      
      request.onsuccess = () => {
          const screen = request.result;
          if (screen) {
              const deleteRequest = objectStore.delete(screen.id);
              deleteRequest.onsuccess = () => {
                  fetchScreens();
              };
              deleteRequest.onerror = () => {
                  console.error('Error removing screen from database');
              };
          } else {
              console.error('Screen not found in the database');
          }
      };

      request.onerror = () => {
          console.error('Error finding screen in the database');
      };
    }).catch((error) => {
        console.error('Error opening database:', error);
    });
  }
  const copyScreenToDatabase = (selectedOption: string , copyScreen: undefined) => {
    openDatabase().then((db) => {
      const transaction = db.transaction(['screens'], 'readwrite');
      const objectStore = transaction.objectStore('screens');
      const request = objectStore.index('name').get(selectedOption);
      request.onsuccess = () => {
          const originalScreen = request.result;
          if (originalScreen) {
              const copiedScreen = { ...originalScreen, name: copyScreen };
              const addRequest = objectStore.add(copiedScreen);
              addRequest.onsuccess = () => {
                  fetchScreens();
              };
              addRequest.onerror = () => {
                  console.error('Error adding copied screen to database');
              };
          } else {
              console.error('Original screen not found in the database');
          }
      };

      request.onerror = () => {
          console.error('Error finding original screen in the database');
      };
  }).catch((error) => {
      console.error('Error opening database:', error);
  });

  }
  const fetchScreens = () => {
    getScreens()
        .then((screens) => {
            setScreens(screens);
        })
        .catch((error) => {
            console.error('Error fetching screens:', error);
        });
  };
  useEffect(() => {
    fetchScreens();
  }, []);

  {/* End of screen creation logic */}

  
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
  const handleHoverOver = () => {
    const item = document.querySelector(".Item");
    const itemText = document.querySelector(".ItemText");
    const component = document.querySelector(".Component");
    const componentText = document.querySelector(".ComponentText");
    const itemTextclasses = "Block"
    const componentTextclasses = "hidden border-none"
    const Itemclasses = "w-[16.5rem] border border-t-0 border-l-0 border-r-1 ease-in-out duration-800"
    const Componentclasses = "w-[3.5rem] h-[46rem] overflow-y-scroll ease-in-out duration-800";
    itemTextclasses.split(' ').forEach(c => {
      itemText?.classList.remove("hidden")
      itemText?.classList.add(c);
    })
    componentTextclasses.split(' ').forEach(c => {
      componentText?.classList.add(c);
    })
    Itemclasses.split(' ').forEach(c => {
      item?.classList.add(c);
    })
    Componentclasses.split(' ').forEach(c => {
      component?.classList.add(c);
    })
  }
  const handleHoverLeave = () => {
    const item = document.querySelector(".Item");
    const itemText = document.querySelector(".ItemText");
    const component = document.querySelector(".Component");
    const componentText = document.querySelector(".ComponentText");
    const itemTextclasses = "Block"
    const componentTextclasses = "hidden border-none"
    const Itemclasses = "w-[16.5rem] border border-t-0 border-l-0 border-r-1"
    const Componentclasses = "w-[3.5rem] h-[46rem]";
    itemTextclasses.split(' ').forEach(c => {
      itemText?.classList.remove(c);
      itemText?.classList.add("hidden")
    })
    componentTextclasses.split(' ').forEach(c => {
      componentText?.classList.remove(c);
    })
    Componentclasses.split(' ').forEach(c => {
      component?.classList.remove(c);
    })
    Itemclasses.split(' ').forEach(c => {
      item?.classList.remove(c);
    })
  }
  const handlePreviewButtonClick = () => {
    setShowPreviewScreen(false);
  }
  const handlePreviewButtonCloseClick = () => {
    setShowPreviewScreen(false);
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
        {/* Logo Section ends here*/}

        {/* navlinks */}
        <div className="grid grid-cols-4 gap-6 place-content-between content-center text-center items-center w-[27rem">
            <div>
              <div className="p-1 h-fit hover:bg-violet-700 rounded-sm font-[system-ui] font-bold text-sm cursor-pointer" onClick={handleProjectClick}>Project</div>
              {showProject && 
                <div className="absolute w-[26rem] bg-violet-700 h-fit p-1 flex flex-wrap rounded m-1 z-10">
                  <Link href="/projects" className="font-[system-ui] border w-96 border-b-1 border-t-0 border-l-0 border-r-0 flex m-1 hover:text-black">My project</Link>
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
              <div className="p-1 h-fit hover:bg-violet-700 rounded-sm font-[system-ui] font-bold text-sm cursor-pointer " onClick={handleTestClick}>Test</div>
              {showTest && 
                <div className="absolute w-64 bg-violet-700 h-fit p-1 flex flex-wrap rounded m-1 z-10">
                  <button className="font-[system-ui] flex w-60 m-1 hover:text-black">Connect to Companion</button>
                  <button className="font-[system-ui] border border-b-1 border-t-0 border-l-0 border-r-0 w-96 flex m-1 hover:text-black">Connect via USB</button>
                  <button className="font-[system-ui] w-60 flex m-1 hover:text-black">Reset Connection</button>
                  <button className="font-[system-ui] w-fit flex m-1 hover:text-black">Refresh Companion Screen</button>
                </div>}
            </div>
            <div>
              <div className="p-1 h-fit hover:bg-violet-700 rounded-sm font-[system-ui] font-bold text-sm cursor-pointer" onClick={handleExportClick}>Export</div>
              {showExport && 
                <div className="absolute w-60 bg-violet-700 h-fit p-1 flex flex-wrap rounded m-1 z-10">
                  <button className="font-[system-ui] flex w-60 m-1 hover:text-black">Android App (.apk)</button>
                  <button className="font-[system-ui] w-60 flex m-1 hover:text-black">Android App Bundle (.aab)</button>
                </div>}
            </div>
            <div>
              <div className="p-1 h-fit hover:bg-violet-700 rounded-sm font-[system-ui] font-bold text-sm cursor-pointer" onClick={handleHelpClick}>Help</div>
              {showHelp && 
                <div className="absolute w-60 bg-violet-700 h-fit p-1 flex flex-wrap rounded m-1 z-10">
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

      {/*Second NavBar */}
      <div className="border-t-1 border border-l-0 border-r-0 border-b-1 flex w-full h-12 bg-slate-900 text-white border-violet-400 flex-wrap items-center gap-9 place-content-between">
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
                className="flex flex-wrap w-full h-full bg-transparent border border-violet-400 rounded text-sm"
              >
                {option.map((option) => (
                  <option key={option} value={option} className="bg-violet-700">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button className="w-32 border bg-transparent border-violet-400 rounded text-sm" onClick={handleAddScreenClick}>
                Add Screen
            </button>
            <button className="w-32 border bg-transparent border-violet-400 rounded text-sm" onClick={handleCopyScreenClick}>
              Copy Screen
            </button>
            <button className="w-32 border bg-transparent border-violet-400 rounded text-sm" onClick={handleRemoveScreenClick}>
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
                            <div className="w-full h-40 bg-violet-700 p-2 rounded">
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
                              <label htmlFor="imageInput" className="custom-file-upload font-[system-ui] rounded bg-violet-700 w-full h-full text-white flex flex-wrap items-center justify-center relative top-8">
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
              <button className="w-fit h-6 rounded-t-md pb-7 bg-violet-500 top-1 flex relative text-sm p-2">
                Designer
              </button>
              <Link href="/components" className="w-fit h-6 rounded-t-md p-2 pb-7 hover:bg-gray-600 relative text-sm top-1">
                Blocks 
              </Link>
          </div>
      </div>

      {/* Third NavBar */}
      <div className="w-full h-full flex flex-wrap bg-transparent border broder-b-0 border-l-0 border-r-0 border-t-1 border-violet-400">
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
                            className="border border-violet-400 outline-none bg-transparent rounded text-white w-48"
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
                  <div className="w-full h-[46rem] text-white flex flex-wrap border border-t-violet-400 border-l-0 border-r-0 border-b-0 bg-slate-900">
                  <div 
                    className="w-14 h-full border border-violet-400 border-t-0 border-l-0 Item"
                    onMouseEnter={handleHoverOver}
                    onMouseLeave={handleHoverLeave}
                  >
                      {item.map((item, index) => (
                        <div 
                          key={index} 
                          className="w-full h-10 bg-violet-500 rounded-r-full mt-2 flex"
                        >
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
                          <span className="hidden ItemText">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="w-[16.5rem] h-full overflow-y-scroll border border-violet-400 border-l-0 border-t-0 Component">
                    {filteredComponents.map((component, index) => (
                      <div
                        key={index}
                        className="w-26 h-11 mt-2 flex border m-1 flex-wrap items-center pl-3 cursor-pointer"
                        draggable
                        onDragStart={(e) => handleDragStart(e, component)}
                        onDragEnd={() => handleDragEnd(index)}
                      >
                        <span className="ComponentText">{component}</span>
                      </div>
                    ))}
                    </div>
                  </div>
        </div>

        {/* Screen Display */}
        <div className="w-[34rem] h-full border border-violet-400 border-t-0 border-l-1 border-b-0 border-r-1 bg-slate-900">
            <div className="w-full h-10 grid grid-cols-3 gap-4 items-center">
                    <p className="w-fit pl-3 text-white">
                      Viewer
                    </p>

                    {/* Different Screens */}
                    <div className="w-72 h-8 bg-violet-500 flex flex-wrap items-center rounded text-sm text-white">
                      <img 
                        src="/devices.svg"
                        alt="devices"
                        className="pl-3"
                      />
                      <select
                        value={selected}
                        onChange={handleSelectScreenChange}
                        className="w-56 h-6 bg-transparent pl-2 outline-0"
                      >
                        <option className="bg-violet-700 relative " value="Samsung Galaxy S9">Samsung Galaxy S9</option>
                        <option className="bg-violet-700 relative " value="LG Nexus 5X1">LG Nexus 5X1</option>
                        <option className="bg-violet-700 relative " value="Pixel 7 Pro">Pixel 7 Pro</option>
                        <option className="bg-violet-700 relative " value="Samsung Galaxy Note 5">Samsung Galaxy Note 5</option>
                        <option className="bg-violet-700 relative " value="HTC Nexus 9">HTC Nexus 9</option>
                        <option className="bg-violet-700 relative " value="Microsoft Surface 3">Microsoft Surface 3</option>
                      </select>
                    </div>
            </div>
            <div className="w-full h-[46rem] overflow-y-scroll border border-violet-400 border-t-1 border-l-0 border-r-0 flex flex-wrap items-center justify-center pt-7 p-3">
                      <Devices 
                        selected={selected}
                        devices={devices}
                      />
            </div>
        </div>

        {/* Components display */}
        <div className="w-[21rem] h-full bg-slate-900 flex flex-wrap">
          <div className="w-full h-10 border border-violet-400 border-l-0 border-b-1 border-t-0 flex flex-wrap items-center gap-4">
            <div className="w-52 h-8 bg-violet-500 text-white rounded ml-3 flex flex-wrap items-center justify-center text-sm">
              <select
                  value={selectVisibility}
                  onChange={handleSelectVisibility}
                  className="w-52 h-6 bg-transparent outline-0"
                >
                  <option className="bg-violet-700" value="">All Components</option>
                  <option className="bg-violet-700" value="option1">Visibile Components</option>
                  <option className="bg-violet-700" value="option2">Non-Visible Components</option>
                </select>
            </div>
            <div className="w-24 h-6 flex flex-wrap items-center gap-6 ">
              <img 
                src="/border_color.svg"
                alt="rename"
                title="rename"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <img 
                src="/delete.svg"
                alt="delete"
                title="delete"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full h-[46rem] bg-slate-900 flex flex-wrap border-violet-400 border-l-0 border-t-0 border-r-0">
            <button ref={visibleComponentRef} className="w-72 h-11 border border-violet-400 text-white flex flex-wrap AllComponents items-center pl-4 mt-3 ml-3 rounded" id="Screen" value="screen" onClick={handlePropertiesClick} ></button>
          </div>
        </div>

        {/* Screen Properties */}
        <div className="w-[19.95rem] h-full bg-slate-900 flex flex-wrap">
          <div className="w-full h-10 border border-violet-400 border-t-0 border-l-0 border-r-0 border-b-1 flex flex-wrap items-center">
            <p className="w-[18rem] flex flex-wrap text-white">
              <span ref={visibleComponentProperties} className="w-fit ml-3 text-white mr-2"></span> 
            Properties
            </p>
          </div>
          <div className="w-full h-[46rem] border border-violet-400 border-t-0 border-l-1 border-r-0 overflow-y-scroll">
            <div className="w-full h-10 flex flex-wrap mb-3  items-center border border-t-0 border-l-0 border-r-0 border-violet-400">
              <span className="text-white ml-3 text-sm">
                Common Properties
              </span>
            </div>
            <PropertiesDisplay 
              propertyDisplay = {properties}
              selectedColor = {selectedColor}
              handleBackgroundColor = {handleBackgroundColor}
              handleAssetsUpload = {handleAssetsUpload}
              handlePreviewButtonClick = {handlePreviewButtonClick}
              handlePreviewButtonCloseClick = {handlePreviewButtonCloseClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
