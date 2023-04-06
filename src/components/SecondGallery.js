import React, { useState } from 'react'
import {motion} from "framer-motion"
import { GalleryData } from '../data';
import {fadeIn}from '../variants'
import Feature4BgImg from '../assets/img/robot.png';
import Header from './Header';
import SingleMediaDetails from './SingleMediaDetails';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const SecondGallery = () => {
    const {  Gallerylist } = GalleryData;
    const [showMediaDetails, setShowMediaDetails]=useState(false);
    const handleOnClose= () => setShowMediaDetails(false);

  return (
    <div className=' bg-slate-200'>
        <Header/>
        <br/>
        <br/>
        <br/>
        <br/>
    <section className='section' >
        <div className='container mx-auto'>
            <div>
            <h2 className='h2 text-8xl text-black font-bold '> My Gallery <br/> all the media</h2>
                            <p className='max-w-sm mb-16 text-2xl'> </p>
                          
            </div>
            <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-3'>
            {Gallerylist.map((feature, index) => {
          
          const { image, bgImage, title, description, linkText, delay } =
            feature;
        
          return (
                 <div className='flex flex-col lg:flex-row  gap-x-10'>
                <div className='flex-1 flex felx-col gap-y-12 mb-10 lg:mb-0 '>
                   
                    <div className='group relative overflow-hidden border-2 border-yellow-900 rounded-xl '>
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300'></div>
                        
                        <img  className='group-hover:scale-125 translate-all duration-500' src='http://source.unsplash.com/random 'alt='' />
                       <button className=' cursor-pointer absolute -bottom-full left-12 group-hover:bottom-10 translate-all duration-1000 z-50 text-white' onClick={() =>setShowMediaDetails(true)}>Show details</button>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 translate-all duration-500 z-50'>
                            <span className='text-2xl'> {description}</span>
                           </div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-14 translate-all duration-700 z-50'>
                            <span className='text-3xl text-white font-bold'>{title}</span>
                        </div>
                    </div>
                </div>
                </div>
         

         );
        })}
            </div>

        </div>
    </section>
    
    <SingleMediaDetails onClose={handleOnClose} visible={showMediaDetails} />
    
    </div>
    
  )
}

export default SecondGallery