import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 pt-20 shadow-lg">
      <ul className="top-20 space-y-2">
        <li><Link className="block px-6 py-3 hover:bg-teal-500" to="/">Dashboard</Link></li>
        <li><Link className="block px-6 py-3 hover:bg-teal-500" to="/admin">Admin Panel</Link></li>
        <li><Link className="block px-6 py-3 hover:bg-teal-500" to="/suppliers">Suppliers</Link></li>
        <li><Link className="block px-6 py-3 hover:bg-teal-500" to="/alerts">Alerts</Link></li>
        <li><Link className="block px-6 py-3 hover:bg-teal-500" to="/reports">Reports</Link></li>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
        <li><Link className="block px-6 py-3 text-gray-900 hover:bg-teal-500" to="/HX">HX</Link></li>
      </ul>
    </div>
  );
}