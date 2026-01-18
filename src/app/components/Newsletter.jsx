"use client";
import React from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast.success("Thanks for subscribing to our newsletter!");
      e.target.reset();
    }
  };

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="relative bg-secondary rounded-[40px] p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 -mt-20 -mr-20 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 -mb-10 -ml-10 rounded-full bg-white/5 blur-2xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="mb-6 text-2xl font-black text-white md:text-3xl lg:text-4xl">
              Don't Miss the{" "}
              <span className="text-primary text-shadow-lg">Latest Drops!</span>
            </h2>
            <p className="mb-10 text-lg text-gray-300">
              Subscribe to get exclusive offers, early access to new smart wrist
              technology, and luxury lifestyle tips directly in your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col max-w-lg gap-4 mx-auto sm:flex-row"
            >
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full border-none shadow-inner input input-bordered input-lg rounded-2xl focus:outline-primary"
                required
              />
              <button
                type="submit"
                className="px-10 font-bold text-white transition-transform btn btn-primary btn-lg rounded-2xl hover:scale-105"
                cart-icon
              >
                Join Now
              </button>
            </form>

            <p className="mt-6 text-xs text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
