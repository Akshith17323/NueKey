import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {AlignJustify} from 'lucide-react'
import '../index.css';
import '../App.css';

function Navbar() {
  const navigate = useNavigate()
  const[menu,setMenu] = useState(false)

  return (
    <div className='flex justify-center '>
        <nav className='fixed z-50 flex justify-between md:justify-between  mt-2.5 py-1 px-4 w-[90vw] backdrop-blur-lg bg-transparent  color-[#282E24]  rounded-xl  border'>
            <div className='flex md:hidden items-center' onClick={()=> {setMenu(!menu)}}><AlignJustify/></div>
            <div className='logo text-2xl sm:flex sm:justify-center sm:items-center'><a href="/">NueKey</a></div>
            <div className='md:flex hidden gap-4 items-center cursor-pointer'>
              <a onClick={(e)=>{e.preventDefault(); navigate('/hero')}}>Home</a>
              <a className="link-item nav-animate cursor-pointer">Wishlist</a>
              <a className='link-item nav-animate cursor-pointer'>About Us</a>
              <a className="link-item nav-animate cursor-pointer">Contact Us</a>
            </div>
            <div className='flex gap-1'>
                <button className=" cursor-pointer nav-animate  rounded-lg h-8 px-3 border border-black hover:bg-white hover:text-stone-950 transition" 
                onClick={(e)=>{
                  e.preventDefault()
                  navigate('/signin')
                }}>
                SignIn
                </button>
            </div>
            {menu && (
              <div className='absolute -left-1 gap-4 rounded-2xl top-11 flex flex-col bg-white/45 transition-all duration-600 ease-in backdrop-blur-xl p-4 items-center'>
                <p onClick={(e)=>{
                e.preventDefault()
                navigate('/hero')
                setMenu(false)
              }
              }>Home</p>
                <p className="link-item nav-animate" onClick={(e)=> {
                  e.preventDefault()
                  setMenu(false); 
                  console.log('menu hidden')}}>Wishlist</p>
                <a className='link-item nav-animate' onClick={(e)=> {e.preventDefault() 
                  setMenu(false)}}>About Us</a>
                <a className="link-item nav-animate" onClick={(e)=> {e.preventDefault()
                  setMenu(false)}}>Contact Us</a>
            </div>
            )}
        </nav>
    </div>
  );
}

export default Navbar;