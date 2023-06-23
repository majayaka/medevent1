import React from 'react'
import { motion } from 'framer-motion';

const Logistique = () => {

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
    <motion.div variants={stagger} className="py-10">
        <motion.div
            id="logistique"
            exit={{ opacity:0 }} 
            initial='initial' 
            animate='animate'
        ></motion.div>
        <motion.div 
            variants={fadeInUp}  
            className='max-w-[1240px] mx-auto py-4 text-center '
            >
            <h2 className='text-4xl font-bold text-[#414382] py-24 mt-20'>
                LA LOGISTIQUE
            </h2>
        </motion.div>
            <div className="relative">
                <div className="flex flex-col md:flex-row px-10">
                    <div className="img-side mx-auto">
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
                                    src="/medecin2.png"
                                    alt=""
                                    className="top-1/2 left-1/2"
                                 />
                                </picture>
                                </motion.div>
                            </div>
                    </div>

                    <div className="message-sec-inner flex flex-col md:flex-row">
                        <motion.div 
                        variants={fadeInUp} 
                        className="px-0"
                        >
                            <div className="text-2xl font-bold leading-tight tracking-wide text-[#414382] text-justify-sm textext-justify-sm text-justify-md px-10 pt-10 md:pt-0">
                                MEDevent dispose de produits et matériels de soins agréés aux normes de pharmacovigilance et matério-vigilance :
                            </div>

                            <ul className="list-disc text-white list-inside p-5 sm:px-10 custom-list-marker-color  text-justify-sm text-justify-md" >
                                <li className="text-2xl leading-tight tracking-wide text-[#414382] text-justify-sm text-justify-md"><span className="text-2xl font-bold leading-tight tracking-wide text-[#414382]">une pharmacie, comprenant plus de 100 références, </span> 
                                totalement gracieuse pour les invités, remise au nom de l&apos;organisateur.</li>
                                <li className="text-2xl leading-tight tracking-wide text-[#414382] pt-2 text-justify-sm text-justify-md">
                                    <span className="text-2xl font-bold leading-tight tracking-wide text-[#414382] ">le matériel d&apos;urgence et de réanimation
                                    </span>cardioscope défibrillateur, DSA (Défibrillateur Semi-Automatique), matériel d&apos;intubation, set de petite chirurgie, kit d&apos;immobilisation (matelas coquille), etc.
                                </li>
                                <li className="text-2xl font-bold leading-tight tracking-wide text-[#414382] pt-2 text-justify-sm text-justify-md">
                                    Lots d&apos;oxygène
                                </li>
                                <li className="text-2xl font-bold leading-tight tracking-wide text-[#414382] pt-2 text-justify-sm text-justify-md">
                                    Brancards, fauteuils roulants
                                </li>
                                <li className="text-2xl font-bold leading-tight tracking-wide text-[#414382] pt-2 text-justify-sm text-justify-md">
                                    Ambulances agréées
                                </li>
                                <li className="text-2xl font-bold leading-tight tracking-wide text-[#414382] pt-2 text-justify-sm text-justify-md">
                                    Moyens de communication radio
                                </li>
                                <li className="text-2xl leading-tight tracking-wide text-[#414382] pt-2 text-justify-sm text-justify-md">
                                    <span className="text-2xl font-bold leading-tight tracking-wide text-[#414382]">
                                        Visibilité sur le site d&apos;exposition </span>
                                    grâce à une tenue discrète personnalisée.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>   
            </div>
    </motion.div>
        )
}

export default Logistique
