import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../App.css';

function Navbar() {
  const navigate = useNavigate()

  return (
    <div className='flex justify-center '>
        <nav className='fixed z-50 flex justify-between  mt-2.5 py-1 px-4 w-[90vw] backdrop-blur-lg bg-transparent  text-white  rounded-xl  border '>
            <div className='logo text-2xl'>NueKey</div>
            <div className='flex gap-4 items-center'>
                <a onClick={(e)=>{
                e.preventDefault()
                navigate('/hero')
              }
              }>Home</a>
                <a className="link-item nav-animate">Wishlist</a>
                <a className='link-item nav-animate'>About Us</a>
                <a className="link-item nav-animate">Contact Us</a>
            </div>
            <div className='flex gap-1'>
                <button className="nav-animate bg-stone-950 rounded-lg h-8 px-3 border border-white hover:bg-white hover:text-stone-950 transition">
                Login
                </button>
            </div>

        </nav>
    </div>
  );
}

export default Navbar;