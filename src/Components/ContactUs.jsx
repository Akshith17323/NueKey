import React from 'react'
import Contactform from './Contactform'

function ContectUs() {
  return (
    <main className='flex'>
        <Contactform/>
        <div className="flex space-x-6">
            <a href="https://www.facebook.com/" className="hover:text-white transition"><FaFacebookF size={24} /></a>
            <a href="https://x.com/" className="hover:text-white transition"><FaTwitter size={24} /></a>
            <a href="https://www.linkedin.com/" className="hover:text-white transition"><FaLinkedinIn size={24} /></a>
            <a href="https://www.instagram.com/" className="hover:text-white transition"><FaInstagram size={24} /></a>
        </div>
    </main>
  )
}

export default ContectUs