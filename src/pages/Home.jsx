import { useState } from "react";
import { Link } from "react-router-dom";
import { useCityHopper } from "../CityHopperContext";
import { fetchCitySuggestions } from "../api/geoapify";

export default function Home() {
  const { city, setCity } = useCityHopper();
  const [suggestions, setSuggestions] = useState([]);
  const [validcity, setValidCity] = useState(false);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setCity(value);
    setValidCity(false);
    if (value.length > 1) {
      const results = await fetchCitySuggestions(value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setSuggestions([]);
    setValidCity(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">CityHopper 🏙️</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city..."
        className="border p-2 rounded w-64 mb-2"
        autoComplete="off"
      />
      {suggestions.length > 0 && (
        <ul className="border w-64 bg-white rounded shadow mb-4">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-4">
        <Link to="/custom-plan">
          <button disabled = {!validcity} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Custom Plan
          </button>
        </Link>
        <Link to="/best-plan">
          <button disabled={!validcity} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Best Plan
          </button>
        </Link>
      </div>
    </div>
  );
}