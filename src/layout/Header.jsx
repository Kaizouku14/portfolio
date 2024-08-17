import { motion } from "framer-motion"
import React, { useState } from 'react'

const links = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const menuVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.9 }
};

const buttonVariants = {
  open: { rotate: 45 },
  closed: { rotate: 0 }
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-20 flex justify-between items-center mx-[13rem] max-md:mx-[2rem]">
      <motion.div className="text-xl font-bold text-sky-600 flex items-center"
          initial={{ opacity: 0, x: "-15%" }} // Initial state when the element is hidden
          whileInView={{ opacity: 1, x: "1%" }} // State when the element is in view
          transition={{ duration: 2}}
      >
        <img src="icon.png" alt="icon" height='auto' width='10%' />
        <span>Manda</span>
      </motion.div>
      <nav>
         <motion.ol 
           initial={{ y: "100%", opacity : 0}}
           whileInView={{ y: "0%", opacity: 1 }}  
           transition={{ duration : 2}}
           className="text-white flex justify-evenly w-96 max-md:hidden">

            {links.map((value, index) => (
              <a key={index} className="group text-sky-600 transition duration-300 cursor-pointer" href={value.href} >{value.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
                ></span>
              </a>
            ))}         
         </motion.ol>  

         <motion.div
            animate={open ? "open" : "closed"}
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className={`${open ? 'fixed inset-0 text-sky-600 bg-opacity-75 flex items-center justify-center z-50' : 'hidden' }`}
          >
            <div className="w-full max-w-3xl p-4 bg-white h-full md:h-auto relative">
              <motion.button
                className="text-sky-600 w-10 h-10 absolute right-4 top-7 focus:outline-none"
                onClick={() => setOpen(!open)}
                variants={buttonVariants}
                transition={{ duration: 0.3 }}
              >
                <span className="sr-only">Close menu</span>
                <div className="block w-5 relative">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current rota transform transition duration-500 ease-in-out ${open ? 'rotate-90' : '-translate-y-1.5'}`}
                  />
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}
                  />
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-1' : 'translate-y-1.5'}`}
                  />
                </div>
              </motion.button>

              <ul className="flex flex-col justify-center items-center space-y-6 mt-20">
                {links.map((value, index) => (
                  <a key={index} 
                        className="group text-sky-600 transition duration-300" 
                        href={value.href}
                        onClick={() => setOpen(!open)}
                  >
                    {value.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                  </a>
                ))}
              </ul>
            </div>
          </motion.div>

        <motion.button 
             initial={{ x: "100%", opacity : 0}}
             animate={{ x: "0%", opacity: 1 }}  
             transition={{ duration : 2}}
             className="hidden max-md:block text-sky-600 w-10 h-10 relative focus:outline-none"
              onClick={() => setOpen(!open)}
            >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}
              />
              <span aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}
              />
              <span aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}
              />
            </div>
        </motion.button>    
      </nav> 
    </header>
  )
}

export default Header