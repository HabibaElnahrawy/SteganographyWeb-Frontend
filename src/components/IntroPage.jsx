import React from 'react';
import Typed from 'react-typed';
import {Routes, Route, useNavigate} from 'react-router-dom';
const IntroPage = () => {
    const navigate = useNavigate();
    const navigateCreateStego = () => {
       
        navigate('/createStegoMedia');
      };
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#5ee1e6] font-bold p-2'>
          EXTRACT OR CREATE STEGO MEDIA
        </p>
        <h1 className='text-black md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Ability to upload  
        </h1>
        <div className='flex justify-center items-center'>
          <p className='text-black md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          stego media.
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Ability to upload cover and secrets medias.</p>
            <button onClick={navigateCreateStego} className='bg-[#5ee1e6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default IntroPage;