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
import r1 from '../assets/img/related.webp';
import r2 from '../assets/img/related2.webp';
import r3 from '../assets/img/related3.jpg';
import iosIcon from '../assets/img/iosIcon.png';
import appleIcon from '../assets/img/appStoreIcon.png';


import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../assets/slider1.jpg';
import image5 from '../assets/slider2.jpg';
import image2 from '../assets/slider3.jpg';
import image3 from '../assets/slider4.jpg';
import image4 from '../assets/slider5.jpg';
import ImageSlider from './ImageSlider';
import About from './About';

import IntroPage from './IntroPage';



const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
        <div>
           <Header/>
         <div className="ml-10 flex flex-row justify-between items-center w-full ">
          <h1 className="mr-4 flex-1 font-poppins  ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] mt-48 ml-9 font-bold ">
          Multimedia  <br className="sm:block hidden" />{" "}
            <span className="text-gradient ">Steganography</span>{" "}
          </h1>
          
        </div>
        <div className='ml-10 '>
        <p className='max-w-[500px] mt-10  ml-9 font-serif pb-20 text-[20px] '>
        Website that Applies Multimedia Steganography Algorithms to generate steganographic output on all types of media, with high quality, reasonable capacity and high security for communication.
        </p>
        </div>
        <img src={robot} alt="" className=" absolute w-[578px] h-[571px]   inset-y-0 right-0 top-[73px] mt-6" />
       


        <IntroPage/>
        <About/>
         <ImageSlider/>
          <Features />
          <ExtractSecret/>
          <CreateStegoMedia/>
      <div className=' justify-center items-center flex mb-20'>
          <section id="blog" >
            <div class="container py-20">
                <div class="text-center m-auto mb-10 md:w-1/2">
                    <h4 class="font-bold text-color-secondary text-4xl"> Related Research Studies</h4>
                    
                </div>
                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {/**card no 1 */}
                    <div>
                        <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                            <img src={r3} alt="" class="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"/>
                        </div>
    
                        <div>
                            <div class="flex items-center gap-5 py-5">
                                <p>5 February 2022 </p>
                                <p>1 min read</p>
                            </div>
    
                            <a href="https://www.mdpi.com/1099-4300/24/2/246" class="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">Double-Matrix Decomposition Image Steganography Scheme Based on Wavelet Transform with Multi-Region Coverage</a>
    
                            <p class="leading-relaxed my-5">On the basis of ensuring the quality and concealment of steganographic images....</p>
    
    
                            <a href="https://www.mdpi.com/1099-4300/24/2/246" class="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                                <span class="tracking-wider capitalize underline hover:no-underline">Read more</span>
                            </a>
                        </div>
                    </div>
                    {/**card no 2*/}
                    <div>
                        <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                            <img src={r2} alt="" class="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"/>
                        </div>
    
                        <div>
                            <div class="flex items-center gap-5 py-5">
                                <p> 1 February 2022</p>
                                <p>1 min read</p>
                            </div>
    
                                  <a href="https://d1wqtxts1xzle7.cloudfront.net/75610763/34_1570676995_25800_EMr_16jul_3Mar_Fz-libre.pdf?1638514606=&response-content-disposition=inline%3B+filename%3DAudio_steganography_based_on_least_signi.pdf&Expires=1680763181&Signature=YdaT6Kfmy4vG4qHoZyXP4GMUYfHTGx8zo-2EHHUYMJy4pX60M-L2Hw~W6accjRUSr4hDko0aX3v8xBesIxH-5gDhnn2LMfn9m4rsuAQchleAqQSwdrNIgZPEVh~qRId9wFrBIuAJZj5IbNEwl8eMKqbMoxFefxHUKfDWnCNV6uaHn9KuT2whPjjozZ21sjHLjD9Z349cW6U88p9ac9oNOt03K~oOH7LH8k23AOSbQNWMxzuiFvN~F7zI4RSca2r54QCedH~XarfmEtujyvl6RVPJzB9DniPEKMKI~44Z4E05nqhf1I12AecVF0v6Aygf2L3puuGeh93yDDhZW71zrQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" class="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">Audio steganography based on least significant bits algorithm with 4D grid multi-wing hyper-chaotic system</a>
    
                            <p class="leading-relaxed my-5">Although variety in hiding methods used to protect data and information transmitted via channels but still need more robustness and difficulty to improve protection level of the secret messages...</p>
    
    
                                  <a href="https://d1wqtxts1xzle7.cloudfront.net/75610763/34_1570676995_25800_EMr_16jul_3Mar_Fz-libre.pdf?1638514606=&response-content-disposition=inline%3B+filename%3DAudio_steganography_based_on_least_signi.pdf&Expires=1680763181&Signature=YdaT6Kfmy4vG4qHoZyXP4GMUYfHTGx8zo-2EHHUYMJy4pX60M-L2Hw~W6accjRUSr4hDko0aX3v8xBesIxH-5gDhnn2LMfn9m4rsuAQchleAqQSwdrNIgZPEVh~qRId9wFrBIuAJZj5IbNEwl8eMKqbMoxFefxHUKfDWnCNV6uaHn9KuT2whPjjozZ21sjHLjD9Z349cW6U88p9ac9oNOt03K~oOH7LH8k23AOSbQNWMxzuiFvN~F7zI4RSca2r54QCedH~XarfmEtujyvl6RVPJzB9DniPEKMKI~44Z4E05nqhf1I12AecVF0v6Aygf2L3puuGeh93yDDhZW71zrQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" class="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                                <span class="tracking-wider capitalize underline hover:no-underline">Read more</span>
                            </a>
                        </div>
                    </div>
                    {/**card no 3 */}
                <div>
                    <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                        <img src={r1} alt="" class="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"/>
                    </div>
                    <div>
                        <div class="flex items-center gap-5 py-5">
                            <p>May 2011</p>
                            <p>30 min read</p>
                        </div>
                        <a href="https://www.researchgate.net/publication/277865934_Text_Steganography_using_Article_Mapping_TechniqueAMT_and_SSCE" class="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">Text Steganography using Article Mapping Technique(AMT) and SSCE</a>
                        <p class="leading-relaxed my-5">Now  a  days,  the  internet  expand  rapidly  that  it  has become  a  common  communication  channel....</p>
                        <a href="https://www.researchgate.net/publication/277865934_Text_Steganography_using_Article_Mapping_TechniqueAMT_and_SSCE" class="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                            <span class="tracking-wider capitalize underline hover:no-underline">Read more</span>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
        <div>
          {/**
        <section id="download-app" class="bg-color-primary-light">
            <div class="container h-[80vh] grid place-items-center">
                <div class="text-center md:w-2/3 m-auto">
                    <h1 class="title">Download App Now And Save Your Money</h1>
                    <p class="leading-relaxed pt-5">Serving an impressive list of long-term money with experience and expertise in multiple industries.</p>
                    <div class="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
                        <a href="#" class="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                            <img src="./img/ios-store-dark.png" alt=""/>
                        </a>
                        <a href="#" class="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                            <img src="./img/g-play-dark.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
         */}
        </div>
          <Footer/>

        </div>

    
  )
}

export default Home