import React from 'react'
import Logo from '../assets/img/logo.png'
import {MdShoppingCart} from "react-icons/md"
import user_pic from '../assets/img/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

import { async } from '@firebase/util';
import SignIn from './SignIn'


const Header = () => {

    
  return (
    //px-16 ---> because we need some spaces in the left side
    <div>

    
    <header className='w-screen fixed top-0  z-50 p-6 bg-slate-200 px-16'>
        {/*for desktop & tables*/}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={'/'}className='flex items-center gap-2'>
                <motion.img  whileTap={{scale: 0.6}}  src={Logo} className='w-8 object-cover' alt="logo"/>
                <p className='text-headingColor text-xl font bold'> Name</p>
            </Link>
            

                {/*ml --> margin left */}
           

           <div className='flex items-center gap-8 '>

           <ul className='flex items-center gap-8 '>
                <Link to='/' className='text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 translate-all ease-in-out'>Home</Link>
                <Link to='/secondgallery' className='text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 translate-all ease-in-out'>Gallery</Link>
                <li  className='text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 translate-all ease-in-out'>About Us</li>
                <li className='text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 translate-all ease-in-out'>service</li>
            </ul>
            


            <div className='relative'>
              <Link to="/">
            <motion.img 
            whileTap={{scale: 0.6}} 
            src={user_pic} className=' imageLink w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer' alt="userProfile"  />
            </Link>
            </div>

           </div>
            
        </div>





        {/*for mobile*/}
        <div className='flex md:hidden w-full h-full'>

        </div>

    </header>
    
    </div>
  )
}

export default Header