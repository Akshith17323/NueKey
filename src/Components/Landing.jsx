import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Contactform from "./Contactform";
import FeatureProducts from "./FeatureProducts";
import PropertyCard from "./PropertyCard";
import SearchBar from "./SearchBar";
import UpcomingFeatures from "./UpcomingFeatures";

function Landing() {
  return (
    <main className="bg-[url('src/Assests/Key_to_a_door.jpg')] bg-cover bg-center h-screen overflow-auto hide-scrollbar ">
      <section className="flex items-center justify-center h-full gap-16  md:flex-col rounded">
        <div className="justify-center flex flex-col mx-4 backdrop-blur-xl border-white rounded-2xl h-[40%]">
          {/* <div className=" text-white text-center text-5xl md:py-24 md:text-9xl">NueKey</div> */}

          <div className="justify-center flex flex-col mx-4 backdrop-blur-2xl items-center ">
            <p className="text-base text-bold md:text-xl color-[#282e24] m-2 italic text-center">
              New Key, New Home, New Life
            </p>
            <p className="text-base md:text-xl color-[#282E24] m-2 text-center ">
              With every new key comes a new beginning — a home where memories
              are made and families grow.
            </p>
            
            <p className="text-base md:text-xl color-[#282e24] m-2 text-center">
              Welcome to where your story truly begins.
            </p>
            <button className="color-[#282e24]  rounded-lg h-8 px-3 border border-black hover:bg-white hover:text-stone-950  max-w-60 ">
                SignUp
            </button>
          </div>
          
        </div>
        
        
      </section>
      <section className="flex flex-col items-center">
      <FeatureProducts/>
      <Contactform />
      <UpcomingFeatures/>
      <Footer/>
      </section>
    </main>
  );
}

export default Landing;
