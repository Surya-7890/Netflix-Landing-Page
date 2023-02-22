import React from 'react';
import Questions from './Questions';
import { questions } from '../../../data';

export default function Accordian(){
    return(
        <div className='bg-black text-white flex flex-col justify-center items-center py-16'>
        <div className='text-[50px]'>Frequently Asked Question</div>
        <div className='flex justify-center w-screen mt-4'>
            <div className='w-[50%]'>
                {questions.map((element, index) => {
                    return <Questions props={element} key={index} />
                })}
                <div>
                    <div className='flex justify-center mt-10'>Ready to watch? Enter your email to create or restart your membership.</div>
                    <div className='flex mt-3'>
                    <input placeholder='Email Address' className='w-[65%] px-5 focus:outline-none placeholder:text-gray-400 text-gray-400 text-[25px]' />
                    <div className='bg-red-600 w-[35%] text-[30px] px-4 py-2 flex items-center justify-around'>
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    )
}