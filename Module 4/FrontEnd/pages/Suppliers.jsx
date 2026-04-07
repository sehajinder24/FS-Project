import { useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";

export default function Suppliers() {
  const { products } = useContext(InventoryContext);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 shadow-md">Supplier Products</h2>
        {products.map((p, i) => (
          <div
            key={i}
            className="border p-3 mb-2 flex justify-between items-center rounded hover:bg-gray-100"
          >
            <span>{p.name} ({p.quantity})</span>
            <button
              onClick={() => addToCart(p)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      <div className="w-1/3 border-l pl-4">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between border-b py-2 items-center"
            >
              {item.name} ({item.quantity})
              <button
                onClick={() => removeFromCart(i)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
}