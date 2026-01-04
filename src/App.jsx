import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./commponents/NavBar";
import Places from "./commponents/Places";

const App = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []); 

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="appactive place-items-center md:flex-col">
      <NavBar />
      <Places />
    </div>
  );
};

export default App;
