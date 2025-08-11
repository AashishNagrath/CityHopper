import { useCityHopper } from "../CityHopperContext";
export default function ArrivalModeSelector() {
  const { arrivalMode, setArrivalMode } = useCityHopper();

  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold">Select Arrival Mode:</label>
      <select
        value={arrivalMode}
        onChange={(e) => setArrivalMode(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">Select Arrival Mode</option>
        <option value="road">Road</option>
        <option value="train">Train</option>
        <option value="plane">Plane</option>
      </select>
    </div>
  );
}