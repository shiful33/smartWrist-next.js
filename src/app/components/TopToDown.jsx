"use client";
import React, { useState, useEffect } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const TopToDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="transition-all duration-300 border-2 border-white shadow-2xl btn btn-primary btn-circle hover:scale-110 active:scale-95 animate-bounce"
          aria-label="Scroll to top"
        >
          <RiArrowUpSLine className="text-3xl text-white" />
        </button>
      )}
    </div>
  );
};

export default TopToDown;
