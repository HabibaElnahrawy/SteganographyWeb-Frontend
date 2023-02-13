import React from 'react'
import {MdClose ,MdDownload} from "react-icons/md";
import filePng from '../assets/img/file-png-solid-240.png';
const SingleMediaDetails = ({visible, onClose}) => {
    if(!visible)return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center'>
    <div className='   rounded relative p-[32px]  '>
    <section>
        <div class="text-center pb-8 pt-9">
           
            <h1 class="text-5xl font-bold text-white pt-10">Media Details</h1>
        </div>
        <div class="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
            {/*card 1 */}
            <div class="border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 flex flex-col">
                <p class="relative text-sm font-bold text-white">
                    
                    <span class="text-4xl pl-2">SECRET</span>
                
                </p>
                <div class="py-10">
                <div className="relative flex mb-2.5 p-4 bg-slate-400 rounded-3xl">
                                        <img className='mr-5 w-12'src={filePng} alt="" />
                                        <div className="flex flex-col justify-between ">
                                            <p>itemName</p>
                                            <p>itemSizs B</p>
                                        </div>
                                        
                </div>
                    <h3 class="text-xl font-bold pb-3 text-white">FILE NAME</h3>
                    <p class="text-sm leading-6 opacity-0">For fdgdfgddfgdf Beginner Who Want To Scale Business Globaly</p>
                </div>
                <ul class="pb-10 space-y-4 flex-1">
                    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <img src='' about='alt=""' className=''/>
                    <div className='px-6 py-4'>
                    <div className='font-bold text-purple-500 text-xl mb-2'>
                    Image 1
                    </div>
                    </div>
                </div>
                </ul>
                <a href="#" class="mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700 text-white ">
                    <div className='grid grid-cols-1 place-items-center'>
                    <MdDownload size={20} />
                    </div>
                    
                    </a>
            </div>
            {/*card 2 */}
            <div class="relative border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 flex flex-col">
                
                <p class="relative text-sm font-bold text-white">
                  
                    <span class="text-4xl pl-2">COVER</span>
                   
                </p>
                <div class="py-10">

                <div className="relative flex mb-2.5 p-4 bg-slate-400 rounded-3xl">
                                        <img className='mr-5 w-12'src={filePng} alt="" />
                                        <div className="flex flex-col justify-between ">
                                            <p>itemName</p>
                                            <p>itemSizs B</p>
                                        </div>
                                        
                </div>
                    <h3 class="text-xl font-bold pb-3 text-white">FILE NAME</h3>
                    <p class="text-sm leading-6 opacity-0">For fdgdfgddfgdf Beginner Who Want To Scale Business Globaly</p>
                </div>
                <ul class="pb-10 space-y-4 flex-1">
                  
                </ul>
                <a href="#" class="mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700 text-white">
                    <div className='grid grid-cols-1 place-items-center'>
                    <MdDownload size={20} />
                    </div>
                    </a>
            </div>
            {/*card 3 */}
            <div class="border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 flex flex-col">
                <p class="relative text-sm font-bold text-white">
                    
                    <span class="text-4xl pl-2 text-white">OUTPUT</span>
                   
                </p>
                <div class="py-10">
                <div className="relative flex mb-2.5 p-4 bg-slate-400 rounded-3xl">
                                        <img className='mr-5 w-12'src={filePng} alt="" />
                                        <div className="flex flex-col justify-between ">
                                            <p>itemName</p>
                                            <p>itemSizs B</p>
                                        </div>
                                        
                </div>
                    <h3 class="text-xl font-bold pb-3 text-white">FILE NAME</h3>
                    <p class="text-sm leading-6 opacity-0">For fdgdfgddfgdf Beginner Who Want To Scale Business Globaly</p>
                </div>
                <ul class="pb-10 space-y-4 flex-1">
                    
                </ul>
                <a href="#" class="mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700 text-white">
                <div className='grid grid-cols-1 place-items-center'>
                    <MdDownload size={20} />
                    </div>
                </a>
            </div>
        </div>
    </section>
    <div className='text-2xl cursor-pointer'
            onClick={onClose} >
            <MdClose/>
          </div>
   
    </div>
    </div>
  )
}

export default SingleMediaDetails