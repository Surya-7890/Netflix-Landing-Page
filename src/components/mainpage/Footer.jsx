import React from "react";
import { links } from "../../../data";
export default function Footer() {
    return(
        <div className='bg-black text-white py-20 flex flex-col justify-center items-center'>
            <div>
            <div className=''>Questions? Call 000-800-919-1694</div> 
            <div className='grid grid-cols-4 gap-x-12 gap-y-3 mt-12'>
                {links.map((element, index)=> {
                    return (
                        <div className='cursor-pointer hover:underline' key={index}>{element}</div>
                        )
                    })}
            </div> 
            <div className='mt-12'>
                <div className='flex items-center border-white border-x-[2px] border-y-[2px] w-fit px-2'>
                    <div className='text-white font-semibold text-lg'>English</div>
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='font-extralight mt-3 text-gray-400'>Netflix India</div>
            </div> 
            </div>
        </div>
    )
}