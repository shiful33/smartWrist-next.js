"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Logo from "../layouts/Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiLogoutBoxRLine, RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  const { cart, isMounted } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkStatus = () => {
      const auth = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(auth);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    document.cookie =
      "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  const navLinks = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/all-watches">All Watches</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink href="/add-item">+ Add Item</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full shadow-sm bg-base-100/80 backdrop-blur-md">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 font-medium"
            >
              {navLinks}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="hidden navbar-center lg:flex">
          <ul className="gap-2 px-1 font-medium menu menu-horizontal">
            {navLinks}
          </ul>
        </div>

        <div className="gap-2 navbar-end md:gap-4">
          <Link
            href="/cart"
            className="relative p-2 rounded-full hover:bg-gray-100"
          >
            <RiShoppingCartLine className="text-2xl text-secondary" />
            {isMounted && cart.length > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-primary rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="btn btn-error btn-outline btn-sm rounded-xl"
            >
              <RiLogoutBoxRLine /> Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-white btn btn-secondary btn-sm rounded-xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
