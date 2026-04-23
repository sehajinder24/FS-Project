import { useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";

export default function Admin() {
  const { products, addProduct, deleteProduct, updateProduct } = useContext(InventoryContext);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <input
          className="border p-2 mr-2"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
	<button
	  onClick={() => updateProduct(p.id, p.quantity + 1)}
	  className="text-green-500 ml-2"
	>
	</button>


	<button
	  onClick={() => updateProduct(p.id, p.quantity + 5)}
	  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
	>
	  Reorder (+5)
	</button>

        <button
          onClick={() => {
            addProduct(name, quantity);
            setName("");
            setQuantity("");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        {products.map((p) => (
          <div key={p.id} className="flex justify-between border-b py-2">
            <span>{p.name} ({p.quantity})</span>
            <button
              onClick={() => deleteProduct(p.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}