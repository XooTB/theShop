"use client";
import React from "react";
import { products } from "@/constants/products";
import DashProductTile from "@/components/DashProductTile";
import Link from "next/link";
import { Add } from "@mui/icons-material";

const page = () => {
  return (
    <div className="my-5 mx-5">
      <div className="flex justify-between items-center">
        <h1 className=" text-3xl font-semibold text-left my-5">All products</h1>
        <Link href="/dashboard/products/new">
          <button className="px-3 py-1 mr-2 h-10 bg-blue-500 hover:bg-blue-600 rounded-xl">
            <Add />
            Add
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product, i) => (
          <DashProductTile product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
