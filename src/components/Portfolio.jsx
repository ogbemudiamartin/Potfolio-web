import { Link } from "react-router-dom"
import { RxCross1 } from "react-icons/rx";
import Loadanimat from "./animate/Loadanimat";
import { motion as m } from 'framer-motion';
import Projects from "./Projects";

const Portfolio = () => {
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
        transition={{ duration:0.5, ease: [0.22, 1, 0.36, 1]}}>
    </m.div>


    <div className="fixed right-0 pr-8 items-end justify-end text-4xl">
    <Link to="/"><RxCross1 /></Link>
    </div>
    <div className="flex flex-col items-center justify-center pt-[2rem] gap-[1.5rem] pb-[5.5rem]">
      <div className="text-gray-400 text-md">Showcasing some of my best work</div>
    <div className="text-5xl font-bold tracking-wide pb-2">Portfolio</div>
    <Loadanimat />
    </div>


   <Projects />
    </div>
  )
}

export default Portfolio