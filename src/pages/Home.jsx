import React from 'react'
import { splitStringUsingRegex } from '../utils/splitStringUsingRegex'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter';
import { FiGithub } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { name , description,  charVariants } from '../utils/Data'

const Home = () => {
   const nameChar = splitStringUsingRegex(name);
   const descriptionChar = splitStringUsingRegex(description);

  return (
    <section id='home'> 
      <div className='h-[30rem] flex items-center justify-center'>
        <div className='h-38 flex flex-col items-center gap-y-2 '>

          <div className='text-center'>
            <motion.div 
              initial='hidden' 
              whileInView="reveal" 
              transition={{ staggerChildren : 0.02 }}
              className='text-5xl font-bold text-sky-600'
              >{nameChar.map((char,index) => (
              <motion.span key={index} variants={charVariants} transition={{ duration : 0.5}} >
                 {char}
              </motion.span>
              ))}
            </motion.div>

            <div className='text-sky-800 text-xl font-medium'>
              <span>
               A{' '} 
               <Typewriter
                  words={['Web developer', 'Apprentice', 'Learner', 'Student']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
             </div>
          </div>

          <motion.div 
              initial='hidden' 
              whileInView="reveal" 
              transition={{ staggerChildren : 0.02 }}
              className='text-sm text-center w-[21rem]'
              >{descriptionChar.map((char,index) => (
                <motion.span key={index} variants={charVariants} transition={{ duration : 0.5}} >
                  {char}
                </motion.span>
              ))}
           </motion.div>
  
            <div className='flex items-center gap-x-3 mt-4'>
              <a href='https://github.com/Kaizouku14' className='flex px-8 py-2.5 gap-x-2 bg-black text-white rounded-full hover:scale-[1.05] transition-transform'
                 target="_blank"
                 rel="noreferrer"
              >
                <FiGithub size={20}/> 
                <span className='font-semibold'>Github</span>
              </a>

              <a href='#contact' className='flex px-8 py-2.5 gap-x-2 bg-[rgb(243,243,243)] bg-opacity-100 rounded-full hover:scale-[1.05] transition-transform'>
                <BiMessageSquareDetail size={20}/> 
                <span className='font-semibold'>Contact</span>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home