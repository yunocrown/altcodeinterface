'use client'
import React, { useState } from 'react'

const devices = {
    'Screen 1' : {
        image: '/samsungS9.png',
        width: 360,
        height: 640
    },
    'Screen 2' : {
        image: '/lgNexsus.png',
        width: 400,
        height: 720
    },
    'Screen 3' : {
        image: '/pixel7pro.png',
        width: 360,
        heigth: 640
    }
  }
function Devices({selected , devices}) {
    return(
        <DeviceModel
            selected = {selected}
            devices = {devices}
        >
        </DeviceModel>
    )
  }
  function DeviceModel({selected , devices }) {
    const device = devices[selected];
    return (
        <div>
            <img 
                src={device.image}
                width={device.width}
                height={device.height} 
              />
            <DropTargetForDevice selected={selected}/>
        </div>
    )
  }
  function DropTargetForDevice({selected}) {
    if(selected === 'Screen 1') {
        return<S9DropTarget />
    }
    if(selected === 'Screen 2') {
        return<LgNexsusDropTarget />
    }
    if(selected === 'Screen 3') {
        return<Pixel7ProDropTarget />
    }
  }
  function S9DropTarget() {
    return(
        <div
            style={{ 
                width: 360, 
                height: 640,
                color: 'black',
                backgroundColor: 'aliceblue',
                position: 'absolute',
                top: 350
            }}
        >
            hello
        </div>
    )
  }
  function LgNexsusDropTarget() {
    return(
        <div
            style={{
                width: 400,
                height: 720,
                color: 'black',
                backgroundColor: 'aliceblue',
                position: 'absolute'
            }}
        >
            Hiya
        </div>
    )
  }
  function Pixel7ProDropTarget() {
    return(
        <div
            style={{
                width: 360,
                height: 640,
                color: 'black',
                backgroundColor: 'aliceblue',
                position: 'absolute',
                top: 350
            }}
        >
            Mine
        </div>
    )
  }
const page = () => {
  const [selected , setSelectedScreen] = useState('Screen 1');
  const handleSelectScreenChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedScreen(e.target.value);
  };
  return (
    <div className='w-full h-screen bg-violet-700 items-center grid grid-rows-2 justify-center'>
        <div className='w-full h-fit flex flex-wrap items-center justify-center'>
            <select
                value={selected}
                onChange={handleSelectScreenChange}
                className='w-56 h-10 rounded border-none outline-none OptionSelection'
            >
                <option value="Screen 1">Screen 1</option>
                <option value="Screen 2">Screen 2</option>
                <option value="Screen 3">Screen 3</option>
            </select>
        </div>
        <Devices
            selected = {selected}
            devices = {devices}
        />
    </div>
  )
}

export default page

