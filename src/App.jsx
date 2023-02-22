import React from 'react';
import { array } from '../data';
import Input from './components/mainpage/Input';
import Navbar from './components/mainpage/Navbar';
import Scroll from './components/scrollview/Scroll';
import Accordian from './components/scrollview/Accordian';
import Footer from './components/mainpage/Footer';

export default function App(){
  return (
    <div className='overflow-hidden'>
      <div className='w-screen h-screen relative flex justify-center items-center overflow-hidden'>
        <div className='absolute top-0 h-[100%] w-[100%] bg-bigImg bg-center bg-cover z-0'></div>
        <Navbar />
        <Input />
        <div className='h-[100%] w-[100%] bg-black absolute top-0 bg-opacity-60 z-10 shadow-black shadow-inner'></div>
      </div>
      <div className='bg-zinc-700 space-y-2 overflow-hidden pt-2'>
        {array.map((element, index) => {
          return <Scroll props={element} index={index} key={index} />
        })}
        <Accordian />
        <Footer />
      </div>
    </div>
  )
}