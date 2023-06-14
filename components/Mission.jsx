import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {

  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {

    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easing,
      }
    } 
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }


  return (
    <motion.div variants={stagger} >
    <motion.div id="mission" exit={{ opacity:0 }} initial='initial' animate='animate'>
        <motion.div variants={fadeInUp} className='max-w-[1240px] mx-auto text-center py-10'>
          <h2 className='text-4xl font-bold text-[#414382] py-20'  >
            NOTRE MISSION
          </h2>
        </motion.div>
        <div className="relative">
          <div className="flex flex-col md:flex-row">
            <div className="img-side mx-auto sm:max-w-none">
              <div className="message-sec-img md:ms-10 md:w-2/3">
                <div className="d-flex justify-items-center py-10">
                  <motion.div 
                    variants={fadeInUp}
                    className="overflow-hidden max-w-[300px] sm:max-w-none mx-auto" style={{ borderRadius: '40px' }}>
                    <picture>
                      <motion.img
                      initial={{y: 60, opacity: 0}}
                      animate={{y: 0, opacity: 1}}
                      transition={{ duration: 1.2}}
                       src="/flo.jpg" alt="" className="w-full h-auto" />
                    </picture>
                  </motion.div>
                  <div className="message-sec-name d-flex justify-items-center">
                      <p className=" text-xl pt-2 text-[#414382] text-center">Floriane Majault</p>
                      <p className='message-sec-name text-xl text-center text-[#15b3f2]'>Gérante</p>
                  </div>
                </div>
                <div className="d-flex justify-items-center py-10">
                  <motion.div 
                    variants={fadeInUp}
                    className="overflow-hidden max-w-[300px] sm:max-w-none mx-auto" style={{ borderRadius: '40px' }}>
                    <picture>
                      <motion.img
                      initial={{y: 60, opacity: 0}}
                      animate={{y: 0, opacity: 1}}
                      transition={{ duration: 1.2}} 
                      src="/phi.jpg" alt="" className="w-full h-auto" />
                    </picture>
                  </motion.div>
                  <div className="message-sec-name d-flex justify-items-center">
                      <p className=" text-xl pt-2 text-[#414382] text-center">Philippe Bouillard</p>
                      <p className='message-sec-name text-xl text-center text-[#15b3f2]'>Directeur Médical</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div variants={fadeInUp} className="px-0 sm:px-20 pt-5 sm:pt-0">
              <div className='p-10'>
                <h3 className="move sec-ttl text-justify-sm text-justify-md text-3xl font-bold text-white">Créée en 2003, MEDevent est une société spécialisée dans la médicalisation d&apos;événements. MEDevent assure la sécurité médicale des événements.</h3>
              </div>
              <motion.div variants={fadeInUp} >
                <div className='px-10'>
                  <span className="text-2xl font-bold leading-tight tracking-wide text-[#414382]">Notre rôle consiste à :</span>
                </div>
                <ul className="p-10 list-disc text-justify-sm text-justify-md text-[#414382] list-inside custom-list-marker-color" style={{ listStyleType: 'decimal' }}>
                  <li className="text-justify-sm text-justify-md text-xl pt-4">
                  <span className="pt-4 text-xl font-bold leading-tight tracking-wide text-[#414382]">
                  anticiper les éventuels pathologies, </span>
                  selon le caractère de la manifestation, et élaborer un cahier des charges avec les organisateurs.
                  </li>
                  <li className="text-justify-sm text-justify-md text-xl pt-4">
                  <span className="pt-4 text-xl font-bold leading-tight tracking-wide text-[#414382]">
                  mettre en place une équipe médicale adaptée </span>(médecin, infirmier, kinésithérapeute, secouriste …) ainsi des lots de premiers secours et de réanimation.
                  </li>
                  <li className="text-justify-sm text-justify-md text-xl pt-4">
                  <span className="pt-4 text-xl font-bold leading-tight tracking-wide text-[#414382]">
                  prendre en charge immédiatement le patient </span>et débuter les premiers soins sur place.
                  </li>
                  <li className="text-justify-sm text-justify-md text-xl pt-4">
                  <span className="pt-4 text-xl font-bold leading-tight tracking-wide text-[#414382]">
                  prévenir les organismes concernés </span>(pompiers, SAMU, hôpitaux …) afin d&apos;éviter toute perte de temps en cas de problème et assurer la continuité des soins jusqu&apos;à leur arrivée.
                  </li>
                  <li className="text-justify-sm text-justify-md text-xl pt-4">
                  <span className="pt-4 text-xl font-bold leading-tight tracking-wide text-[#414382]">
                  gérer des éventuels évacuations </span>vers les hôpitaux ou cliniques.
                  </li>
                  <li className="text-justify-sm text-justify-md text-xl pt-4">
                  <span className="pt-4 text-xl font-bold leading-tight tracking-wide text-[#414382]">
                  organiser, pour les événements à l&apos;étranger, le retour anticipé </span>ou le rapatriement sanitaire.
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    
  );
};


export default Mission;