import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SliderData } from './SliderData';



const Slider = ({  }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const slideVariants = {
    enter: { x: '100%', opacity: 0 },
    center: { x: '0%', opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

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
    <motion.div id="references" variants={stagger} className="slider-container relative flex items-center justify-center max-w-[1240px] mx-auto py-12">
      <motion.div className="max-w-[1240px] mx-auto py-12" exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeInUp} className="max-w-[1240px] mx-auto text-center py-10">
          <h2 className="text-4xl font-bold text-[#414382] mb-20">
            NOS REFERENCES
          </h2>
        </motion.div>
        
        <div className="slider-container relative flex items-center justify-center">
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              key={current}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.5 }}
              className="flex space-x-4"
            >
              {SliderData[current].logos && SliderData[current].logos.map((logo, logoIndex) => (
                <div key={logoIndex} className="relative">
                    <div className="w-28 h-20 sm:w-48 sm:h-28">
                        <Image
                            src={logo}
                            alt={`Partner ${logoIndex + 1}`}
                            layout="fill" 
                            objectFit="contain"
                            className="absolute inset-0 w-full h-full"
                        />
                    </div>    
                </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Slider;

