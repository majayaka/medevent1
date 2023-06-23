import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Mission from '../components/Mission';
import { SliderData } from '../components/SliderData';
import { AnimatePresence } from 'framer-motion';
import { ScrollContainer } from 'react-scroll-motion';



export default function Home() {
  return (
    <div>
      <AnimatePresence mode='wait'>
        <Head>
        <title>MEDevent</title>
        <meta name="description" content="Le site de MEDevent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ScrollContainer>
        <Mission />
      </ScrollContainer>
      <Slider slides={SliderData}/>
      </AnimatePresence>  
    </div>
  );
}
