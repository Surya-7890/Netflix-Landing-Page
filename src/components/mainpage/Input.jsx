import React from 'react';

export default function Input() {
    return (
        <div className='text-white z-40 mt-10'>
        <div className='font-semibold text-[65px] leading-[75px]'>
          Unlimited movies, TV 
          <div className='flex justify-center items-center'>
            shows and more.
          </div>
        </div>
        <div className='text-[30px] mt-1 flex justify-center items-center'>
          Watch anywhere. Cancel anytime.
        </div>
        <div className='flex justify-center items-center text-[20px] mt-4'>
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className='flex w-[100%] bg-black mt-3'>
          <input placeholder='Email Address' className='w-[65%] px-5 focus:outline-none placeholder:text-gray-400 text-gray-400 text-[25px]' />
          <div className='bg-red-600 w-[35%] text-[30px] px-4 py-2 flex items-center  '>
             Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
    )
}