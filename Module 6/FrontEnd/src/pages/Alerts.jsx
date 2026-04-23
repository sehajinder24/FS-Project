import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";
import { useEffect, useState } from "react";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8080/products/low-stock")
      .then(res => res.json())
      .then(data => setAlerts(data));
    }, []);

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
              p.quantity === 0 ? "bg-red-500" : "bg-yellow-400"
            }`}
          >
            {p.name} is {p.quantity === 0 ? "OUT OF STOCK" : "LOW STOCK"} ({p.quantity})
          </div>
        ))
      )}
    </div>
  );
}