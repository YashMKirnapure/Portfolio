import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import { Toaster } from 'react-hot-toast';

const App = () => 
{
  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Footer/>
      <Contacts/>
    </div>
    <Toaster/>
    </>
  );
}

export default App
