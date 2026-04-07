import { useState } from "react";

export default function Suppliers() {
  const products = ["Rice", "Wheat", "Sugar"];
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="flex gap-10">
      
  
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">Supplier Products</h2>
        {products.map((p, i) => (
          <div key={i} className="border p-3 mb-2 flex justify-between">
            {p}
            <button
              onClick={() => addToCart(p)}
              className="bg-green-500 text-white px-2 rounded"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      <div className="w-1/3 border-l pl-4">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cart.map((item, i) => (
          <div key={i} className="border-b py-2">{item}</div>
        ))}
      </div>

    </div>
  );
}