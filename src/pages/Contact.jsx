import React from 'react'
import { facebook, github, instagram, mail, tiktok } from '../assets'

const contact = [
  { image: mail, text: 'Send me an email: ', username: 'mandaalv72@gmail.com', url: 'https://mail.google.com/' },
  { image: github, text: 'My Github account: ', username: 'Kaizouku14', url: 'https://github.com/Kaizouku14' },
  { image: tiktok, text: 'My TikTok account: ', username: '@itz.kallis', url: 'https://www.tiktok.com/@itz.kallis' },
  { image: instagram, text: 'My Instagram Account: ', username: '@zyalv.m', url: 'https://www.instagram.com/zyalv.m' },
  { image: facebook, text: 'My Facebook Account: ', username: 'Al-v Manda', url: 'https://www.facebook.com/alv.manda.3/' }
]

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
