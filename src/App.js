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
function App() {
  return (
    
    <div >
      
     <Routes>
    
            <Route path='/' element={<SignIn/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/Account' element={<AccountPage/>}/>
            <Route path='/createStegoMedia' element={<CreateStegoMedia/>}/>
            <Route path='/extractSecret' element={<ExtractSecret/>}/>
            
      </Routes>
     
    </div>
  );
}

export default App;
