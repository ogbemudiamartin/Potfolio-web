import { motion as m } from "framer-motion"

const FramerTransit = (Ogcomponent) => {
  return (
    <div>
        <Ogcomponent />
        <m.div 
        className="fixed  transform transform-origin-bottom top-0 left-0 w-full h-full bg-[#000]"
        initial={{ scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{ scaleY: 1}}
        transition={{ duration:1, ease: [0.22, 1, 0.36, 1]}}
        >
        </m.div>
        <m.div 
         className="fixed  transform transform-origin-top top-0 left-0 w-full h-full bg-[#000]"

        initial={{ scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{ scaleY: 0}}
        transition={{ duration:1, ease: [0.22, 1, 0.36, 1]}}
        >
        </m.div>
    </div>
  )
}

export default FramerTransit