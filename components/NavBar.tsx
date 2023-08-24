"use client";

import React from "react";
import Link from "next/link";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useLogout } from "@/hooks/useLogout";

const NavBar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="nav flex justify-between px-10 py-3">
      <Link href="/" className="text-3xl font-semibold">
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
      <div className="flex justify-center">
        {!user && (
          <Link
            href="/login"
            className="px-3 py-2 hover:bg-blue-500 rounded-lg"
          >
            Login
          </Link>
        )}
        {user && (
          <>
            <button
              onClick={handleClick}
              className="hover:bg-red-500 px-3 py-1 rounded-lg"
            >
              Logout
            </button>
            <Link
              href="/dashboard"
              className="px-3 py-2 hover:bg-blue-500 rounded-lg"
            >
              Dashboard
            </Link>
          </>
        )}
        <Link href="/cart" className="px-3 py-2">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
