import React from 'react'
import IgImg1 from '../public/bateau1.jpg'
import IgImg2 from '../public/bateau2.jpg'
import IgImg3 from '../public/bateau3.jpg'
import IgImg4 from '../public/bateau4.jpg'
import LinkedinImg from './Linkedinning'
import { motion } from 'framer-motion';
import Link from 'next/link';


const Linkedin = () => {

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <motion.div id="evenements" variants={stagger} className="slider-container relative flex items-center justify-center max-w-[1240px] mx-auto py-12">
      <motion.div className="max-w-[1240px] mx-auto py-12" exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeInUp} className="max-w-[1240px] mx-auto text-center py-10">
          <h2 className="text-4xl font-bold text-[#414382] mb-20">
            EVENEMENTS
          </h2>
          <div className='px-16 text-justify md-10'>
              <h3 className="text-2xl font-bold text-white pt-2">
              MEDEVENT MET LES VOILES ...
            </h3>
              <p className="text-[#414382] text-justify-sm text-justify-md text-xl pt-10 sm:pt-4">
                <span className="text-[#414382] text-xl font-bold">MEDevent, partenaire sur la solitaire du Figaro</span> affiche ses couleurs sur la ligne de départ depuis 2007. Plus d&apos;info sur <Link className="font-bold" href='https://www.lasolitaire.com/'>www.lasolitaire.com</Link>
              </p>
              <p className="text-[#414382] text-justify-sm text-justify-md text-xl pt-10 sm:pt-4">
                <span className="text-[#414382] font-bold">Impliquée dans le milieu de la voile depuis de nombreuses années,</span> <span className='text-[#414382] font-bold text-xl'>MEDevent médicalise depuis 2005 la Transat 6.50 Charente-Maritime/Bahia,</span> course mythique qui regroupe 100 skippers et relie la Rochelle à Salvador de Bahia au Brésil. 4200 kms sur un bateau des 6.50 mètres en solitaire et sans assistance.
    Retrouvez les infos sur <Link className="font-bold" href='http://www.transat650.org/'>www.transat650.org</Link>
              </p>
          </div>


          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-16'>
            <LinkedinImg socialImg={IgImg1} />
            <LinkedinImg socialImg={IgImg2} />
            <LinkedinImg socialImg={IgImg3} />
            <LinkedinImg socialImg={IgImg4} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Linkedin
