import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../App.css';

function Navbar() {


  return (
    // <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-2.5 p-2">
    //   <div className="navbar-expand w-[90vw]">
    //     <div className="flex items-center justify-between bg-stone-950 w-full h-12 rounded-lg logo-animate border border-white px-5">
    //       <a className="text-white text-xl font-semibold">NueKey</a>

    //       <nav className="w-1/2 flex justify-between items-center text-white text-lg">
    //         <a>Home</a>
    //         <a className="link-item nav-animate">Contact Us</a>
    //         <a className="link-item nav-animate">Wishlist</a>
    //         <a className='link-item nav-animate'>About Us</a>


    //     <div className='flex gap-1'>
    //         <button className="nav-animate bg-stone-950 rounded-lg h-8 px-3 border border-white hover:bg-white hover:text-stone-950 transition">
    //           Login
    //         </button>
    //         <button className="nav-animate bg-stone-950 rounded-lg h-8 px-3 border border-white hover:bg-white hover:text-stone-950 transition">
    //           SignUp
    //         </button>
    //     </div>
    //       </nav>
          
    //     </div>
    //   </div>
    // </div>
    <nav className='fixed z-50 flex justify-center mt-2.5 p-2 w-[90vw] bg-stone-950 text-white'>
        <div className=''>NueKey</div>
        <a>Home</a>
        <a className="link-item nav-animate">Contact Us</a>
        <a className="link-item nav-animate">Wishlist</a>
        <a className='link-item nav-animate'>About Us</a>
    <div className='flex gap-1'>
        <button className="nav-animate bg-stone-950 rounded-lg h-8 px-3 border border-white hover:bg-white hover:text-stone-950 transition">
          Login
        </button>
        <button className="nav-animate bg-stone-950 rounded-lg h-8 px-3 border border-white hover:bg-white hover:text-stone-950 transition">
          SignUp
        </button>
    </div>

    </nav>
  );
}

export default Navbar;