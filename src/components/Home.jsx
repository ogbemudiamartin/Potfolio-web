import { useState } from 'react';
import {Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion as m } from 'framer-motion';



function Home() {
  const [isOPen, setIsoPen] = useState(false)

  const NavMenu = () => {
      setIsoPen(!isOPen)
  }

  return (
  
  <div  className='absolute w-full top-0 left-0 right-0'>
<m.div 
        className="fixed z-10 transform transform-origin-bottom top-0 left-0 w-full h-full bg-[#1f1f1f]"
        initial={{ scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{ scaleY: 1}}
        transition={{ duration:0.5, ease: [0.22, 1, 0.36, 1]}}
        >
        </m.div>
        <m.div 
         className="fixed z-10 transform transform-origin-top top-0 left-0 w-full h-full bg-[#1f1f1f]"

        initial={{ scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{ scaleY: 0}}
        transition={{ duration:0.5, ease: [0.22, 1, 0.36, 1]}}
        >
        </m.div>
          <header className='md:px-[4rem]  px-[1.8rem] w-full h-[100vh]  py-8 bg-[rgb(0,0,0,.8)] text-[#fff]'>
        <video className='z-[-1]  absolute top-0 left-0 w-full h-full object-cover' muted autoPlay loop>
          <source src='/public/vid1.mp4'/>
        </video>

      <div className="flex justify-between items-center">
          <img src="/public/logo.png" className='object-cover md:w-[9vw] w-[15vw] h-full cursor-pointer' alt="logo" />
{/* Navbar */}


        <nav className='flex items-center  justify-between  '>
          <div className="md:flex items-center hidden justify-center no-underline  gap-8 text-white">
          <Link to="/about" className='p-2 px-2 group'>About
          <div className="bg-gray-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link to="/Resume" className='p-2 px-2 group'>Resume
          <div className="bg-gray-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link to="/portfolio" className='p-2 px-2 group'>Portfolio
          <div className="bg-gray-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link to="/contact" className='p-2 px-2 group'>Contact
           <div className="bg-gray-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
         </Link>
          </div>
        </nav>
        <button className='md:hidden flex cursor-pointer' onClick={NavMenu}>
          {setIsoPen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                 </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

          }
          </button>
          {isOPen && 
           <nav className='flex md:hidden  absolute   top-[5rem]  right-[2rem] p-4 w-[39vw] md:w-[34vw] lg:w-[28vw]    bg-[#192324] items-start justify-start  '>
           <div className="flex flex-col   items-start justify-center flex-wrap
            no-underline  gap-6 text-white  ">
          <Link to="/about" className='pr-[3rem]'>About</Link>
          <Link to="/Resume" className='pr-[3rem]'>Resume</Link>
          <Link to="/portfolio" className='pr-[3rem]'>Portfolio</Link>
          <Link to="/contact" className='pr-[3rem]'>Contact</Link>
           </div>
         </nav>}
      </div>

        <div className="lg:pt-[10rem] pt-[18rem] text-[#fff]">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="lg:text-[4rem]  md:text-[3rem] font-bold tracking-wide text-[1.8rem]">Martin Ogbemudia</div>
            <div className="md:text-[2rem] text-[1.3rem] tracking-wide flex items-center justify-center gap-2">I’m a <span>
            <Typewriter
    options={{
        strings: ['Frontend Dev', 'Freelancer', 'Otaku'],
        autoStart: true,
        loop: true,
        loopCount: Infinity,
        typeSpeed: 150,
        deleteSpeed: 150,
    }}
/>
                </span></div>
          </div>
        </div>

        {/*  */}

        <div className="md:flex hidden items-center justify-between pt-[3rem]">
            <div className="flex flex-col text-lg gap-6">
              <div className="transform rotate-90">ENG</div>
              <div className="transform rotate-90">JAP</div>
            </div>
            <div className="flex flex-col  text-xl items-center justify-center gap-4">
                <a href="https://www.linkedin.com/in/ogbemudia-martin-4a8226235/" target="_blank"><FaLinkedin /></a>
                <a href="" target="_blank"><FaFacebook /></a>
                <a href="" target="_blank"><FaXTwitter /></a>
                <a href="https://github.com/ogbemudiamartin" target="_blank"><FaGithub /></a>
            </div>
        </div>
      </header>

     
    </div>
  
  )
}

export default Home
