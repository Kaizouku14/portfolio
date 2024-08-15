import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center mx-4 px-6">
      <motion.div className="text-lg text-sky-600"
        initial={{ x: "-50%", opacity : 0}}
        animate={{ x: "15%", opacity: 1 }}  
        transition={{ duration : 1.5}}
      >
         My Portfolio
      </motion.div>
      <nav>
         <ol className="text-white flex justify-evenly w-96">
            <li>
              <Link className="group text-sky-600 transition duration-300" to="/">Home
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
                ></span>
              </Link>
            </li>
            <li>
              <Link className="group text-sky-600 transition duration-300" to="/about">About
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
                ></span>
              </Link>
            </li>
            <li>
            <Link className="group text-sky-600 transition duration-300" to="/projects">Projects
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
                ></span>
              </Link>
            </li>
            <li>
              <Link className="group text-sky-600 transition duration-300" to="/contact">Contact
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
                ></span>
              </Link>
            </li>
         </ol>  
      </nav> 
    </header>
  )
}

export default Header