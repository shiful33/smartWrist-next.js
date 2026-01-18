"use client";
import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-base-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Side: Image Content */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10 overflow-hidden border-8 border-white shadow-2xl rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Smart Watch"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute w-48 h-48 rounded-full -bottom-6 -right-6 bg-primary/10 -z-0 blur-3xl"></div>
            <div className="absolute w-32 h-32 rounded-full -top-6 -left-6 bg-secondary/10 -z-0 blur-2xl"></div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
            <h4 className="text-sm font-bold tracking-widest uppercase text-primary">
              Since 2025
            </h4>
            <h2 className="text-[20px] font-black leading-tight lg:text-4xl md:text-3xl text-secondary text-shadow-lg">
              Redefining the Future of{" "}
              <span className="text-primary">Wrist Wear.</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              At smartWrist, we believe a watch is more than just a timekeeper.
              It's a statement of style, a health companion, and a bridge to
              your digital world.
            </p>
            <p className="pl-4 italic text-gray-500 border-l-4 border-primary">
              "Crafting perfection for those who value every second of their
              journey."
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4 lg:justify-start">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-secondary">10k+</span>
                <span className="text-sm font-medium text-gray-500">
                  Happy Users
                </span>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-secondary">50+</span>
                <span className="text-sm font-medium text-gray-500">
                  Premium Models
                </span>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/all-watches"
                className="px-8 font-bold text-white transition-all rounded-full btn btn-primary hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
