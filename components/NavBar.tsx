import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="nav flex justify-between px-10 py-3">
      <Link href="/" className="text-3xl">
        TheShop
      </Link>
      <div className="flex ">
        <Link href="/products" className="px-5 py-2">
          Products
        </Link>
        <Link href="/about" className="px-5 py-2">
          About
        </Link>
      </div>
      <div className="flex">
        <Link href="/login" className="px-3 py-2">
          Login
        </Link>
        <Link href="/cart" className="px-3 py-2">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
