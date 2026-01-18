"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { RiDeleteBinLine, RiAddLine, RiSubtractLine } from "react-icons/ri";

const CartPage = () => {
  const { cart, removeFromCart, isMounted, addToCart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (!isMounted) return null;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold text-gray-400">
          Your cart is empty!
        </h2>
        <Link href="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="mb-10 text-3xl font-black text-secondary">
        Shopping Cart ({cart.length})
      </h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Product List */}
        <div className="space-y-6 lg:col-span-2">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex flex-col items-center justify-between gap-4 p-6 bg-white border border-gray-100 shadow-sm sm:flex-row rounded-2xl"
            >
              <div className="flex items-center gap-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-24 h-24 p-2 bg-gray-50 rounded-xl"
                />
                <div>
                  <h3 className="text-lg font-bold text-secondary line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-black text-primary">
                    ৳{item.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {/* Quantity Controls */}
                <div className="flex items-center overflow-hidden border border-gray-200 rounded-lg">
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <RiSubtractLine />
                  </button>
                  <span className="px-4 font-bold">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <RiAddLine />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="p-2 text-red-500 transition-colors rounded-lg hover:bg-red-50"
                >
                  <RiDeleteBinLine size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="sticky p-8 bg-white border border-gray-100 shadow-sm rounded-3xl h-fit top-24">
          <h2 className="mb-6 text-xl font-bold text-secondary">
            Order Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>৳{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span className="font-medium text-green-500">Free</span>
            </div>
            <div className="flex justify-between pt-4 text-xl font-black border-t text-secondary">
              <span>Total</span>
              <span>৳{subtotal.toLocaleString()}</span>
            </div>
          </div>
          <button className="w-full py-4 mt-8 font-bold text-white transition-all shadow-lg bg-primary rounded-2xl hover:opacity-90 shadow-primary/20">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
