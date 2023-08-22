import React from "react";
import { products } from "@/constants/products";

interface pageProps {
  params: { productId: string };
}

const page = ({ params }: pageProps) => {
  const ID = params.productId;
  const Product = products.filter((el) => el._id === ID)[0];
  return (
    <div className="min-h-screen">
      <div className="w-full flex flex-1 justify-center gap-10 mt-16 px-20">
        <div className="w-1/2 flex justify-end">
          <img src={Product.image} className="h-80 rounded-lg" />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl">{Product.productTitle}</h1>
          <p className="text-lg pt-5">
            <span className="font-medium">Price:</span> {Product.latestPrice}{" "}
            BDT
          </p>
          <p className="text-sm py-2">
            <span className="font-semibold">Description:</span> Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Laborum, ut ullam!
            Vitae iusto officia voluptate illo quo! Corporis impedit aliquam
            repudiandae perspiciatis accusantium porro, cum, deserunt hic libero
            facere aliquid.
          </p>
          <button className=" bg-orange-500 w-full rounded-lg h-10 font-medium hover:bg-orange-600 mt-5">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="w-full px-48 mt-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, ut
        ullam! Vitae iusto officia voluptate illo quo! Corporis impedit aliquam
        repudiandae perspiciatis accusantium porro, cum, deserunt hic libero
        facere aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Laborum, ut ullam! Vitae iusto officia voluptate illo quo!
        Corporis impedit aliquam repudiandae perspiciatis accusantium porro,
        cum, deserunt hic libero facere aliquid. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Laborum, ut ullam! Vitae iusto officia
        voluptate illo quo! Corporis impedit aliquam repudiandae perspiciatis
        accusantium porro, cum, deserunt hic libero facere aliquid.
      </div>
    </div>
  );
};

export default page;
