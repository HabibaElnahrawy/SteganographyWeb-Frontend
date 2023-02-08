import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Features from './Features';
import ExtractSecret from './ExtractSecret';
import CreateStegoMedia from './CreateStegoMedia';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
        <div>
          
      <Header/>
  
          <Features/>
          <ExtractSecret/>
          <CreateStegoMedia/>
          
      <Footer/>
        </div>

    
  )
}

export default Home