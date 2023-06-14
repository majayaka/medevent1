import React from 'react'


const Contact = () => {
  return (
    <div id='contact' className='max-w-[1240px] m-auto p-20 h-screen'>
     <h2  className='text-center text-4xl font-bold text-[#414382] m-8 py-10'>CONTACTEZ-NOUS</h2>
    <form className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
            <input className='border shadow-lg p-3' type="text" placeholder='Nom'/>
            <input className='border shadow-lg p-3' type="email" placeholder='Email'/>
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Sujet'/>
        <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
        <button className='border shadow-lg p-3 w-full mt-2 text-[#414382] font-bold text-xl'>ENVOYER</button>
    </form>
    </div>
 
  )
}

export default Contact

