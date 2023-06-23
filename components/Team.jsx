import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
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
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div variants={stagger}>
      <motion.div
        id="lequipe"
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      ></motion.div>
      <motion.div
        variants={fadeInUp}
        className="max-w-[1240px] mx-auto py-4 text-center "
      >
        <h2 className="text-4xl font-bold text-[#414382] py-24 mt-20">
          L&apos;EQUIPE
        </h2>
      </motion.div>
      <div className="relative">
        <div className="flex flex-col md:flex-row-reverse px-10">
          <div className="img-side mx-auto ">
            <div className="message-sec-img">
                <motion.div
                  variants={fadeInUp}
                  className="overflow-hidden max-w-[300px] max-h-[500px] sm:max-w-none mx-auto"
                  style={{ borderRadius: '20px' }}
                >
                  <picture>
                    <motion.img
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      src="/team2.png"
                      alt=""
                      className="top-1/2 left-1/2"
                    />
                  </picture>
                </motion.div>
            </div>
          </div>

            <div className="message-sec-inner flex flex-col md:flex-row px-10">
            <motion.div
                variants={fadeInUp}
                className="text-justify px-0 sm-px-20  pt-20 md:pt-0"
            >
                <ul
                className="list-disc text-white list-inside sm:px-10 text-justify"
                style={{ listStyleType: 'none' }}
                >
                    <li className="text-2xl leading-tight tracking-wide text-[#414382] text-justify">
                        <span className='text-2xl font-bold leading-tight tracking-wide text-[#414382] '>
                        L&apos;équipe médicale est composée de professionnels,
                        médecins et infirmiers </span>
                         issus des services d&apos;urgence, des SAMU et de la
                        réanimation ainsi que de médecins ostéopathes, de
                        kinésithérapeutes et de secouristes.
                    </li>
                    <li className="text-2xl font-bold leading-tight tracking-wide text-justify text-[#414382] pt-20 md:pt-5">
                        Tous pratiquent une langue étrangère (anglais, espagnol,
                        allemand) et la médicalisation d&apos;événements depuis de
                        nombreuses années.
                    </li>
                    <li className="text-2xl leading-tight tracking-wide text-justify text-[#414382] pt-20 md:pt-5">
                    Afin de créer un climat de fidélité et de confiance, et dans
                    la mesure du possible les équipes mises à disposition des
                    organisateurs sont les mêmes.
                    </li>
                    <li className="text-2xl font-bold leading-tight tracking-wide text-justify text-[#414382] pt-20 md:pt-5">
                    MEDEvent collabore également avec les associations de secours
                    agréées et les moyens publics de secours (Samu, Pompiers).
                    </li>
                </ul>
            </motion.div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
