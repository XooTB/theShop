import React from "react";
import { ProductInterface } from "@/interfaces/product";
import useCart from "@/hooks/useCart";

const CartItems = ({ product }: ProductInterface) => {
  const { deleteItem } = useCart();

  const handleClick = () => {
    deleteItem(product);
  };

  return (
    <div className="flex px-2 py-3 rounded-lg my-1 w-3/4 border-[1px] border-black bg-slate-700">
      <div className="w-1/6 h-full">
        <img src={product.image} className=" h-20" />
      </div>
      <div className="text-white w-4/6 h-full">
        <h1>{product.productTitle}</h1>
        <p>Price: {product.latestPrice} BDT</p>
      </div>
      <div className="w-1/6 flex items-center justify-center">
        <button
          className=" bg-red-500 hover:bg-red-700 rounded-xl px-3 py-2 justify-self-end"
          onClick={handleClick}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItems;
