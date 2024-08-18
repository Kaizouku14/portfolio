import React from 'react'
import { contact } from '../utils/Data'

const Contact = () => {
  return (
    <section id='contact' className='py-4 h-auto mx-[13rem] max-md:mx-[2rem] border-b'>
      <div className='text-[2.5rem] font-bold my-10'>Contact<span className='text-sky-600 '>.</span></div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {contact.map((value, index) => (
          <div key={index} className='flex items-center gap-x-2 p-4  rounded-lg'>
            <img src={value.image} alt="contact" className='h-10 w-10 object-contain' />
            <div className='flex flex-col'>
              <p className='text-xs text-gray-600'>{value.text}</p>
              <a href={value.url}
                 target="_blank"
                 rel="noreferrer"
                 className='hover:underline text-base font-medium'>{value.username}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact
