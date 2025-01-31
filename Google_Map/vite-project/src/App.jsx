import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [center, setCenter] = useState({ lat: 48.8584, lng: 2.2945 });

  const originRef = useRef();
  const destinationRef = useRef();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => console.log("Geolocation permission denied")
      );
    }
  }, []);

  if (!isLoaded) {
    return <div className="p-4">Loading...</div>;
  }

  async function calculateRoute() {
    if (!originRef.current.value || !destinationRef.current.value) return;
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <div className="relative h-screen w-screen flex flex-col items-center">
      <div className="absolute inset-0">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
      <div className="p-4 bg-white shadow-lg rounded-lg m-4 w-full max-w-lg z-10">
        <div className="flex space-x-2">
          <Autocomplete>
            <input
              type="text"
              placeholder="Origin"
              ref={originRef}
              className="w-full p-2 border rounded"
            />
          </Autocomplete>
          <Autocomplete>
            <input
              type="text"
              placeholder="Destination"
              ref={destinationRef}
              className="w-full p-2 border rounded"
            />
          </Autocomplete>
          <button
            onClick={calculateRoute}
            className="px-4 py-2 bg-pink-500 text-white rounded"
          >
            Go
          </button>
          <button
            onClick={clearRoute}
            className="px-3 py-2 bg-gray-300 rounded"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex justify-between mt-4">
          <span>Distance: {distance}</span>
          <span>Duration: {duration}</span>
          <button
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
            className="p-2 bg-blue-500 text-white rounded-full"
          >
            <FaLocationArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
