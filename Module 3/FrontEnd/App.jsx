import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Suppliers from "./pages/Suppliers";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        
        <div className="flex">
          <Sidebar />

          <div className="ml-64 mt-20 p-6 w-full">
            <Routes>
		<Route path="/" element={<Dashboard />} />
		<Route path="/admin" element={<Admin />} />
		<Route path="/suppliers" element={<Suppliers />} />
		<Route path="/alerts" element={<Alerts />} />
		<Route path="/reports" element={<Reports />} />            
	    </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}