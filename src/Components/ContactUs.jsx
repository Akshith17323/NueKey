import React from 'react'
import Contactform from './Contactform'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,FaGithub } from 'react-icons/fa';

function ContectUs() {
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <section className='flex flex-col max-w-md p-6 rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white mt-4 justify-center '>
        <Contactform/>
        <div className="flex space-x-6 mt-8">
            <a href="https://www.facebook.com/" className="hover:text-white transition"><FaFacebookF size={24} />Facebook</a>
            <a href="https://x.com/" className="hover:text-white transition"><FaTwitter size={24} />Twitter</a>
            <a href="https://www.linkedin.com/" className="hover:text-white transition"><FaLinkedinIn size={24} />Linkedin</a>
            <a href="https://www.instagram.com/" className="hover:text-white transition"><FaInstagram size={24} />Instagram</a>
            <a href="https://github.com/Akshith17323/NueKey" className="hover:text-white transition"><FaGithub size={24} />Github</a>
        </div>
      </section>
    </main>
  )
}

export default ContectUs