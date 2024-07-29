import { Link } from "react-router-dom"
import { RxCross1 } from "react-icons/rx";
import Loadanimat from "./animate/Loadanimat";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin, FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiThirdweb } from "react-icons/si";
import { FaArrowsAlt } from "react-icons/fa";
import { motion as m } from 'framer-motion';

const About = () => {
 
    return (
    <div className="absolute w-full p-[2rem] text-[#F0F0F0]  bg-[#101010] z-[2] top-0 left-0 right-0"> 
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


        <div className="fixed right-0 pr-8 items-end justify-end text-4xl">
    <Link to="/"><RxCross1 /></Link>
    </div>
      <div className="flex flex-col items-center justify-center gap-[1.5rem] pt-[2rem] pb-[5.5rem]">
        <div className="text-gray-400 text-md">Get to know me</div>
        <div className="text-5xl font-bold tracking-wide pb-2">About Me</div>
        <Loadanimat />
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between">
        <div className=" rounded-full lg:rounded-md mr-14  ml-16 p-2 border-solid border-2   border-[rgba(0,0,0,.2)]">
          <img src="/public/martin.jpeg" className=" md:w-[100vw]   lg:rounded-sm rounded-full lg:h-[80vh]" alt="img1" />
        </div>
        <div className="flex pr-2 md:pr-[2.9rem] pt-6 flex-col gap-4  md:items-start md:justify-start items-center  ">
          <h2 className="text-[#038759] font-bold text-2xl tracking-wide">Who am i?</h2>
          <h1 className="font-extrabold   text-2xl  leading-10 tracking-wide md:text-start text-center">I&#39;m Martin Ogbemudia, a Frontend Developer</h1>
          <p className="text-[#969696] text-[1rem] leading-8 md:text-start text-center">I am a frontend developer based in Nigeria with a year of experience. Throughout my experience, I&#39;ve specialized in building robust websites and applications. My approach emphasizes staying updated with current industry trends to deliver efficient and user-friendly products.</p>
          <div className=" pt-[5px] border-b-2 border-solid border-[#232323] w-[90%]"></div>
          
          <div className=" flex-col md:flex  md:flex-row  text-[.9rem]  md:gap-[2rem] lg:gap-[7rem] pt-4">
            <div className="flex flex-col pb-2 gap-[1rem]">
            <div className="">Name: <span className="text-[#969696] tracking-wide pl-2">Martin Ogbemudia</span>
            </div>
            <div className="">Age: <span className="text-[#969696] tracking-wide pl-2">18</span></div>
            </div>

            <div className="flex flex-col gap-[1rem]">
            <div className="">Email: <a className="text-[#038759] tracking-wide pl-2" href="mailto:martindev52@gmail.com?subject=Inquiry from Potential Client" target="_blank">martindev52@gmail.com</a></div>
            <div className="">From: <span className="text-[#969696] tracking-wide pl-2">Nigeria</span></div>
            </div>
          </div>

          <div className="flex-col md:flex md:flex-row text-start pt-4 gap-4">
            <div className="">
              <button  className=" tracking-wide rounded-full py-2 px-6 bg-[#038759]">
              <a href="/public/Resume.pdf" download="Martin_CV.pdf">Download CV</a>
              </button>
            </div>
            <div className="border-solid border-[1px] border-[#353434] rounded-md mt-4 h-[1px] w-[5vw]"></div>
            <div className="flex text-xl items-center justify-center gap-4 text-[#969696]">
                <a href="https://www.linkedin.com/in/ogbemudia-martin-4a8226235/" target="_blank"><FaLinkedin /></a>
                <a href="" target="_blank"><FaFacebook /></a>
                <a href="" target="_blank"><FaXTwitter /></a>
                <a href="https://github.com/ogbemudiamartin" target="_blank"><FaGithub /></a>
            </div>

          </div>
        </div>
      </div>


      {/*  */}

      <div className=" px-2 lg:px-16 md:px-[0.8rem] pt-[7rem] tracking-wide">
        <h2 className="text-[#969696] pb-4">Services i offer</h2>
        <h1 className="font-extrabold text-4xl">My Services</h1>
        <div className=" md:flex md:flex-row flex-col items-center justify-center gap-6 pt-[3rem]">
          <div className="flex flex-col hover:border-b-2 hover:border-solid  hover:border-[#038759] items-start shadow-md rounded-sm justify-center mb-6 md:mb-0  p-9 gap-3 bg-[#161616]">
          <SiThirdweb className="text-[#038759] text-[3.5rem]"/>
          <h1 className="font-bold text-xl">Web Development</h1>
          <p className="text-[#636363] leading-7">Creating custom websites that reflect your unique business vision</p>
          </div>

          <div className="flex flex-col hover:border-b-2 hover:border-solid  hover:border-[#038759] items-start shadow-md rounded-sm justify-center  mb-6 md:mb-0  p-9 gap-3 bg-[#161616]">
          <FaCode className="text-[#038759] text-[3.5rem]"/>
          <h1 className="font-bold text-xl">Coding designs</h1>
          <p className="text-[#636363] leading-7 ">Crafting sleek interfaces with Html, Css, JavaScript</p>
          </div>

          <div className="flex flex-col hover:border-b-2 hover:border-solid  hover:border-[#038759] items-start shadow-md rounded-sm justify-center  mb-6 md:mb-0  p-9 gap-3 bg-[#161616]">
          <FaArrowsAlt className="text-[#038759] text-[3.5rem]"/>
          <h1 className="font-bold text-xl">Fully Responsive</h1>
          <p className="text-[#636363] leading-7">Delivering seamless, fully responsive experiences across all devices</p>
          </div>
        </div>
      </div>

      
 
    </div>
  )
}

export default About 