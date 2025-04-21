import React from 'react'
import { motion } from "framer-motion";
function Navbar() {
  return (
    <div className='navdiv'>
        <motion.h1 whileHover={{ translateY: -20}} initial={{scale: 0 , opacity: 0}} animate={{scale: 1, opacity: 1}} className='heading'>Good Morning, Pritiman</motion.h1>
    </div>
  )
}

export default Navbar
