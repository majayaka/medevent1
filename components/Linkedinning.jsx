import Image from 'next/image'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';



const Linkedinning = ({ socialImg }) => {
  return (
    <div className='relative'>
      <Image 
      src={socialImg} 
      alt='/' 
      className='w-full h-full'  
      layout='responsive'
      /> 
      {/* Overlay */}
      <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
       <Link href="https://www.linkedin.com/company/medevent-france/">
          <p className='text-gray-300 hidden group-hover:block'>
            <FaLinkedin size={30} />
          </p>
        </Link> 
      </div>
    </div>
  );
}

export default Linkedinning
