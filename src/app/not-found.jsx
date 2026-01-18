import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white">
      <div className="relative">
        <h1 className="font-black text-gray-100 text-[150px] sm:text-[200px] leading-none">
          404
        </h1>
        <p className="absolute inset-0 flex items-center justify-center mt-10 text-2xl font-bold text-secondary">
          Oops! Page Not Found
        </p>
      </div>

      <p className="max-w-md mt-4 text-gray-500">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="px-8 mt-8 transition-all rounded-full shadow-lg btn btn-primary hover:shadow-xl"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
