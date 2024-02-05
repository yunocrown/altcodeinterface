'use client'

import { useState } from "react"

const backgroundColors = {
    'screen' : {
        width: 500,
        height: 500
    },
    'component' : {
        width: 500,
        height: 500
    }
}
function PropertyDisplay({propertyDisplay , backgroundColors}) {
    const propertySelected = backgroundColors[propertyDisplay];
    return(
        <DisplayForOptions 
            propertyDisplay = {propertyDisplay}
        />
    )
}
function DisplayForOptions({propertyDisplay}) {
    if(propertyDisplay === 'screen') {
        return <ScreenOption />
    }
    if(propertyDisplay === 'component') {
        return <ComponentOption />
    }
}
function ComponentOption() {
    return (
        <div className="bg-black text-white">
            Hiya 
        </div>
    )
}
function ScreenOption() {
    return (
        <div className="bg-yellow-300 text-red-400">
            hello
        </div>
    )
}
export default function page() {
    const [properties , setProperties] = useState('screen');
    
    const handleChangedSelect = (e) => {
        setProperties(e.target.value);
    }

    return (
        <div className="w-full h-screen bg-violet-600 flex flex-wrap text-white p-4">
            <div className="w-full flex flex-wrap  h-fit place-content-center gap-6">
                <button className="border rounded p-2" onClick={handleChangedSelect} value="screen">Screen1</button>
                <button className="border rounded p-2" onClick={handleChangedSelect} value="component">Component1</button>
                <button className="border rounded p-2" onClick={handleChangedSelect} value="screen">Screen2</button>
                <button className="border rounded p-2" onClick={handleChangedSelect} value="component">Component2</button>
            </div>
            <div>
                <PropertyDisplay 
                    propertyDisplay = {properties}
                    backgroundColors = {backgroundColors}
                />   
            </div>
        </div>
    )
}