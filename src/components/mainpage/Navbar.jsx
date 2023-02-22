import React from 'react';
import NameLogo from '/netflix.png';

export default function Navbar(){
    return (
        <div className='absolute top-0 z-20 flex items-center w-screen justify-between px-10'>
        <img src={NameLogo} className='w-44' />
        <div className='flex space-x-5 bg-black'>
          <div className='flex items-center border-white border-x-[2px] border-y-[2px] w-fit px-2'>
            <div className='text-white font-semibold text-lg'>English</div>
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='bg-red-600 text-white px-3 w-fit py-1 rounded-[5px] text-lg'>Sign In</div>
        </div>
      </div>
    )
}