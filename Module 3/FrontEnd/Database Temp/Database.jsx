import { createContext, useState } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "Apples", quantity: 10 },
    { name: "Bananas", quantity: 3 },
    { name: "Oranges", quantity: 0 },
  ]);

  const addProduct = (name, quantity) => {
    setProducts([...products, { name, quantity: Number(quantity) }]);
  };

  const deleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  const updateProduct = (index, newQuantity) => {
    const updated = [...products];
    updated[index].quantity = Number(newQuantity);
    setProducts(updated);
  };

  return (
    <InventoryContext.Provider
      value={{ products, addProduct, deleteProduct, updateProduct }}
    >
      {children}
    </InventoryContext.Provider>
  );
};