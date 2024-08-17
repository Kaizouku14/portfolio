import React from 'react'
import { motion } from 'framer-motion'
import { chrome, 
css, 
figma, 
git, 
github, 
html, 
javascript, 
mysql, 
node, 
npm, 
vscode, 
canva,
react, 
typescript,
express,
java,
mongodb,
vite,
eclipse,
intellij,
c,
cplus,
chash} from '../assets'

const skills = [
  { tech : 'HTML' , img : html },
  { tech : 'CSS' , img : css },
  { tech : 'JavaScript', img : javascript },
  { tech : 'TypeScript', img : typescript },
  { tech : 'Express.js', img : express },
  { tech : 'React.js', img : react },
  { tech : 'Java', img : java },
  { tech : 'C', img : c },
  { tech : 'C++', img : cplus},
  { tech : 'C#', img : chash },
  { tech : 'MongoDB', img : mongodb },
  { tech : 'Vite', img : vite },
  { tech : 'Eclipse', img : eclipse },
  { tech : 'Intellij', img : intellij },
  { tech : 'Github', img : github },
  { tech : 'Git', img :  git },
  { tech : 'Vscode' , img : vscode },
  { tech : 'npm' , img : npm },
  { tech : 'Node.js' , img : node },
  { tech : 'MySQL' , img : mysql },
  { tech : 'Chrome Devtools' , img : chrome },
  { tech : 'Figma' , img : figma },  
  { tech : 'Canva' , img : canva }, 
]


const Skills = () => {
  return (
    <section id='skills' className='py-4 h-auto mx-[13rem] max-md:mx-[2rem] mb-10 '>
       <div className='text-[2.5rem] font-bold'>Skills<span className='text-sky-600'>.</span></div>
       <motion.p className='my-8 text-gray-500 font-light text-base max-md:text-lg'
                 initial={{ opacity: 0, x: "-7%" }} 
                 whileInView={{ opacity: 1, x: "0%" }} 
                 transition={{ duration: 2}}
       >Technologies and tools</motion.p>

       <div className='flex w-full justify-start items-center '>
          <motion.ul className='flex flex-wrap gap-4 max-md:gap-2.5'
              initial={{ y: "25%", opacity : 0}}
              whileInView={{ y: "0%", opacity: 1 }}  
              transition={{ duration : 2}}
          >
             {skills.map((value, index) => (
                <li key={index}
                   className='relative flex justify-center items-center h-[5.5rem] w-[5.5rem] rounded-lg bg-gray-100 overflow-hidden group'>
                <img
                  className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 transition-all duration-300 ease-in-out 
                            md:group-hover:-bottom-[5px] md:group-hover:right-0 md:group-hover:translate-x-0 md:group-hover:translate-y-0 
                            md:group-hover:opacity-[.3] max-md:object-contain max-md:translate-x-1/2 max-md:translate-y-1/4 max-md:w-[35%]'
                  src={value.img}
                  alt='JavaScript Logo'
                  height='auto'
                  width='45%'
                  loading='lazy'
                />
                <span className='absolute opacity-0 transition-opacity duration-300 ease-in-out text-xs
                                  md:group-hover:opacity-100 md:group-hover:translate-y-1/4
                                  max-md:opacity-100 max-md:bottom-2.5 text-center'>
                  {value.tech}
                </span>
              </li>
             ))}
          </motion.ul>
       </div>
      
    </section>
  )
}

export default Skills