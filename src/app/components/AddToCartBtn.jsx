"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";
import { RiShoppingCartLine } from "react-icons/ri";

const AddToCartBtn = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product) return toast.error("Product data missing!");
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="flex flex-wrap w-full gap-4 p-2 pt-4 border-2 border-blue-200 border-dashed">
      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center flex-1 min-w-[160px] gap-2 py-4 font-bold text-white bg-secondary rounded-2xl hover:bg-black active:scale-95 cursor-pointer"
      >
        <RiShoppingCartLine className="text-xl" />
        Add To Cart
      </button>
      <button className="flex-1 min-w-[160px] py-4 font-bold text-white bg-primary rounded-2xl hover:opacity-90 active:scale-95 cursor-pointer">
        Buy Now
      </button>
    </div>
  );
};

export default AddToCartBtn;