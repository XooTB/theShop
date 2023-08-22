import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";
import { productInterface1 } from "@/interfaces/product";

const useCart = () => {
  const [items, setItems] = useAtom(cartAtom);

  const addItem = (item: productInterface1) => {
    setItems([...items, item]);
  };

  const deleteItem = (item: productInterface1) => {
    const filteredList = items.filter((el) => el._id !== item._id);
    setItems(filteredList);
  };

  return { items, addItem, deleteItem };
};

export default useCart;
