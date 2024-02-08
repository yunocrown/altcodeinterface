'use client'
import { doc } from 'firebase/firestore';
import React, { use, useState } from 'react'

const page = () => {
  const [displayMenu , setDisplayMenu] = useState(true);
  const [displayCommunity , setDisplayCommunity] = useState(false);
  const [isRotated , setIsRotated] = useState(false);

  const handleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  }
  const handleCloseMenuButton = () => {
    setDisplayMenu(!displayMenu)
  }
  const handleCommunityClick = () => {
    const DropDownButton = document.querySelector(".DropDownButton");
    if (isRotated) {
      DropDownButton?.classList.remove("rotate-[270deg]");
    } else {
      DropDownButton?.classList.add("rotate-[270deg]");
    }
    setIsRotated(!isRotated);
    setDisplayCommunity(!displayCommunity);
  }

  return (
    <main className='w-full h-screen bg-slate-900'>
      <div className='w-full h-14 border border-t-0 border-l-0 border-r-0 border-b-1 flex flex-wrap justify-center'>
        <div className='text-white w-9/12 flex flex-wrap items-center bg-blue-500 place-content-between'>
          <div className='w-96 h-full flex flex-wrap items-center '>
            <img 
              src='/menu_open.svg'
              alt='menu button'
              width={25}
              height={25}
              onClick={handleDisplayMenu}
            />
            {
              displayMenu && 
              <div className='w-64 h-full absolute left-0 top-0 bg-gradient-to-b from-indigo-600 to-blue-400'>
                <div className='w-full h-10 flex flex-wrap place-content-end pr-4'>
                  <img 
                    src='close.svg'
                    onClick={handleCloseMenuButton}
                  />
                </div>
                <div className='w-full h-full p-2 text-sm'>
                  <div className='w-full flex flex-wrap h-fit items-center relative' onClick={handleCommunityClick}>
                    <div className='w-full h-6 flex flex-wrap'>
                    <img 
                      src='/arrow_back_ios.svg'
                      alt='open'
                      className='rotate-180 mr-3 ml-2 DropDownButton'
                      width={15}
                      height={15}
                    />
                    <span>
                      Community
                    </span>
                    </div>
                    {
                      displayCommunity && 
                      <div className='w-full relative bg-amber-300 h-40 grid justify-items-end'>
                        <p className='text-xs relative top-1 w-52'>
                          Much more than a modern app creator without coding
                        </p>
                        <div className='w-full text-xs'>About</div>
                        <div className='w-full text-xs'>Everything</div>
                        <div className='w-full text-xs'>User</div>
                      </div>
                    }
                  </div>
                  <div className='w-full flex flex-wrap h-6 items-center relative'>
                    <img 
                      src='/arrow_back_ios.svg'
                      alt='open'
                      className='rotate-180 mr-3 ml-2'
                      width={15}
                      height={15}
                    />
                    <span>Categories</span>
                  </div>
                  <div className='w-full flex flex-wrap h-6 items-center'>
                    <img 
                      src='/arrow_back_ios.svg'
                      alt='open'
                      className='rotate-180 mr-3 ml-2'
                      width={15}
                      height={15}
                    />
                    <span>Tags</span>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default page