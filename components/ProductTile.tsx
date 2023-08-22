"use client";
import React from "react";
import { ProductInterface } from "@/interfaces/product";
import Link from "next/link";
import useCart from "@/hooks/useCart";

const ProductTile = ({ product }: ProductInterface) => {
  const { addItem } = useCart();
  const handleClick = () => {
    addItem(product);
  };

  return (
    <div className="w-1/5 h-96 flex flex-col items-center px-5 bg-slate-200 py-5 rounded-lg shadow-md">
      <Link href={`/products/${product._id}`}>
        <img src={product.image} className="w-full rounded-lg pb-2" />
      </Link>
      <div>
        <Link href={`/products/${product._id}`}>
          <h3 className="text-lg font-medium truncate w-64 hover:text-gray-700 cursor-pointer">
            {product.productTitle}
          </h3>
        </Link>
        <p className="text-base font-normal">
          Price: {product.latestPrice} BDT
        </p>
      </div>
      <button
        className=" bg-orange-500 w-full rounded-lg h-10 font-medium hover:bg-orange-600 mt-5"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductTile;
