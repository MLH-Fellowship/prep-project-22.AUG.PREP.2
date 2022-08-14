import { useState, useEffect } from "react";

const useLocation = () => {
  const [userCoords, setUserCoords] = useState([]);
  
  const success = (pos) => {
    setUserCoords([pos.coords.latitude, pos.coords.longitude])
  }

  const error = (error) => {
    console.warn(error);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error)
  }, []);

  return userCoords;
};

export default useLocation;