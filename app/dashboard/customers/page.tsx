"use client";
import React from "react";
import { customers } from "@/constants/customers";
import CustomerCard from "@/components/CustomerCard";
import { Add } from "@mui/icons-material";
import Link from "next/link";

const page = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center px-10 pb-5">
        <h1 className="text-3xl text-left my-4">All Customers</h1>
        <Link href="/dashboard/customers/new">
          <button className="px-3 py-1 h-10 bg-blue-500 hover:bg-blue-600 rounded-xl">
            <Add />
            Add Customer
          </button>
        </Link>
      </div>
      <div className=" flex flex-wrap gap-2 justify-center">
        {customers &&
          customers.map((customer, i) => (
            <CustomerCard customer={customer} key={i} />
          ))}
      </div>
    </div>
  );
};

export default page;
