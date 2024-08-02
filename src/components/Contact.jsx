import { Link } from "react-router-dom"
import { RxCross1 } from "react-icons/rx";
import Loadanimat from "./animate/Loadanimat";
import { motion as m } from 'framer-motion';
import { SiNamecheap } from "react-icons/si";
import { FaMap } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5jfw0zn', 'template_0kkycuo', form.current, {
        publicKey: 'Zu24PgTdr935Ncn-h',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="absolute w-full  p-[2rem] text-[#F0F0F0]  bg-[#101010] z-[2] top-0 left-0 right-0"> 
    <m.div 
        className="fixed z-10 transform transform-origin-bottom top-0 left-0 w-full h-full bg-[#121111]"
        initial={{ scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{ scaleY: 1}}
        transition={{ duration:0.5, ease: [0.22, 1, 0.36, 1]}}
        >
        </m.div>
        <m.div 
         className="fixed z-10 transform transform-origin-top top-0 left-0 w-full h-full bg-[#121111]"

        initial={{ scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{ scaleY: 0}}
        transition={{ duration:0.5, ease: [0.22, 1, 0.36, 1]}}
        >
        </m.div>
    <div className="fixed right-0 pr-8 items-end justify-end text-4xl">
    <Link to="/"><RxCross1 /></Link>
    </div>
    <div className="flex flex-col items-center justify-center gap-[1.5rem] pt-14 pb-[5.5rem]">
      <div className="text-gray-400 text-md">Feel free to contact me anytimes</div>
      <div className="md:text-5xl text-4xl font-bold tracking-wide pb-2">Get in Touch</div>
      <Loadanimat />
    </div>

    <div className="md:px-[3.5rem] px-[1rem]">
     
      <div className="flex flex-col-reverse  lg:flex-row items-center justify-between">
        {/* contact us */}
        <div className="flex flex-col pt-10 md:pt-0 w-full  items-start justify-start">
        <div className=" tracking-wide pb-[1.5rem] text-xl">Message Me</div>
          {/* form */}
        <form action="" ref={form} onSubmit={sendEmail} className="outline-none w-full">
        <div className="flex flex-col md:flex-row gap-0 md:gap-6 ">
          <input type="text"
           className="bg-[#161616] mb-4 shadow-sm  p-4 outline-none focus:border-[#009E66] focus:border-b-2" 
           name="user_name"
           placeholder="Name"/>
          <input type="email"
           name="user_email" 
           placeholder="Email"  
           className="bg-[#161616] mb-4 w-[100%] shadow-sm p-4  outline-none focus:border-[#009E66] focus:border-b-2" />
        </div>
        
        <div className="name">
          <input 
          type="text" 
          name="Subject"  
          className="bg-[#161616] mb-4 w-[100%] shadow-sm p-4  outline-none focus:border-[#009E66] focus:border-b-2"  
          placeholder="Subject"/>
        </div>
        <div className="name">
          <textarea  
          rows="5"
           cols="2" 
           className="bg-[#161616] w-full mb-4 p-4 shadow-sm  outline-none focus:border-[#009E66] focus:border-b-2" 
           name="message"
           placeholder="Message" id=""></textarea>
        </div>
        <input type="submit" value="Send Message" className="bg-[#1e7031] rounded-full cursor-pointer  px-6 py-2"/>
      </form>
        </div>

        {/* contact info */}
        <div className="flex flex-col pt-2 md:pt-8 relative bottom-0 lg:bottom-[3.5rem] pl-[1rem] lg:pl-[3rem] items-start gap-3 justify-start">
        <div className=" tracking-wide text-2xl pb-2 ">Contact Info</div>
        <h2 className="text-[#848484]  pb-2">
        Always available for freelance work if the right project comes along, Feel free to contact me!
        </h2>
        <div className="">
          {/*  */}
          <div className="flex">
            <div className="text-[#009E66] pr-4 pt-3  "><SiNamecheap size={29} /></div>
            <div className="pl-4  border-[#424141] pb-4 border-l-2 ">
              <div className="font-bold">Name</div>
              <h2 className="text-[#848484] text-sm">Martin Ogbemudia</h2>
            </div>
          </div>
          {/*  */}
          <div className="flex">
            <div className="text-[#009E66] pr-4 pt-5 "><FaMap size={29} /></div>
            <div className="pl-4 pt-3 border-[#424141] py-4  border-l-2 ">
              <div className="font-bold">Location</div>
              <div className="text-[#848484] text-sm">81 Miracle Street, Benin City, Edo State, Nigeria</div>
            </div>
          </div>
          {/*  */}
          <div className="flex">
            <div className="text-[#009E66] pr-4  pt-3 "><IoIosCall size={30}  /></div>
            <div className="pl-4 pt-3 border-[#424141] py-3 border-l-2 ">
              <div className="font-bold">Call Me</div>
              <div className="text-[#848484] text-sm">+234 8131325720</div>
            </div>
          </div>
          {/*  */}
          <div className="flex">
            <div className="text-[#009E66] pr-4 pt-3 "><FaPaperPlane size={29} /></div>
            <div className="pl-4 pt-4 border-[#424141]   border-l-2 ">
              <div className="font-bold">Email Me</div>
              <div className="text-[#848484] text-sm">martin52@gmail.com</div>
            </div>
          </div>
      

        </div>
        </div>
      </div>
 
    </div>
    </div>
  )
}

export default Contact