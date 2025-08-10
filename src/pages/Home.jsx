import { Link } from "react-router-dom";
import { useState } from "react";
export default function Home() {
  const [city, setCity] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">CityHopper 🏙️</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="border p-2 rounded w-64 mb-6"
      />
      <div className="flex gap-4">
        <Link to="/custom-plan" state={{ city }}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Custom Plan
          </button>
        </Link>
        <Link to="/best-plan" state={{ city }}>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Best Plan
          </button>
        </Link>
      </div>
    </div>
  );
}
