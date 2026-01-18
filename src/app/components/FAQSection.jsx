"use client";
import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "Are your smartwatches water-resistant?",
      answer:
        "Yes, most of our premium models come with IP68 or 5ATM water resistance, making them safe for swimming and rain.",
    },
    {
      id: 2,
      question: "How long does the battery typically last?",
      answer:
        "Depending on usage, our watches typically last between 5 to 10 days on a single charge with normal use.",
    },
    {
      id: 3,
      question: "Do you offer a warranty on your products?",
      answer:
        "Absolutely! Every purchase comes with a 1-year official brand warranty and a 7-day easy replacement policy.",
    },
    {
      id: 4,
      question: "Is it compatible with both iOS and Android?",
      answer:
        "Yes, our smartwatches connect seamlessly via Bluetooth with both iOS (iPhone) and Android devices using our dedicated app.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-black md:text-3xl text-secondary text-shadow-lg">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-100 collapse collapse-plus bg-gray-50 rounded-2xl"
            >
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked={faq.id === 1}
              />
              <div className="text-xl font-bold collapse-title text-secondary">
                {faq.question}
              </div>
              <div className="text-gray-600 collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
