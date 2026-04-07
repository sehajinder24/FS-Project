export default function Card({ name, quantity }) {
  let statusColor =
    quantity === 0
      ? "bg-red-500"
      : quantity < 5
      ? "bg-yellow-400"
      : "bg-green-500";

  return (
    <div className={`p-6 rounded-2xl text-white shadow-xl ${statusColor}`}>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mt-2 text-lg">Stock: {quantity}</p>
    </div>
  );
}