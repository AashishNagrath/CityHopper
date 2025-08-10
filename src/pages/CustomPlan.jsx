import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function CustomPlan() {
  const location = useLocation();
  const { city } = location.state || {};
  const [arrivalMode, setArrivalMode] = useState("");
  const spots = ["red fort", "india gate", "qutub minar", "lotus temple"];
  const [selectedSpots, setSelectedSpots] = useState([]);

  const handleSpotChange = (spot) => {
    setSelectedSpots((prev) =>
      prev.includes(spot)
        ? prev.filter((s) => s !== spot)
        : [...prev, spot]
    );
  };

  const handlelog = () => {
    console.log("City:", city);
    console.log("Arrival Mode:", arrivalMode);
    console.log("Selected Spots:", selectedSpots);
  }
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Custom Plan ✏️</h2>
      <p>Select your arrival method and tourist spots here.</p>
      <select
        value={arrivalMode}
        onChange={(e) => setArrivalMode(e.target.value)}
        className="border p-2 rounded w-64 mb-6"
      >
        <option value="">Select Arrival Mode</option>
        <option value="car">Car</option>
        <option value="train">Train</option>
        <option value="plane">Plane</option>
      </select>
      <div className="mb-6">
        <p className="font-semibold mb-2">Tourist Spots:</p>
        {spots.map((spot) => (
          <label key={spot} className="block mb-1">
            <input
              type="checkbox"
              checked={selectedSpots.includes(spot)}
              onChange={() => handleSpotChange(spot)}
              className="mr-2"
            />
            {spot}
          </label>
        ))}
      </div>
      <button
        onClick={handlelog}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Log Details
        </button>
    </div>
  );
}