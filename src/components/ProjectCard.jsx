import React, { useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import ProjectModal from './ProjectModal';

const ProjectCard = ({ ProjectImage, Data , ProjectLink , CardColor}) => {
  const [openDialog, setOpenDialog] = useState(false);

   const handleDialog = () => {
     setOpenDialog(!openDialog);
   }

  return (
    <>
     <div 
         className='flex flex-col gap-y-2 h-[22rem] w-[28rem] rounded-xl p-4 '>
          <div className={`${CardColor} h-72 rounded-3xl flex justify-center items-center px-5 cursor-pointer`}
           onClick={handleDialog} 
        >
          <img 
              src={ProjectImage} 
              // height='auto' 
              // width='90%' 
              alt="ewan"
              className='hover:scale-[1.05] transition-transform duration-300 rounded-xl h-52 w-fit  '
          />
        </div>

        <div className='flex justify-between items-center px-1 '>
        <div>
            <h1 className='text-md font-medium'>{Data.projectName}</h1>
            <p className='text-gray-600 text-sm max-md:text-xs'>{Data.projectText}</p>
        </div>
            <a href={ProjectLink} 
               target="_blank"
               rel="noreferrer"
               className='bg-slate-200 h-8 py-1 px-2 rounded-md hover:text-white hover:bg-black ml-3'>
                <FiGithub size={20}/> 
            </a>
        </div> 
    </div>
    
     {openDialog && (
        <ProjectModal onClose={(e) => setOpenDialog(e)} ProjectInfo={Data} ModalTheme={CardColor} />
      )}
    </>
  )
}

export default ProjectCard