import React from 'react';
import { motion } from 'framer-motion';

export default function Scroll({ props, index }){
  console.log(props.image)
    return (
        <div className='bg-black text-white px-20 flex justify-between py-2 items-center'>
            { index%2 === 0?
                <>
                <motion.div 
                className='w-[45%]'
                initial={{ x: -400 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
                >
                  <div className='text-[55px]'>{props.heading}</div>
                  <div className='text-[23px] mt-8 w-[80%]'>{props.content}</div>
                </motion.div>
                <div className={`w-[50%]`}>
                  <img src={props.image} />
                </div>
                </>
                  :
                  <>
                <div className='w-[50%]'>
                  <img src={props.image} />
                </div>
                <motion.div 
                className='w-[45%]'
                initial={{ x: 400 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
                >
                  <div className='text-[55px]'>{props.heading}</div>
                  <div className='text-[23px] mt-8 w-[80%]'>{props.content}</div>
                </motion.div>
                </>
            }
        </div>  
    )
}