import React, { useState } from 'react';

const Contact = () => {

const [messageSent, setMessageSent] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setMessageSent(true);
    }

    e.target.reset();
    

    e.stopPropagation();

  };

  return (
    <div id='contact' className='max-w-[1240px] m-auto p-20 h-screen'>
     <h2  className='text-center text-2xl sm:text-4xl font-bold text-[#414382] m-8 py-1 sd:py-10'>CONTACTEZ-NOUS</h2>
    <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-2'>
            <input className='border shadow-lg p-3' type="text" name="name" placeholder='Nom'/>
            <input className='border shadow-lg p-3' type="email" name="email" placeholder='Email'/>
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" name="subject" placeholder='Sujet'/>
        {messageSent && 
          <div className='text-green-500 text-center'>Votre message a été bien envoyé.</div>
        }
        <textarea
          className='border shadow-lg p-3 w-full'
          cols="30" rows="10"
          name="message"
          placeholder='Message'
          disabled={messageSent}
        />
        <button className='border shadow-lg p-3 w-full mt-2 text-[#414382] font-bold text-xl' >ENVOYER
        </button>
    </form>
    </div>
 
  )
}

export default Contact

