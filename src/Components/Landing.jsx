import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Herosection() {
  return (
  
    <main className="bg-[url('src/Assests/Key_to_a_door.jpg')] bg-cover bg-center h-screen overflow-auto hide-scrollbar">
      <Navbar/>

      <section className="flex flex-col items-center justify-center h-full bg-black/75 gap-16">
      <div className='justify-center flex flex-col mx-4 backdrop-blur-xl border-white rounded-2xl'> 

            <div className=" text-white text-center text-5xl md:py-24 md:text-9xl">NueKey</div>

                <div className='justify-center flex flex-col mx-4 backdrop-blur-2xl'> 
                    <p className='text-base md:text-xl text-white m-2 text-center '>With every new key comes a new beginning — a home where memories are made and families grow.</p>
                    <p className='text-base md:text-xl text-white m-2 italic text-center '>New Key, New Home, New Life</p>
                    <p className='text-base md:text-xl text-white m-2 text-center'>Welcome to where your story truly begins.</p>
                </div> 

            </div>

      </section>
      <Footer/>
    </main>
  )
}

export default Herosection