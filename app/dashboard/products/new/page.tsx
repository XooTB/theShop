"use client";
import React, { useState } from "react";

interface AddProductFormProps {
  onAddProduct: (product: Product) => void;
}

interface Product {
  title: string;
  price: number;
  description: string;
}

const page = ({ onAddProduct }: AddProductFormProps) => {
  const [product, setProduct] = useState<Product>({
    title: "",
    price: 0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({
      title: "",
      price: 0,
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={product.title}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3 bg-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium mb-1">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3 bg-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3 bg-gray-100"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Add Product
      </button>
    </form>
  );
};
