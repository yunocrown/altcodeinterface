'use client'

import { SetStateAction, useState , useEffect, useRef } from "react";
import Dexie from "dexie";

export default function page() {
    const [ draggable , setDraggable ] = useState(['button' , 'checkbox' , 'circular progress' , 'mine'])
    const [ option , setOption ] = useState(['Screen 1']);
    const [ selectedOption , setSelectedOption ] = useState('Screen 1');

    const db = new Dexie('Screen Components');
    db.version(1).stores({
        screenData: '++id, screenName, components'
    });
    const visibleScreen = useRef();
    useEffect(() => {
        const displayScreen = visibleScreen.current;
        if( !displayScreen ) return;
        displayScreen.innerHTML = selectedOption || 'Screen 1';
        return() => {
            visibleScreen.innerHTML = '';
        } 
    }, [selectedOption])

    const handleComponentDrop = (event: { preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; }) => {
        event.preventDefault();
        const component = event.dataTransfer.getData("text/plain");   

        const selectedScreen = selectedOption;
        const DropTarget = document.querySelector(".DropTarget");
        const AllComponent = document.querySelector(".AllComponent");

        if( component === "button" ) {
            const buttonDrop = document.createElement("div");
            buttonDrop.className = "w-full h-6 border m-1 text-sm flex flex-wrap items-center justify-center"
            buttonDrop.textContent = "button"
            DropTarget?.appendChild(buttonDrop);
            
            const buttonDisplay = document.createElement("div");
            buttonDisplay.className = "w-full h-6 border m-1 text-sm flex flex-wrap items-center justify-center text-black"
            buttonDisplay.textContent = "button"
            AllComponent?.appendChild(buttonDisplay);

        } else if( component === "checkbox") {
            const checkbox = document.createElement("div");
            checkbox.className = "w-full h-6 border m-1 text-sm flex flex-wrap items-center justify-center"
            checkbox.textContent = "checkBox"
            DropTarget?.appendChild(checkbox);

            const CheckBoxDisplay = document.createElement("div");
            CheckBoxDisplay.className = "w-full h-6 border m-1 text-sm flex flex-wrap items-center justify-center text-black"
            CheckBoxDisplay.textContent = "checkBox"
            AllComponent?.appendChild(CheckBoxDisplay);
            
        } else if( component === "circular progress") {
            const circularProgress = document.createElement("div");
            circularProgress.className = "w-full h-6 border m-1 text-sm flex flex-wrap items-center justify-center"
            circularProgress.textContent = "circular progress"
            DropTarget?.appendChild(circularProgress);

            const CircularProgressDisplay = document.createElement("div");
            CircularProgressDisplay.className = "w-full h-6 border m-1 text-sm flex flex-wrap items-center justify-center text-black"
            CircularProgressDisplay.textContent = "circularProgress"
            AllComponent?.appendChild(CircularProgressDisplay);
            
        } else if( component === "mine") {
            const mine = document.createElement("div");
            mine.className = "w-full h-6 border m-1 text-sm flex flex-wrap items-center justify-center"
            mine.textContent = "mine"
            DropTarget?.appendChild(mine);

            const MineDisplay = document.createElement("div");
            MineDisplay.className = "w-full h-6 border m-1 text-sm flex flex-wrap items-center justify-center text-black"
            MineDisplay.textContent = "Mine"
            AllComponent?.appendChild(MineDisplay);
            
        }

        db.transaction('rw' , 'screenData' , () => {
            db.screenData.put({ screenName: selectedScreen, components: component})
        })
    }   
    const handleComponentDragOver = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    }
    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value);
        const AllComponent = document.querySelector(".AllComponent");
        const selectedScreen = event.target.value;
        const dropTarget = document.querySelectorAll(".DropTarget");

        dropTarget.innerHTML = "";

        db.screenData.where('screenName').equals(selectedOption).toArray()
        .then((results) => {
            const storedComponents = results.map(result => result.components);
            console.log(storedComponents)
            AllComponent.innerHTML = "";
            storedComponents.forEach((component) => {
                const componentElement = createComponentElement(component);
               dropTarget.appendChild(componentElement)
            })
        })
        .catch((error) => {
            console.error("Error fetching data from IndexedDB:", error);
        })
    }

    function createComponentElement(component: { name: string | null; }) {
        const componentElement = document.createElement("div");
        componentElement.className = "w-full h-6 border m-1 text-sm flex flex-wrap items-center justify-center"
        componentElement.textContent = component.name;
        return componentElement;
    }
    
    const handleAddScreen = () => {
        const screenName = prompt("Enter the screen name here");
        if (screenName) {
            if (screenName === "Screen 1") {
                window.alert("Please enter another name, 'Screen 1' isn't allowed ")
            } else {
                setOption([...option , screenName]);
            }
        } else {
            window.alert("Screen name is required. Enter again")
        }
    }
    const handleDragStart = (event: { target: { textContent: any; }; dataTransfer: { setData: (arg0: string, arg1: any) => void; }; }) => {
        const componentName = event.target.textContent; 
        event.dataTransfer.setData("text/plain", componentName);
    }
    return (
        <main className="w-full h-screen bg-pink-500 flex flex-wrap">
            <div className="w-40 h-full bg-violet-700">
                {draggable.map((draggable, index) => (
                    <div
                        key={index}
                        draggable
                        className="w-11/12 p-1 text-white border m-2"
                        onDragStart={handleDragStart}
                    >
                        <span>{draggable}</span>
                    </div>
                ))}
            </div>
            <div className="w-40 h-full bg-red-400 text-yellow-300">
                <button 
                    className="w-11/12 p-1 text-white border m-2"
                    onClick={handleAddScreen}
                >
                    Add Screen
                </button>
                <select
                    value={selectedOption}
                    className="w-11/12 p-1 text-white border m-2 outline-none bg-transparent"
                    onChange={handleChange}
                >
                    {option.map((option) => (
                        <option 
                            key={option} 
                            value={option}
                            className="bg-transparent text-black"
                        >
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-40 h-full bg-lime-400 text-white flex flex-wrap items-center justify-center">
                        <div 
                            className="w-36 h-96 bg-white text-black flex flex-wrap justify-center text-sm DropTarget"
                            onDrop={handleComponentDrop}
                            onDragOver={handleComponentDragOver}
                        >
                            Drop target
                        </div>
            </div>
            <div className="w-40 h-full bg-green-400 text-white flex flex-wrap justify-center p-2">
                        <span 
                            ref={visibleScreen}
                            className="border w-11/12 h-9 text-sm flex flex-wrap items-center justify-center"
                        />
                        <div className="w-full h-full AllComponent">

                        </div>
            </div>
        </main>
    )
}