import React from 'react'

function Contactform() {
  return (
    <div className='flex flex-col items-center justify-center  backdrop-blur-xl gap-16 w-1/2'>
        <div className='text-center text-4xl text-white'>Get in touch </div>
        <form className='flex flex-col w-[90%] gap-2'>

            <label htmlFor='name' className='text-white'>Name</label>
            <input type='name' id='name' placeholder='Your name' className='bg-transparent border-b-2 border-b-white text-stone-600 '/>

            <label htmlFor='email' className='text-white'>Email</label>
            <input type='email' id='email' placeholder='Your email' className='bg-transparent border-b-2 border-b-white text-stone-600 pb-1 pl-1'/>

            <label htmlFor='message' className='text-white'>Message</label>
            <textarea type='message' id='message' placeholder='Your Message' className='bg-transparent text- text-stone-700 h-30 pb-1 pl-1 border-2 border-white'/>

            <button type='submit' className='text-white bg-stone-950 rounded-lg h-8 px-3 border border-white hover:bg-white hover:text-stone-950'>Submit Details</button>
        </form>
    </div> 
  )
}

export default Contactform