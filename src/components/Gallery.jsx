import React,{useState} from 'react'
import { GalleryData } from '../data';
import GalleryCard from './GalleryCard';
import { BsArrowRight } from 'react-icons/bs';
import {MdList ,MdDoubleArrow} from 'react-icons/md'
const Gallery = () => {
  const {  Gallerylist } = GalleryData;
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
 
    setIsShown(true);
  };

  return (
    <div  >
   <div  >
      <div className='flex flex-col items-end gap-4 isolate absolute w-[600px] h-[696px] p-0 left-[23px] top-[212px] '>
      {Gallerylist.map((feature, index) => {
          
          const { image, bgImage, title, description, linkText, delay } =
            feature;
        
          return (
            <div className='flex flex-row items-center gap-6 w-[600px] h-16 flex-none order-none grow-0 z-[8] p-0'>
              <MdList className=' w-6 h-6 flex-none order-none grow-0'/>
            <div
              key={index}
              className='box-border flex flex-row items-center gap-7 w-[600px] h-16 border flex-none order-1 grow-0 p-5 rounded-2xl border-solid border-[#E0E0E0]'
              data-aos='zoom-in'
              data-aos-offset='100'
              data-aos-delay={delay}
            >
              
             
           
    
              {/* text */}
              <div className='max-w-[220px]'>
              
                <h3 className='h3 mb-4'>{title}</h3>
                
              </div>
              <MdDoubleArrow className='w-6 h-6 flex  right-4 absolute cursor-pointer' onClick={handleClick}/>
            </div>
            </div>
          );
        })}
     
   
      
      </div>
   <div className='flex flex-col justify-center items-center gap-2.5 absolute w-[700px] h-[696px]   p-6 rounded-[20px] left-[700px] top-[212px] border  '>
    
   {isShown && <GalleryCard/>}
     
    </div>
    </div>
    </div>
  )
}

export default Gallery