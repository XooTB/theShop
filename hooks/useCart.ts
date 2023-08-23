"use client";

import { useAtom } from "jotai";
import { useEffect } from "react";
import { cartAtom } from "@/atoms/cartAtom";
import { productInterface1 } from "@/interfaces/product";

const useCart = () => {
  const [items, setItems] = useAtom(cartAtom);

  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    if (items) {
      setItems(JSON.parse(items));
    }
  }, []);

  const addItem = (item: productInterface1) => {
    localStorage.setItem("cartItems", JSON.stringify([...items, item]));
    setItems([...items, item]);
  };

  const deleteItem = (item: productInterface1) => {
    const filteredList = items.filter((el) => el._id !== item._id);
    localStorage.setItem("cartItems", JSON.stringify(filteredList));
    setItems(filteredList);
  };

  return { items, addItem, deleteItem };
};

export default useCart;
