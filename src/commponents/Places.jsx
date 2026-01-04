import React, { useState, useEffect } from "react";
import axios from "axios";
const Places = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchPlaces = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/www/apps/getplaces.php"
      );
        if (response.data) {
        setPlaces(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching places:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const callplaces = async () => {
      await fetchPlaces();
      setLoading(false);
    }
    callplaces();
  }, []);
//----------console log places for debugging
  useEffect(() => {
    console.log("Places",places);
  }, [places]);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && <div>places</div>}
    </div>
  );
};

export default Places;
