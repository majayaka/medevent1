import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'

const contact = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1 }}
    transition={{duration: 1.6, delay: 0.5}}
    >
       <Hero heading='CONTACT'/>
       <Contact />
    </motion.div>
  )
}

export default contact
