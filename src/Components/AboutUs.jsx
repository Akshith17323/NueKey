import React from 'react'
import TechStacks from './TechStacks'
import UpcomingFeatures from './UpcomingFeatures'
import Footer from './Footer'
import FAQSection from './FAQs'
import Testimonials from './Testimonials'

function AboutUs() {
  return (
    <main>
        <div className="w-full max-w-3xl mx-auto p-6 mt-24  rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white">
            <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
            <p className="text-white/90 leading-7 text-center">
                Welcome to NueKagi – your trusted destination for finding the perfect home.
                We are a real estate platform committed to simplifying your property search.
                Whether you’re looking to rent, buy, or invest, we provide a seamless and transparent experience. Our mission is to make real estate accessible, secure, and efficient for everyone.
            </p>
        </div>
        <TechStacks/>
        <FAQSection/>
        <Testimonials/>
        <UpcomingFeatures/>

        <Footer/>
    </main>
  )
}

export default AboutUs