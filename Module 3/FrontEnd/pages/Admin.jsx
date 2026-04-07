import { useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([
    { name: "Apples", quantity: 10 },
    { name: "Bananas", quantity: 3 },
  ]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addProduct = () => {
    if (!name || !quantity) return;
    setProducts([...products, { name, quantity: Number(quantity) }]);
    setName("");
    setQuantity("");
  };

  const deleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="font-semibold mb-3">Add Product</h3>
        <input
          className="border p-2 mr-2"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          onClick={addProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Product List */}
      <div className="bg-white p-6 rounded-xl shadow">
        {products.map((p, i) => (
          <div
            key={i}
            className="flex justify-between border-b py-2"
          >
            <span>{p.name} ({p.quantity})</span>
            <button
              onClick={() => deleteProduct(i)}
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