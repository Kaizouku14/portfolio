import React, { useState } from 'react'
import { IoIosArrowDown,  IoIosArrowUp  } from "react-icons/io";
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { projects , cardColor} from '../utils/Data';

const Projects = () => {
   const [seeMore, setSeeMore] = useState(false);
   const handleSeeMoreButton = () => setSeeMore(!seeMore);

  return (
    <section id='projects' className='py-4 h-auto mx-[13rem] max-md:mx-[2rem] '>
      <div className='text-[2.5rem] font-bold my-10'>Projects<span className='text-sky-600 '>.</span></div>
    
      <motion.div className={`${seeMore ? 'h-auto' : 'h-[47rem]'} flex flex-wrap gap-y-10 justify-center overflow-hidden `} 
          initial={{ y: "15%", opacity : 0}}
          whileInView={{ y: "0%", opacity: 1 }}  
          transition={{ duration : 2}}
       > 
          {projects.map((value,index) => (
              <ProjectCard key={index} 
                           ProjectImage={value.ProjectImage} 
                           Data={value.Data} 
                           ProjectLink={value.ProjectLink} 
                           CardColor={cardColor[index]}
              />
          ))}
      </motion.div>

        <div className='flex justify-center mt-2'>
          <button 
              className='flex items-center px-8 py-2.5 gap-x-2 bg-[rgb(243,243,243)] bg-opacity-100 rounded-full hover:scale-[1.05] transition-transform'
              onClick={handleSeeMoreButton}
            >
              {seeMore ? (
                <>   
                  <IoIosArrowUp size={20}/> 
                  <span className='font-semibold'>See Less</span>
                </>
              ) : (
                <>
                 <IoIosArrowDown size={20}/> 
                 <span className='font-semibold'>See More</span>
                </>
              )}
            </button>
        </div>
    </section>
  )
}

export default Projects