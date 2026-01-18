"use client";
import React from "react";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Anika Rahman",
      role: "Fitness Enthusiast",
      comment:
        "The battery life is insane! I've been using my smart wrist for a week and still have 40% left.",
      image: "https://i.pravatar.cc/150?u=anika",
    },
    {
      id: 2,
      name: "Sajid Ahmed",
      role: "Tech Reviewer",
      comment:
        "Best value for money. The display quality rivals even the most expensive brands in the market.",
      image: "https://i.pravatar.cc/150?u=sajid",
    },
    {
      id: 3,
      name: "Maria Sultana",
      role: "Corporate Executive",
      comment:
        "Elegant design that goes perfectly with my formal outfits. The health tracking features are very accurate.",
      image: "https://i.pravatar.cc/150?u=maria",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-black lg:text-3xl md:text-2xl text-secondary text-shadow-lg">
            What Our Users Say
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-xl group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="avatar">
                  <div className="rounded-full w-14 ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.image} alt={review.name} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{review.name}</h4>
                  <p className="text-xs tracking-wider text-gray-500 uppercase">
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="relative">
                <span className="absolute font-serif text-6xl text-primary/20 -top-8 -left-2">
                  “
                </span>
                <p className="relative z-10 italic text-gray-600">
                  {review.comment}
                </p>
              </div>

              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
