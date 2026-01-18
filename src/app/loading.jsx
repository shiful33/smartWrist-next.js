import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Spinner Container */}
      <div className="relative flex items-center justify-center">
        {/* Outer Circle - Primary Color */}
        <div className="w-20 h-20 border-t-4 border-b-4 rounded-full border-primary animate-spin"></div>
        
        {/* Inner Circle - Secondary Color */}
        <div className="absolute w-12 h-12 border-r-4 border-l-4 border-secondary rounded-full animate-[spin_2s_linear_infinite]"></div>
      </div>
      
      {/* Branding Text with Pulse effect */}
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-black tracking-tighter text-secondary">
          SmartWrist<span className="text-primary">.</span>
        </h2>
        
        {/* Loading Progress Bar - Simple Tailwind Animation */}
        <div className="w-48 h-1 mt-4 overflow-hidden bg-gray-100 rounded-full">
          <div className="w-24 h-full bg-primary rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
        
        <p className="mt-4 text-xs font-medium tracking-widest text-gray-400 uppercase">
          Loading Collection
        </p>
      </div>
    </div>
  );
};

export default Loading;