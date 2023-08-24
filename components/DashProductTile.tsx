import React from "react";
import { ProductInterface } from "@/interfaces/product";

interface DashProductTile {
  image: string;
  title: string;
  price: number;
  description: string;
}

const DashProductTile = ({ product }: ProductInterface) => {
  return (
    <div className="bg-gray-800 w-80 text-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.productTitle}
        className=" w-40 mb-4 rounded-lg"
      />
      <h2 className="text-base font-semibold mb-2">{product.productTitle}</h2>
      <p className="text-gray-300 mb-2">${product.latestPrice}</p>
      <p className="text-gray-400 text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque
        iste delectus vel
      </p>
      <div className="flex gap-2">
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
          Edit Product
        </button>
        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default DashProductTile;
