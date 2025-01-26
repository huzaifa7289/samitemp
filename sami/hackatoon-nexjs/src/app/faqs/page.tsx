import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQs = [
  { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "What is the return policy?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "Do you offer free shipping?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "How do I track my order?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "Do you offer discounts?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "What materials are used in the chairs?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-32 py-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-[30px] sm:text-[35px] md:text-[40px]">Get In Touch With Us</h1>
        <p className="w-full sm:w-[600px] text-[14px] sm:text-[16px] text-center mt-4">
          For more information about our products & services, please feel free to drop us an email.
          Our staff is always ready to help you out. Do not hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {FAQs.map((faq, index) => (
          <div key={index} className="w-full space-y-4 bg-white px-8 py-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-lg">{faq.question}</h1>
              {openIndex === index ? (
                <FaMinus className="text-xl cursor-pointer hover:text-2xl" onClick={() => toggleFAQ(index)} />
              ) : (
                <FaPlus className="text-xl cursor-pointer hover:text-2xl" onClick={() => toggleFAQ(index)} />
              )}
            </div>
            {openIndex === index && <p className="text-sm">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
