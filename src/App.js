import React from "react";


import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AccountPage from "./components/AccountPage";
import {Route , Routes} from 'react-router-dom';
import Home from "./components/Home";
import CreateStegoMedia from "./components/CreateStegoMedia";
import Footer from './components/Footer';
import ExtractSecret from "./components/ExtractSecret";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import SecondGallery from "./components/SecondGallery";
function App() {
  return (
    
    <div >
      
     <Routes>
    
            <Route path='/' element={<SignIn visible />}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/Account' element={<AccountPage/>}/>
            <Route path='/createStegoMedia' element={<CreateStegoMedia/>}/>
            <Route path='/extractSecret' element={<ExtractSecret/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/secondgallery' element={<SecondGallery/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
