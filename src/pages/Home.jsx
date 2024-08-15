import React from 'react'
import Header from '../components/Header'
import { splitStringUsingRegex } from '../utils/splitStringUsingRegex'
import { motion } from 'framer-motion'


const name = "Hello I'm Al-v Manda"
const description = "A third-year BSIT student diving into the depths of web development to broaden my knowledge and skills in web development."

const charVariants = {
  hidden : { opacity : 0},
  reveal : { opacity : 1}
}
 const Home = () => {
   const nameChar = splitStringUsingRegex(name);
   const descriptionChar = splitStringUsingRegex(description)

  return (
    <main>
      <Header/>
      <div className='h-[26rem] flex items-center justify-center'>
        <div className='h-38 w-96 flex flex-col items-center gap-y-2 '>
          <div className='text-center'>
            <motion.div 
              initial='hidden' 
              whileInView="reveal" 
              transition={{ staggerChildren : 0.02 }}
              className='text-4xl font-medium text-sky-600'
              >{nameChar.map((char,index) => (
              <motion.span key={index} variants={charVariants} transition={{ duration : 0.5}} >
                 {char}
              </motion.span>
              ))}
            </motion.div>
            <span className='text-sky-800 text-lg'>A web developer</span>
          </div>
          <motion.div 
            initial='hidden' 
            whileInView="reveal" 
            transition={{ staggerChildren : 0.02 }}
            className='text-xs text-center'
            >{descriptionChar.map((char,index) => (
              <motion.span key={index} variants={charVariants} transition={{ duration : 0.5}} >
                 {char}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>
    </main>
  )
}

export default Home