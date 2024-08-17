import React, { useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import ProjectModal from './ProjectModal';

const ProjectCard = ({ Id, ProjectImage, Data}) => {
  const [openDialog, setOpenDialog] = useState(false);

   const handleDialog = () => {
     setOpenDialog(!openDialog);
   }

  return (
    <>
     <div key={Id}
         onClick={handleDialog}
         className='flex flex-col gap-y-2 h-[22rem] w-[28rem] rounded-xl p-4'>
        <div className='bg-slate-900 h-72 rounded-3xl flex items-center px-5 cursor-pointer'>
        <img 
            src={ProjectImage} 
            height='auto' 
            width='100%' 
            alt="ewan"
            className='hover:scale-[1.05] transition-transform duration-300'
        />
        </div>

        <div className='flex justify-between items-center px-1'>
        <div>
            <h1 className='text-md font-medium'>{Data.projectName}</h1>
            <p className='text-gray-600 text-sm max-md:text-xs'>{Data.projectDescription}</p>
        </div>
            <button className='bg-slate-200 h-8 py-1 px-2 rounded-md hover:text-white hover:bg-black'>
                <FiGithub size={20}/> 
            </button>
        </div> 
    </div>
    
     {openDialog && (
        <ProjectModal onClose={(e) => setOpenDialog(e)}/>
      )}
    </>
  )
}

export default ProjectCard