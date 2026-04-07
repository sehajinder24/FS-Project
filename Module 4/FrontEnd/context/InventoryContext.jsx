import { createContext, useState } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "Product A", quantity: 10 },
    { name: "Product B", quantity: 6 },
    { name: "Product C", quantity: 5 },
    { name: "Product D", quantity: 3 },
    { name: "Product E", quantity: 2 },
    { name: "Product F", quantity: 1 },
    { name: "Product G", quantity: 0 },
  ]);

  const addProduct = (name, quantity) => {
   const qty = Number(quantity);
   if (qty < 0) {
	alert("Cannot Add negative Quantity");
	return;
  }
   setProducts([...products, { name, quantity: qty }]);
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