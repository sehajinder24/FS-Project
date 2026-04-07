import { FaBox, FaExclamationTriangle, FaWarehouse } from "react-icons/fa";
import Card from "../components/Card";

export default function Dashboard() {
  const products = [
    { name: "Product A", quantity: 10 },
    { name: "Product B", quantity: 3 },
    { name: "Product C", quantity: 0 },
  ];

  const total = products.length;
  const lowStock = products.filter(p => p.quantity < 5 && p.quantity > 0).length;
  const outStock = products.filter(p => p.quantity === 0).length;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <FaWarehouse size={30} />
          <div>
            <p className="text-lg">Total Products</p>
            <h3 className="text-2xl font-bold">{total}</h3>
          </div>
        </div>

        <div className="bg-yellow-400 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <FaExclamationTriangle size={30} />
          <div>
            <p className="text-lg">Low Stock</p>
            <h3 className="text-2xl font-bold">{lowStock}</h3>
          </div>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <FaBox size={30} />
          <div>
            <p className="text-lg">Out of Stock</p>
            <h3 className="text-2xl font-bold">{outStock}</h3>
          </div>
        </div>

      </div>

      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        Inventory Overview
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}