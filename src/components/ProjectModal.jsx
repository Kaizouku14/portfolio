import React, { useEffect } from 'react'
import { BiX } from 'react-icons/bi';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { react } from '../assets'

const ProjectModal = ({ onClose }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCloseModal = () =>{
    onClose(false);
  }

  return (
    <div className='fixed inset-0 bg-opacity-90 z-50 bg-black px-24 py-8 flex items-center max-md:px-4 max-md:py-4'>
    <div className="h-full w-full bg-white rounded-xl shadow-lg relative flex max-md:flex-col max-md:h-auto md:w-full max-md:space-y-4">
    
      <button className='absolute right-5 top-3 max-md:right-3 max-md:top-2 rounded-md hover:bg-gray-100 hover:scale-[1.05] transition-transform'
              onClick={handleCloseModal}>
        <BiX className='text-slate-800' size={30} />
      </button>
  
      <div className='bg-slate-900 max-md:h-44 w-full rounded-s-xl flex-1 flex items-center justify-center max-md:rounded-t-xl'>
        carousel
      </div> 
        
      <div className='w-96 h-44 px-5 max-md:w-full max-md:h-auto max-md:px-4 max-md:py-4'>
        <div className='text-3xl font-bold text-wrap py-9 max-md:py-4'>Task Management</div>
        
        <a href="/" className='flex justify-center items-center gap-x-2 bg-slate-200 w-24 p-2 rounded-md hover:scale-[1.05] transition-transform max-md:w-20 max-md:p-1'>
          <BsBoxArrowUpRight size={15} />
          <span className='text-sm font-medium'>View</span>
        </a>  
  
        <div className='py-7 text-wrap text-sm max-md:py-4'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est eligendi cupiditate reiciendis error. In assumenda voluptatum, 
        </div> 
  
        <div>
          <div className='font-bold mb-2'>Technologies</div> 
            <div className='flex flex-wrap gap-2 overflow-auto h-20'> 
  
              <div className='bg-slate-200 rounded-md text-sm h-11 w-24 flex justify-center items-center gap-x-1'>
                <img src={react} alt="" height='auto' width='25%' />
                React
              </div>
  
            </div>  
        </div>
      </div>   
    </div>
  </div>
  
  )
}

export default ProjectModal