

import './App.css'
import AboutUs from './Screens/AboutUs';
import Contact from './Screens/Contact';
import Home from './Screens/Home'
import { Routes, Route } from 'react-router-dom';
import Project from "./Screens/Project";
import Service from './Screens/Service';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </>
  )
}

export default App
