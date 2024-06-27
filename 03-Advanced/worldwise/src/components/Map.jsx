import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log(lat, lng);

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Positions : {lat} {lng}
      </h1>

      <button
        onClick={() => {
          setSearchParams({ lat: "21.02", lng: "54.25" });
        }}
      >
        Change Positions
      </button>
      <button
        onClick={() => {
          navigate("form");
        }}
      >
        Move to Forms
      </button>
    </div>
  );
};

export default Map;
