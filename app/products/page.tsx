import React from "react";
import { products } from "../../constants/products";
import ProductTile from "@/components/ProductTile";
import { ProductInterface } from "@/interfaces/product";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="text-3xl font-semibold flex items-center justify-center my-10">
        Our catalog:
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <ProductTile product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
