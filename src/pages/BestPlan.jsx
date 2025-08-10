import { useCityHopper } from "../CityHopperContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function BestPlan() {
  const {
    city,
    arrivalMode,setArrivalMode,
    tourType, setTourType,
    visitTime, setVisitTime
  } = useCityHopper();
  
  const handlelog = () => {
    console.log("City:", city);
    console.log("Arrival Mode:", arrivalMode);
    console.log("Selected Tour Type:", tourType);
    if (tourType === "Limited Time") {
      console.log("Available Hours:", visitTime);
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Best Plan ⭐</h2>
      <p>We’ll create the perfect city itinerary for your time frame.</p>
      <p>Select Arrival Type</p>
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
        <p className="font-semibold mb-2">Tour Type:</p>
        <label className="mr-4">
          <input
            type="radio"
            value="Full Time"
            checked={tourType === "Full Time"}
            onChange={() => setTourType("Full Time")}
            className="mr-2"
          />
          Full Time
        </label>
        <label>
          <input
            type="radio"
            value="Limited Time"
            checked={tourType === "Limited Time"}
            onChange={() => setTourType("Limited Time")}
            className="mr-2"
          />
          Limited Time
        </label>
        {tourType === "Limited Time" && (
          <div className="mt-4">
            <label className="block mb-2">
              Enter available hours:
              <input
                type="number"
                min="1"
                value={visitTime}
                onChange={(e) => setVisitTime(e.target.value)}
                className="border p-2 rounded w-32 ml-2"
                placeholder="Hours"
              />
            </label>
          </div>
        )}
      </div>
      <button
        onClick={handlelog}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Log Details
      </button>
    </div>
  );
}