import React, { useEffect, useState } from "react";
import scooterImg from "../asstes/sco_pro.png";
import axios from "axios";

const TableList = () => {
  const [scooters, setScooters] = useState([]);
  const [prices, setPrices] = useState([]);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [isRunning, setIsRunning] = useState({});

  // db connection
  useEffect(() => {
    const fetchALLScootersInfo = async () => {
      try {
        // table scooters
        const res = await axios.get("http://localhost:3001/scooters");
        setScooters(res.data);
        initializeTimeAndDistance(res.data);
        console.log(res);

        // table prices
        const resPrices = await axios.get("http://localhost:3001/prices");
        setPrices(resPrices.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchALLScootersInfo();
  }, []);

  const initializeTimeAndDistance = (scootersData) => {
    const initalTime = {};
    const initalDistance = {};
    const initialIsRunning = {};

    scootersData.forEach((scooter) => {
      initalTime[scooter.id] = 0;
      initalDistance[scooter.id] = 0;
      initialIsRunning[scooter.id] = false;
    });

    setTime(initalTime);
    setDistance(initalDistance);
    setIsRunning(initialIsRunning);
  };

  const handleClick = (id) => {
    setIsRunning((prevIsRunning) => ({
      ...prevIsRunning,
      [id]: !prevIsRunning[id],
    }));
  };

  const calculateCost = (id) => {
    const timeInMinutes = time[id] / 60;
    const timeCost = timeInMinutes * getPricePerMin[id];
    const distanceCost = distance[id] * getPricePerKm[id];
    return timeCost + distanceCost;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleDistanceChange = (event, id) => {
    const newDistance = Number(event.target.value);
    setDistance((prevDistance) => ({
      ...prevDistance,
      [id]: newDistance,
    }));
  };

  const getPricePerMin = (id) => {
    const scooter = scooters.find((scooter) => scooter.id === id);
    if (scooter) {
      const price = prices.find((price) => price.model === scooter.model);
      if (price) {
        return price.price_per_min;
      }
    }
    return 0;
  };

  const getPricePerKm = (id) => {
    const scooter = scooters.find((scooter) => scooter.id === id);
    if (scooter) {
      const price = prices.find((price) => price.model === scooter.model);
      if (price) {
        return price.price_per_km;
      }
    }
    return 0;
  };

  return (
    <div>
      <h1>SCOOTERS</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Battery</th>
            <th scope="col">Available</th>
            <th>Distance (km)</th>
            <th>Time</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {scooters.map((scooter) => (
            <tr key={scooter.id}>
              <th scope="row">
                <img
                  src={scooterImg}
                  alt="scooter"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "30px",
                    border: "2px solid #01959a",
                  }}
                />
              </th>
              <td>{scooter.brand}</td>
              <td>{scooter.model}</td>
              <td>{scooter.battery_level}</td>
              <td>{scooter.is_rented}</td>
              <td>
                <input
                  type="number"
                  value={distance[scooter.id] || 0}
                  onChange={(event) => handleDistanceChange(event, scooter.id)}
                />
              </td>
              <td>{formatTime(time[scooter.id] || 0)}</td>
              <td>€{calculateCost(scooter.id).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleClick(scooter.id)}
                >
                  {isRunning[scooter.id] ? "Stop" : "Starts"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <label>Distance in km:</label>
        <input type="number" value={distance} onChange={handleDistanceChange} />
      </div>
      <div>€{calculateCost().toFixed(2)}</div>
    </div>
  );
};

export default TableList;
