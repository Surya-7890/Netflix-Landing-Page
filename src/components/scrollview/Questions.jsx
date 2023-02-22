import React from 'react';
import { motion } from 'framer-motion';

export default function Questions({ props }){

    const [isShown, setIsShown] = React.useState(false);

    return (
        <div className='w-[100%] mb-3'>
            <div className='flex flex-row justify-between px-10 bg-zinc-800 items-center font-normal text-[25px] w-[100%] cursor-pointer' onClick={() => setIsShown(!isShown)}>
                <div>
                    {props.question}
                </div>
                { isShown ?
                <motion.div 
                className='text-[50px] font-thin rotate-45'
                transition={{ type: 'keyframes', duration: 1 }}
                >
                +
                </motion.div>
                :
                <div className='text-[50px] font-thin'>
                +
                </div>
                }
            </div>
            { isShown &&
            <div className='py-5 text-[20px] p-6 mt-1 bg-zinc-800'>
                {props.answer}
            </div>
            }
        </div>
    )
}