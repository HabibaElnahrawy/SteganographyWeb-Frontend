import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Features from './Features';
import ExtractSecret from './ExtractSecret';
import CreateStegoMedia from './CreateStegoMedia';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import robot from '../assets/img/robot.png';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
        <div>
           <Header/>
         <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins  ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] mt-48 ml-9 font-bold ">
          Steganography <br className="sm:block hidden" />{" "}
            <span className="text-gradient ">Project</span>{" "}
          </h1>
          
        </div>
        
        <p className='max-w-[470px] mt-5  ml-9 font-serif pb-96'>
          sffs sdfsfm osdfcsfvs dmfvnlfv lfdvklml lkkmndslkmf lkmslkdf lmsdlkmfk  lk
          ksmdfklsmd lksdmfklmsdkm lkmsdk;fmk;sdmv ksdk;mfksdnkvj kndsfkosd lkjnlksdffcsd
           ksdnfklsd mnsdlfnkosdmn 
        </p>

        <img src={robot} alt="" className=" absolute w-[578px] h-[571px]   inset-y-0 right-0 top-[73px] mt-6" />
       
          <Features />
          <ExtractSecret/>
          <CreateStegoMedia/>
          <Footer/>
        </div>

    
  )
}

export default Home