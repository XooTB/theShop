import React from "react";
import { products } from "../../constants/products";
import ProductTile from "@/components/ProductTile";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="text-3xl font-semibold flex items-center justify-center my-10">
        Our catalog:
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product, i) => (
          <ProductTile product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
