import './App.css'
import Home from "./components/Home"
import {  Routes, Route, useLocation } from 'react-router-dom';

import About from './components/About.jsx';
import Resume from './components/Resumes.jsx';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact.jsx';
import { AnimatePresence } from 'framer-motion';
const App = () => {
  const location = useLocation()

  return (
    <div>
      <AnimatePresence mode="wait" >
    <Routes  location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
    </div>
  )
}

export default App