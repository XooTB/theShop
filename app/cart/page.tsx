"use client";
import React, { useState, useEffect } from "react";
import CartItems from "@/components/CartItems";
import useCart from "@/hooks/useCart";
import Link from "next/link";

const page = () => {
  const { items, addItem, deleteItem } = useCart();
  let total = 0;

  for (let i in items) {
    total += parseInt(items[i]["latestPrice"]);
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center mb-4">
      <h1 className="text-3xl text-left my-5">Cart:</h1>
      {items.length ? (
        <>
          <div className="flex flex-col items-center justify-center w-3/5 bg-white py-5 rounded-lg">
            {items?.map((item, i) => (
              <CartItems product={item} key={i} />
            ))}
          </div>
          <div className="w-2/5 flex justify-end border-t-black mt-5">
            <p className="text-xl">
              <span className="font-semibold">Total Amount:</span> {total} BDT
            </p>
          </div>
          <div className="w-2/5 flex justify-end my-5">
            <Link href="/cart/checkout">
              <button className="px-3 py-2 bg-blue-400 hover:bg-blue-600 text-base rounded-lg">
                Checkout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="mt-5">
          <p>Sorry, the cart is empty! :(</p>
        </div>
      )}
    </div>
  );
};

export default page;
