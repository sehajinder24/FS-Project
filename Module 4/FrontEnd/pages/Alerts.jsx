import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

export default function Alerts() {
  const { products } = useContext(InventoryContext);

  const alerts = products.filter(p => p.quantity < 5);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Alerts</h2>

      {alerts.length === 0 ? (
        <p className="text-green-600 font-semibold">All products in stock 🎉</p>
      ) : (
        alerts.map((p, i) => (
          <div
            key={i}
            className={`p-4 mb-3 rounded text-white ${
              p.quantity === 0 ? "bg-red-500" : "bg-yellow-500"
            }`}
          >
            {p.name} is {p.quantity === 0 ? "OUT OF STOCK" : "LOW STOCK"} ({p.quantity})
          </div>
        ))
      )}
    </div>
  );
}