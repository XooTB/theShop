"use client";
import React from "react";
import Link from "next/link";
import { Customer } from "@/interfaces/customer";

interface CustomerCardProps {
  customer: Customer;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-1/5">
      <Link href={`/dashboard/customers/${customer.id}`}>
        <h2 className="text-xl font-semibold">{customer.name}</h2>
        <p className="text-gray-600 truncate">{customer.email}</p>
        <p className="text-gray-600">{customer.phone}</p>
        <p className="text-gray-400 mt-2">Customer ID: {customer.id}</p>
      </Link>
    </div>
  );
};

export default CustomerCard;
