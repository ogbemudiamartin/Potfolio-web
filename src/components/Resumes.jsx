import { Link } from "react-router-dom"
import { RxCross1 } from "react-icons/rx";
import Loadanimat from "./animate/Loadanimat";
import { motion as m } from 'framer-motion';
import { PiCaretRightFill } from "react-icons/pi";

const Resume = () => {
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


<div className="fixed  right-0 pr-8 items-end justify-end text-4xl">
<Link to="/"><RxCross1 /></Link>
</div>
<div className="flex flex-col items-center pb-[5.5rem] justify-center  gap-[1.5rem] pt-[2.5rem]">
<div className="text-gray-400 text-md">Check out my Resume</div>
<div className="text-5xl font-bold tracking-wide pb-2">Resume</div>
<Loadanimat />
</div>

<div className="px-[3rem]">
  <div className="flex items-center justify-between gap-4 flex-wrap">
    <div className="">
      <h1 className="font-bold text-xl pb-4">Education</h1>
      <div className="flex  flex-col rounded-sm border-l-2 bg-[#161616]  border-[#038759]"> 
      <div className="flex relative flex-col pl-[2.5rem] pr-[1rem] py-[1.2rem] gap-2 border-b-2 border-[#232323]">
      <div className="absolute bg-[#038759] left-0 top-6 w-[4%] md:w-[2%] h-[2.5vh]"></div>
      <div className="absolute bg-[#038759] left-0 top-6 w-[2%] h-[2.5vh]"></div>
         <div className="absolute text-[#038759] left-[0.1rem] top-[1.25rem] text-2xl"><PiCaretRightFill /></div>
         <h1 className="text-xl font-bold">Structural Engineering</h1>
          <h2 className="text-[#636363]"> University Of Benin / 2024 - 2028</h2>
          <p className="text-[#636363]">
          Engineers convert complex challenges into precise solutions
          </p>
        </div>

        <div className="flex relative flex-col   pl-[2.5rem] pr-[1rem] py-[1.2rem] gap-2 border-b-2 border-[#232323]">
         <div className="absolute bg-[#038759] left-0 top-6 w-[2%] h-[2.5vh]"></div>
         <div className="absolute text-[#038759] left-[0.1rem] top-[1.25rem] text-2xl"><PiCaretRightFill /></div>
          <h1 className="text-xl font-bold">Problem Solvinng</h1>
          <h2 className="text-[#636363]">University of Califonia School Of Bussiness / 2023</h2>
          <p className="text-[#636363]">
            as an Engineering we arre known for being problem solvers
          </p>
        </div>

      </div>
    </div>
    
    <div className="">
      <h1 className="font-bold text-xl pb-4">Expericne</h1>
      <div className="flex  flex-col rounded-sm border-l-2 bg-[#161616]  border-[#038759]"> 
        <div className="flex relative flex-col   pl-[2.5rem] pr-[1rem] py-[1.2rem] gap-2 border-b-2 border-[#232323]">
         <div className="absolute bg-[#038759] left-0 top-6 w-[2%] h-[2.5vh]"></div>
         <div className="absolute text-[#038759] left-[0.1rem] top-[1.25rem] text-2xl"><PiCaretRightFill /></div>
          <h1 className="text-xl font-bold">Frontend Developer</h1>
          <h2 className="text-[#636363]">Intern At Alx / 2022 - 2023</h2>
          <p className="text-[#636363]">
            as an Engineering we arre known for being problem solvers
          </p>
        </div>
        
        <div className="flex relative flex-col   pl-[2.5rem] pr-[1.5rem] py-[1.2rem] gap-2 border-b-2 border-[#232323]">
         <div className="absolute bg-[#038759] left-0 top-6 w-[2%] h-[2.5vh]"></div>
         <div className="absolute text-[#038759] left-[0.1rem] top-[1.25rem] text-2xl"><PiCaretRightFill /></div>
          <h1 className="text-xl font-bold">Frontend Developer</h1>
          <h2 className="text-[#636363]">FreeLance At Upwork Alx / 2022 - 2023</h2>
          <p className="text-[#636363]">
            as an Engineering we arre known for being problem solvers
          </p>
        </div>

      </div>
    </div>
  </div>

  <div className="pt-4">
    <div className="text-[#636363] pb-6">
    My level of knowledge in some tools
    </div>
    
  <div className=" ">
  <div className="font-bold  text-xl pb-6">My Skills</div>
    <div className="  grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="">
        <div className="flex items-center justify-between pb-2 pr-10">
        <h2 className="">HTML/CSS</h2>
        <h2 className="">90%</h2>
        </div>
        <div className="w-full h-[1.2vh] bg-[#2b2d2d] rounded-sm">
          <div className="w-[90%] h-[1.2vh] bg-[#038759] rounded-sm"></div>
        </div>
      </div>
      
      <div className="">
      <div className="flex items-center justify-between pb-2 pr-[4.3rem]">
        <h2 className="">React Js</h2>
        <h2 className="">85%</h2>
        </div>
        <div className="w-full h-[1.2vh] bg-[#2b2d2d] rounded-sm">
          <div className="w-[85%] h-[1.2vh] bg-[#038759] rounded-sm"></div>
        </div>
      </div>
      <div className="">
      <div className="flex items-center justify-between pb-2 pr-[6rem]">
        <h2 className="">Javascript</h2>
        <h2 className="">80%</h2>
        </div>
        <div className="w-full h-[1.2vh] bg-[#2b2d2d] rounded-sm">
          <div className="w-[80%] h-[1.2vh] bg-[#038759] rounded-sm"></div>
        </div>
      </div>

      <div className="">
      <div className="flex items-center justify-between pb-2 pr-[2.4rem]">
        <h2 className="tracking-wide">Tailwind</h2>
        <h2 className="">90%</h2>
        </div>
        <div className="w-full h-[1.2vh] bg-[#2b2d2d] rounded-sm">
          <div className="w-[90%] h-[1.2vh] bg-[#038759] rounded-sm"></div>
        </div>
      </div>


    </div>
  </div>
  </div>

</div>
</div>
  )
}

export default Resume