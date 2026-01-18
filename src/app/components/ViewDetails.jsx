import React from "react";
import { RiStarFill, RiShieldCheckLine } from "react-icons/ri";
import AddToCartBtn from "./AddToCartBtn";

const ViewDetails = ({ product }) => {
  if (!product) return null;

  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="grid grid-cols-1 gap-12 p-8 bg-white border border-gray-100 shadow-sm lg:grid-cols-2 rounded-3xl">
        {/* Image Section */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center w-full p-10 border border-gray-100 bg-gray-50 rounded-2xl">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[400px] object-contain"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-[22px] font-black text-secondary">
              {product.title}
            </h1>
            <p className="mt-1 font-semibold text-primary">
              {product.bangla || "Premium Smart Watch"}
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center text-yellow-500">
              <RiStarFill className="mr-1" /> {product.ratings} (
              {product.reviews || 0} Reviews)
            </div>
            <span>| {product.sold || 0} Sold</span>
          </div>

          <div className="text-[22px] font-black text-secondary">
            ৳{product.price?.toLocaleString()}
          </div>

          <div className="pt-4 space-y-2 text-sm border-t">
            <p>
              <strong>Sizes:</strong> {product.sizes || "N/A"}
            </p>
            <p>
              <strong>Colors:</strong> {product.color || "N/A"}
            </p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* Features */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {product.info?.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 text-sm bg-gray-50 rounded-xl"
              >
                <RiShieldCheckLine className="mr-2 text-primary" /> {item}
              </div>
            ))}
          </div>

          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
