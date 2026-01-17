import React from "react";
import Logo from "../layouts/Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";


const Navbar = () => {

    const nav = (
        <div className="text-lg md:flex">
         <li>
            <NavLink href={"/"}>Home</NavLink>
         </li>
         <li>
            <NavLink href={"/all-watches"}>All Watches</NavLink>
         </li>
        </div>
    )

  return (
    <div>
      <div className="shadow-sm navbar bg-base-100">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {nav}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            {nav}
          </ul>
        </div>
        <div className="flex gap-4 navbar-end">
          <Link href={"/cart"}>
          <RiShoppingCart2Fill className="text-xl text-primary"/>
          </Link>
          <Link href={"/login"} className="mr-4 btn btn-outline btn-primary">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
