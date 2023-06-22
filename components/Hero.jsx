import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'react-typed';
import { motion } from 'framer-motion';

const Hero = ({ is404Page }) => {
  return (
    <motion.div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img' 
    exit={{opacity: 0}}
    initial={{opacity: 0}}
    animate={{opacity: 1 }}
    >
      {/* Overlay */}
      <div className='absolute overlay top-0 left-0 bottom-0 text-center' />
      <div className="md:p-3 sm:p-5 pt-10 z-[8] mt-[-5rem] items-center text-center">
        {is404Page ? (
          <div className='mx-auto text-center'>
            <h1 className='text-8xl font-bold text-[#15b3f2] py-24'>
              404
            </h1>
            <h2 className='text-4xl font-bold text-[#15b3f2] py-24'>
              PAGE NON TROUVÉE
            </h2>
            <Link href='/'>
              <button className='px-8 py-2 border-2 text-white font-bold'>RETOURNER À PAGE D&apos;ACCUEIL</button>
            </Link>
          </div>
        ) : (
          <>
            <Link href='/'>
              <motion.div className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
              }}>
              <Image className="text-center" src="/logo-c.png" alt="Logo" width={100} height={100} />
              </motion.div>
            </Link>
            <div>
              <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
              duration: 0.8,
              delay: 1.0,
              ease: [0, 0.71, 0.2, 1.01]
              }}>
                <h2 className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#15b3f2] text-center'>
                  Le partenaire MEDical de votre événement
                </h2>
              </motion.div>
              <p className='py-5 md:text-2xl sm:text-xl texl-l text-white '>
                Présent en France et à l&apos;étranger, MEDevent s&apos;adresse aux :
              </p>
              <p className='py-5 md:text-3xl sm:text-2xl texl-xl text-[#15b3f2] font-bold'>  
                <Typed strings={[
                  'Responsables de Parc d&apos;Exposition',
                  'Organisateurs de Salons',
                  'Organisateurs d&apos;événements sportifs, culturels, récréatifs',
                  'Responsables de séminaires, conventions, congrès, soirées, etc'
                ]}
                typeSpeed={50}
                backSpeed={5}
                loop />
              </p>
              <Link href='/contact/#contact'>
                <button className='px-8 py-2 border-2 text-white font-bold'>CONTACTEZ-NOUS</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Hero;
