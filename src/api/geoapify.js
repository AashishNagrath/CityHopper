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
      .map(f =>{
        const city = f.properties.city;
        const country = f.properties.country;
        return [city, country].filter(Boolean).join(", ");
      });
  } catch (error) {
    console.error("Geoapify error:", error);
    return [];
  }
}