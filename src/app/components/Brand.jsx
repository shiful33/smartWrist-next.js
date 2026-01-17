import React from 'react';

const brands = [
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Samsung", logo: "https://cdn.svglogos.dev/logos/samsung.svg" },
  { name: "Huawei", logo: "https://cdn.svglogos.dev/logos/astro.svg" },
  { name: "Garmin", logo: "https://cdn.svglogos.dev/logos/apidog.svg" },
  { name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: "Fossil", logo: "https://cdn.svglogos.dev/logos/codium.svg" },
  { name: "Fitbit", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Fitbit_logo.svg" },
];

const Brand = () => {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="container px-4 mx-auto mb-10">
        <h2 className="text-2xl font-bold tracking-widest text-center uppercase opacity-80 text-secondary text-shadow-md">
          Trusted by Global Tech Brands
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex w-full">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-16 mx-12 transition-all duration-300 cursor-pointer grayscale opacity-80 hover:grayscale-0 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;