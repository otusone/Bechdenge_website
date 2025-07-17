

import './App.css'
import AboutUs from './Screens/AboutUs';
import Contact from './Screens/Contact';
import Home from './Screens/Home'
import { Routes, Route } from 'react-router-dom';
import Project from "./Screens/Project";

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Project />} /> */}
      </Routes>
    </>
  )
}

export default App
