"use client";
import React, { useState } from "react";
import useCart from "@/hooks/useCart";
import CartItems from "@/components/CartItems";

interface FormData {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const page = () => {
  const { items } = useCart();
  let total = 0;

  for (let i in items) {
    total += parseInt(items[i]["latestPrice"]);
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The Bewlow Code can be Updated to interact with the server based on our needs.
    console.log("Form data submitted:", formData);
  };

  // JSX HTML
  return (
    <div className="min-h-screen flex gap-5 justify-center">
      <div className="w-1/2 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
      {/* 
        Checkout page cart view. 
      
      */}
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold py-4">Your Cart: </h1>
        <div className="flex flex-col items-center justify-center bg-white py-5 rounded-lg">
          {items?.map((item) => (
            <CartItems product={item} />
          ))}
        </div>
        <div className="w-2/5 flex justify-end border-t-black mt-5">
          <p className="text-xl">
            <span className="font-semibold">Total Amount:</span> {total} BDT
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
