import React from 'react'

 const galleryCard = () => {
  return (
    <div className='flex flex-col items-start gap-6 absolute w-[600px] h-[200px] p-6 rounded-[20px]   inset-x-0 top-0 '>
        <div className=' h-[18px] not-italic font-medium text-2xl leading-[18px] text-[#333333] flex-none order-none grow-0;'>
            Description
        </div>
       <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                <img src='http://source.unsplash.com/random' about='alt=""' className='"w-full'/>
                <div className='px-6 py-4'>
                <div className='font-bold text-purple-500 text-xl mb-2'>
                Image 1
                </div>
                </div>
                
            </div>
             <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                <img src='http://source.unsplash.com/random' about='alt=""' className='"w-full'/>
                <div className='px-6 py-4'>
                <div className='font-bold text-purple-500 text-xl mb-2'>
                Image 1
                </div>
                </div>
            </div>
            
       </div>
    </div>
  )
}

export default galleryCard