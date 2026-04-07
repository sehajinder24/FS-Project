export default function Reports() {
  const products = [
    { name: "Apples", quantity: 10 },
    { name: "Bananas", quantity: 3 },
    { name: "Oranges", quantity: 0 },
  ];

  const totalStock = products.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Reports</h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <p>Total Products: {products.length}</p>
        <p>Total Stock: {totalStock}</p>
      </div>
    </div>
  );
}