"use client";
import React from "react";
import {
  RiTruckLine,
  RiShieldCheckLine,
  RiCustomerService2Line,
  RiRefund2Line,
} from "react-icons/ri";

const Features = () => {
  const featureList = [
    {
      id: 1,
      icon: <RiTruckLine className="text-4xl text-primary" />,
      title: "Free Shipping",
      desc: "Free delivery on all orders over ৳5000",
    },
    {
      id: 2,
      icon: <RiShieldCheckLine className="text-4xl text-primary" />,
      title: "2 Years Warranty",
      desc: "Authentic products with official brand warranty",
    },
    {
      id: 3,
      icon: <RiCustomerService2Line className="text-4xl text-primary" />,
      title: "24/7 Support",
      desc: "Dedicated support team for your assistance",
    },
    {
      id: 4,
      icon: <RiRefund2Line className="text-4xl text-primary" />,
      title: "Easy Returns",
      desc: "7-day easy return policy for any issues",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featureList.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center p-6 text-center transition-shadow border border-gray-100 rounded-2xl hover:shadow-lg bg-gray-50/50"
            >
              <div className="p-4 mb-4 bg-white rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-secondary">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
