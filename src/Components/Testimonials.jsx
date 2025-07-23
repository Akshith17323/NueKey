import React from "react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "First-time Home Buyer",
    message:
      "NueKey made the home search so simple. I found my dream 2BHK within a week and the agent helped me schedule visits smoothly. Highly recommended!",
  },
  {
    name: "Ananya Verma",
    role: "Working Professional",
    message:
      "As someone moving cities, I was nervous about renting remotely. The verified listings and virtual tours were a lifesaver.",
  },
  {
    name: "Siddharth Patel",
    role: "Real Estate Investor",
    message:
      "I use NueKey to spot high-yield properties. The platform’s filters and property insights help me make quick and smart investment decisions.",
  },
  {
    name: "Meera Joshi",
    role: "Tenant",
    message:
      "Love the wishlist feature! I shortlisted 5 properties and compared all amenities side-by-side before finalizing. Smooth UX and genuine listings.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12  backdrop-blur-md text-white">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="border border-white/20 rounded-2xl bg-black/30 p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <p className="text-lg italic text-white/80">"{t.message}"</p>
            <div className="mt-4">
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-white/60">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;