import React, { useState } from "react";

const faqs = [
  {
    question: "How can I search for properties on NueKey?",
    answer: "Use the search bar on the homepage to filter properties by location, BHK, price range, and amenities. Click 'View Details' on any listing to learn more.",
  },
  {
    question: "Can I schedule a visit to a property?",
    answer: "Yes! Once you find a property you like, click on the 'Schedule Visit' button in the property details page or contact the agent directly.",
  },
  {
    question: "Are all the listings verified?",
    answer: "We thoroughly verify listings before publishing to ensure you see only genuine properties with real images, amenities, and pricing.",
  },
  {
    question: "How can I save properties I like?",
    answer: "Click the heart icon on any Property Card to add it to your wishlist. You can access all saved properties from your profile.",
  },
  {
    question: "Is there a fee for using NueKey?",
    answer: "No, browsing and shortlisting properties is completely free. We may charge for premium services like personalized agent support.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12  backdrop-blur-lg  text-white" id="faqs">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        {faqs.map((item, idx) => (
          <div key={idx} className="border border-white/20 rounded-lg bg-black/30 shadow-md">
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
            >
              <span className="font-medium text-lg">{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="p-4 border-t border-white/10 text-white/80">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;