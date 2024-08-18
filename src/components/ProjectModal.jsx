import React, { useEffect } from 'react';
import { BiX } from 'react-icons/bi';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiGithub } from 'react-icons/fi'
import Carousel from './Carousel';

const ProjectModal = ({ onClose, ProjectInfo , ModalTheme}) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCloseModal = () => {
    onClose(false);
  }

  return (
    <div className='fixed inset-0 bg-opacity-90 z-50 bg-black px-24 py-8 max-md:px-4 max-md:py-4 flex items-center justify-center'>
      <div className="bg-white rounded-xl shadow-lg relative flex flex-col lg:flex-row max-md:h-auto md:w-full max-w-6xl">
        <button
          className='absolute right-4 top-4 max-md:right-0 max-md:top-0 z-50 rounded-full p-2 hover:scale-105 transition-transform text-gray-700 max-md:text-white'
          onClick={handleCloseModal}
        >
          <BiX size={30} />
        </button>

        <div className={`${ModalTheme} flex-1 flex items-center justify-center lg:rounded-l-xl p-8 max-md:rounded-t-xl`}>
          <Carousel list={ProjectInfo.projectImages} />
        </div>

        <div className='flex-1 px-8 py-6 max-md:px-4 max-md:py-4 flex flex-col justify-between'>
          <div className='text-3xl font-bold max-md:mb-2'>{ProjectInfo.projectName}</div>

          <a
            href={`${ProjectInfo.project.DeployedURL || ProjectInfo.project.GitHubURL}`}
            target="_blank"
            rel="noreferrer"
            className='flex justify-center items-center gap-x-2 bg-slate-200 w-28 p-3 rounded-md hover:bg-slate-300 transition-transform transform hover:scale-105 max-md:mb-4'
          >
            {ProjectInfo.project.DeployedURL  ? (
               <>
                <BsBoxArrowUpRight size={18} />
                <span className='text-sm font-medium'>View</span>
               </>
            ) : (
              <>
                <FiGithub size={18}/> 
                <span className='text-sm font-medium'>Github</span>
              </>
            )}
          </a>

          <div className='py-4 text-sm text-gray-700 leading-relaxed overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-auto max-md:h-40 '>
            {ProjectInfo.projectDescription}
          </div>

          <div>
            <div className='font-bold mb-2'>Technologies</div>
            <div className='flex flex-wrap gap-2 overflow-y-auto h-24 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
              {ProjectInfo.projectTechnologies.map((value, index) => (
                <div key={index} className='bg-slate-200 rounded-md text-sm h-10 w-28 flex justify-center items-center gap-x-2 hover:bg-slate-300 transition-transform transform hover:scale-105'>
                  <img src={value.icon} alt="tech-icon" className="h-5 w-auto" />
                  <span>{value.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal;
