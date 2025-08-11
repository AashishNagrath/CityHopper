import { useCityHopper } from "../CityHopperContext";
import ArrivalModeSelector from "../components/ArrivalModeSelector";

export default function CustomPlan() {
  const {
    city,
    arrivalMode, setArrivalMode,
    selectedSpots, setSelectedSpots,
    touristSpots
  } = useCityHopper();

  const spots = touristSpots;

  const handleSpotChange = (spotId) => {
    setSelectedSpots((prev) =>
      prev.includes(spotId)
        ? prev.filter((s) => s !== spotId)
        : [...prev, spotId]
    );
  };

  const isFormValid = selectedSpots.length > 0 && arrivalMode !== "";
  const handlelog = () => {
    console.log("City:", city);
    console.log("Arrival Mode:", arrivalMode);
    const selectedSpotObjects = spots.filter(spot => selectedSpots.includes(spot.id));
    console.log("Selected Spots:", selectedSpotObjects);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Custom Plan ✏️</h2>
      <p>Select your arrival method and tourist spots here.</p>
      <ArrivalModeSelector/>
      <div className="mb-6">
        <p className="font-semibold mb-2">Tourist Spots:</p>
        {spots.map((spot) => (
          <label key={spot.id} className="block mb-1">
            <input
              type="checkbox"
              checked={selectedSpots.includes(spot.id)}
              onChange={() => handleSpotChange(spot.id)}
              className="mr-2"
            />
            {spot.name || spot.address}
          </label>
        ))}
      </div>
      <button
        disabled={!isFormValid}
        onClick={handlelog}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Log Details
      </button>
    </div>
  );
}