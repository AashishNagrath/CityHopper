import { createContext, useContext, useState } from "react";

const CityHopperContext = createContext();

export function CityHopperProvider({children}){
    const [city, setCity] = useState("");
    const [arrivalMode, setArrivalMode] = useState("");
    const [selectedSpots, setSelectedSpots] = useState([]);
    const [tourType, setTourType] = useState("Full Time");
    const [visitTime, setVisitTime] = useState("");

return (
    <CityHopperContext.Provider value={{
        city, setCity,
        arrivalMode, setArrivalMode,
        selectedSpots, setSelectedSpots,
        tourType, setTourType,
        visitTime, setVisitTime}}>
    {children}
    </CityHopperContext.Provider>);
}

export function useCityHopper() {
    return useContext(CityHopperContext);
}