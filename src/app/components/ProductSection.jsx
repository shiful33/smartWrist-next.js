"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProductSection = ({ initialProducts }) => {
  const [filter, setFilter] = useState("All");
  const router = useRouter();

  const categories = [
    "All",
    ...new Set(initialProducts?.map((p) => p.title.split(" ")[0])),
  ];

  const filteredProducts =
    filter === "All"
      ? initialProducts
      : initialProducts.filter((p) => p.title.startsWith(filter));

  return (
    <section className="py-16 mb-20 bg-base-200 rounded-3xl">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 mb-10 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold text-secondary">
              Our All Collections
            </h2>
            <p className="mt-2 text-primary">
              Explore premium smart wrist technology
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-white shadow-inner rounded-xl">
            {categories.slice(0, 7).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts?.map((item) => (
            <div
              key={item._id.toString()}
              className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-sm group rounded-2xl hover:shadow-xl"
            >
              <div className="relative flex items-center justify-center h-64 p-6 bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain max-w-full max-h-full transition-transform duration-500 group-hover:scale-110"
                />
                {item.discount > 0 && (
                  <span className="absolute px-3 py-1 text-xs font-bold text-white rounded-full top-4 left-4 bg-primary">
                    -{item.discount}% Off
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-secondary line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-yellow-500">
                    <span>⭐</span>
                    <span className="ml-1 text-gray-600">
                      {item.ratings || 0}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-gray-500 line-clamp-1">
                    <span className="font-semibold text-secondary">
                      Sizes:{" "}
                    </span>
                    {item.sizes || "N/A"}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    <span className="font-semibold text-secondary">
                      Colors:{" "}
                    </span>
                    {item.color || "N/A"}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-xl font-black text-primary">
                    ৳{Number(item.price).toLocaleString()}
                  </span>
                  <button
                    onClick={() => {
                      const isLoggedIn =
                        localStorage.getItem("isLoggedIn") === "true";
                      if (isLoggedIn) {
                        router.push(`/product/${item._id}`);
                      } else {
                        toast.error("Please login to see details!");
                        router.push(`/login?redirect=/product/${item._id}`);
                      }
                    }}
                    className="text-white rounded-lg btn btn-secondary btn-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts?.length === 0 && (
          <div className="py-20 text-center text-gray-400">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
