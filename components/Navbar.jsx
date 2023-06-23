import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Image from 'next/image';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('#039bdb');

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#414382')
            } else {
                setColor('transparent')
                setTextColor('#039bdb')
            }
        };
        window.addEventListener('scroll', changeColor)
    }, []);


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
            <Link href='/'>
                <div className="flex items-center"> 
            <Image src="/logo-tr_n.png" alt="Logo" width={200} height={100} /> 
                </div>
            </Link>
            <ul style={{color:`${textColor}`}} className='hidden sm:flex '>
                <li className='p-4 text-l'>
                    <Link href='/'>ACCUEIL</Link>
                </li>
                <li className='p-4 text-l'>
                    <Link href='/#mission'>NOTRE MISSION</Link>
                </li>
                <li className='p-4 text-l'>
                    <Link href='/work/#lequipe'>L&apos;EQUIPE</Link>
                </li>
                <li className='p-4 text-l'>
                    <Link href='/work/#logistique'>LA LOGISTIQUE</Link>
                </li>
                <li className='p-4 text-l'>
                    <Link href='/#references'>NOS REFERENCES</Link>
                </li>
                <li className='p-4 text-l'>
                    <Link href='/contact/#contact'>CONTACT</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='sm:block sm:hidden z-10'>
                {nav ? (    
                <AiOutlineClose size={20} style={{color:`${textColor}`}}/>
                ) : (
                     <AiOutlineMenu size={20} style={{color:`${textColor}`}}/>
                )}
            </div>
            {/* Mobile Menu */}
            <div className={
                nav 
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-600 text-center ease-in dration-300' 
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-600 text-center ease-in dration-300'
                }
            >
                <ul>
                <li onClick={handleNav} className='p-4 text-4xl text-[#15b3f2] hover:text-[#414382]'>
                    <Link href='/'>ACCUEIL</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl text-[#15b3f2] hover:text-[#414382]'>
                    <Link href='/#mission'>NOTRE MISSION</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl text-[#15b3f2] hover:text-[#414382]'>
                    <Link href='/work/#lequipe'>L&apos;EQUIPE</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl text-[#15b3f2] hover:text-[#414382]'>
                    <Link href='/work/#logistique'>LA LOGISTIQUE</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl text-[#15b3f2] hover:text-[#414382]'>
                    <Link href='/#references'>NOS REFERENCES</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl  text-[#15b3f2] hover:text-[#414382]'>
                    <Link href='/contact/#contact'>CONTACT</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
