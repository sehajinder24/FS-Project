import { createContext, useState, useEffect } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
	useEffect(() => {
	  fetch("http://localhost:8080/products")
	    .then((res) => res.json())
	    .then((data) => {
	      setProducts(data);
	    })
	    .catch((err) => console.log(err));
	}, []);

const addProduct = (name, quantity) => {
  const qty = Number(quantity);

  if (!name || qty < 0) return;

  fetch("http://localhost:8080/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      quantity: qty,
      threshold: 5,
    }),
  })
    .then((res) => res.json())
    .then((newProduct) => {
      setProducts((prev) => [...prev, newProduct]);
    });
};

const deleteProduct = (id) => {
  fetch(`http://localhost:8080/products/${id}`, {
    method: "DELETE",
  }).then(() => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  });
};


  const updateProduct = (id, newQuantity) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, quantity: Number(newQuantity) } : p
    );
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