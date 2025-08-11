const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;

export async function fetchCitySuggestions(query) {
  if (!query) return [];

  const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&type=city&limit=5&apiKey=${apiKey}`;
  const requestOptions = { method: 'GET' };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    return (data.features || [])
      .filter(f => f.properties.result_type === "city")
      .map(f => ({
        label: [f.properties.city, f.properties.country].filter(Boolean).join(", "),
        place_id: f.properties.place_id,
        lon: f.geometry.coordinates[0],
        lat: f.geometry.coordinates[1]
      }));
  } catch (error) {
    console.error("Geoapify error:", error);
    return [];
  }
}
export async function fetchTouristSpots({ lon, lat }) {
  if (!lon || !lat) return [];

  const url = `https://api.geoapify.com/v2/places?categories=tourism.sights&filter=circle:${lon},${lat},5000&limit=20&apiKey=${apiKey}`;
  const requestOptions = { method: 'GET' };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    return (data.features || []).map(f => ({
      id: f.properties.place_id,
      name: f.properties.name,
      address: f.properties.formatted,
      coordinates: f.geometry.coordinates
    }));
  } catch (error) {
    console.error("Geoapify error:", error);
    return [];
  }
}