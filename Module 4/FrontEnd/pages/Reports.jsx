import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

export default function Reports() {
  const { products } = useContext(InventoryContext);

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.quantity, 0);
  const lowStockCount = products.filter(p => p.quantity < 5 && p.quantity > 0).length;
  const outStockCount = products.filter(p => p.quantity === 0).length;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Reports</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Total Products</h3>
          <p>{totalProducts}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Total Stock</h3>
          <p>{totalStock}</p>
        </div>
        <div className="bg-yellow-400 text-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Low Stock</h3>
          <p>{lowStockCount}</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Out of Stock</h3>
          <p>{outStockCount}</p>
        </div>
      </div>
    </div>
  );
}