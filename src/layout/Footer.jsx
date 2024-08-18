import { motion } from 'framer-motion';
import React from 'react'
import { links } from '../utils/Data'

const Footer = () => {
    return (
      <footer className='py-6 h-auto mx-[13rem] max-md:mx-[2rem] border-b max-w-screen-xl px-4 sm:px-6 mt-[5rem]'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='text-xl font-bold text-sky-600 flex items-center'>
            <img src="icon.png" alt="icon" height='auto' width='10%' />
            <span>Manda</span>
          </div>
          <nav>
            <motion.ol
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 2 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              {links.map((value, index) => (
                <li key={index}>
                  <a
                    className="relative group text-base font-medium transition duration-300 "
                    href={value.href}
                  >
                    {value.name}
                    <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  </a>
                </li>
              ))}
            </motion.ol>
          </nav>
        </div>
        <div className='mt-6 border-t  pt-4 text-center text-gray-500 text-sm'>
          <span>@Copyright all rights reserved</span>
        </div>
      </footer>
    );
  }
  
  export default Footer;