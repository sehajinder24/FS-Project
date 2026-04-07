export default function Alerts() {
  const products = [
    { name: "Apples", quantity: 10 },
    { name: "Bananas", quantity: 3 },
    { name: "Oranges", quantity: 0 },
  ];

  const alerts = products.filter(p => p.quantity < 5);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Alerts</h2>

      {alerts.length === 0 ? (
        <p>No alerts 🎉</p>
      ) : (
        alerts.map((p, i) => (
          <div
            key={i}
            className={`p-4 mb-3 rounded text-white ${
              p.quantity === 0 ? "bg-red-500" : "bg-yellow-400"
            }`}
          >
            {p.name} is {p.quantity === 0 ? "OUT OF STOCK" : "LOW STOCK"}
          </div>
        ))
      )}
    </div>
  );
}