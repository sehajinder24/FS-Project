import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";
import Card from "../components/Card";

export default function Dashboard() {
  const { products } = useContext(InventoryContext);

  const total = products.length;	
  const lowStock = products.filter(p => p.quantity < 5 && p.quantity > 0).length;
  const outStock = products.filter(p => p.quantity === 0).length;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <div>
            <p className="text-lg">Total Products</p>
            <h3 className="text-2xl font-bold">{total}</h3>
          </div>
        </div>
        <div className="bg-orange-400 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <div>
            <p className="text-lg">Low Stock</p>
            <h3 className="text-2xl font-bold">{lowStock}</h3>
          </div>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <div>
            <p className="text-lg">Out of Stock</p>
            <h3 className="text-2xl font-bold">{outStock}</h3>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
	<h2 className="text-3xl font-bold mb-6">Product Info</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>
    </div>
  );
}