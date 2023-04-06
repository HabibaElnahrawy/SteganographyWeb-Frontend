import React from 'react';
import Laptop from '../assets/laptop.jpg';
import {Routes, Route, useNavigate} from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const navigateCreateStego = () => {
       
        navigate('/createStegoMedia');
      };

  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>STEGNOGRAPHY MULTIMEDIA PROJECT </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>the practice of concealing messages or information</h1>
          <p>
          Steganography is a technique for obfuscating secret information by enclosing it in a regular, non-secret file or communication; the information is subsequently extracted at the intended location. Steganography can be used in addition to encryption to further conceal or safeguard data. Greek roots steganos (hidden or covered) and graph are combined to get the word steganography .
          </p>
          <button onClick={navigateCreateStego} className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;