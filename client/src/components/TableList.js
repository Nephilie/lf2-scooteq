import React, { useEffect, useState } from "react";
import scooterImg from "../asstes/sco_pro.png";
import axios from "axios";
import "./TableListStyles.css";

const TableList = () => {
  const [scooters, setScooters] = useState([]);
  const [prices, setPrices] = useState([]);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [isRunning, setIsRunning] = useState({});
  const [totalCost, setTotalCost] = useState(0);

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

  useEffect(() => {
    let intervalId;

    Object.entries(isRunning).forEach(([id, running]) => {
      if (running) {
        intervalId = setInterval(() => {
          setTime((prevTime) => ({
            ...prevTime,
            [id]: prevTime[id] + 1,
          }));
        }, 1000);
      }
    });
    return () => {
      clearInterval(intervalId);
    };
  });

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
    setTotalCost(0);
  };

  const handleClick = (id) => {
    setIsRunning((prevIsRunning) => {
      const updatedIsRunning = {
        ...prevIsRunning,
        [id]: !prevIsRunning[id],
      };
      const updatedScooters = scooters.map((scooter) => {
        if (scooter.id === id) {
          return {
            ...scooter,
            is_rented: updatedIsRunning[id] ? 1 : 0,
          };
        }
        return scooter;
      });

      setScooters(updatedScooters);
      return updatedIsRunning;
    });

    if (!isRunning[id]) {
      setTime((prevTime) => ({
        ...prevTime,
        [id]: 0,
      }));
    }
  };

  const calculateCost = (id) => {
    const timeInMinutes = time[id] / 60;
    const timeCost = timeInMinutes * getPricePerMin(id);
    const distanceCost = distance[id] * getPricePerKm(id);
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

  const handleResetAll = () => {
    initializeTimeAndDistance(scooters);
  };

  // battery level
  useEffect(() => {
    const batteryDrainInterval = setInterval(() => {
      drainBatteryLevel();
    }, 1000); //adjust the interval time as needed

    return () => {
      clearInterval(batteryDrainInterval);
    };
  }, []);

  const drainBatteryLevel = () => {
    setScooters((prevScooters) => {
      const updatedScooters = prevScooters.map((scooter) => {
        if (scooter.is_rented) {
          const batteryDrainRate = 0.01; // Adjust the drain rate as needed
          const drainedBatteryLevel = scooter.battery_level - batteryDrainRate;
          return {
            ...scooter,
            battery_level: Math.max(drainedBatteryLevel, 0), //ensure battery level does not go below 0
          };
        }
        return scooter;
      });
      return updatedScooters;
    });
  };

  return (
    <div>
      <section>
        <h1>SCOOTERS APP</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Battery</th>
              <th scope="col">Available</th>
              <th scope="col">€/ km</th>
              <th scope="col">Time</th>
              <th scope="col">Cost</th>
              <th scope="col">Action</th>
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
                <td>
                  <div className="battery-level">
                    <div
                      className="battery-level-inner"
                      style={{ width: `${scooter.battery_level}%` }}
                    >{scooter.battery_level.toFixed(2)}</div>
                  </div>
                </td>
                <td className="align-middle;">
                  <div
                    className={`dot ${scooter.is_rented ? "red" : "green"}`}
                  ></div>
                </td>
                <td>
                  <input
                    type="number"
                    value={distance[scooter.id] || 0}
                    onChange={(event) =>
                      handleDistanceChange(event, scooter.id)
                    }
                  />
                </td>
                <td>{formatTime(time[scooter.id] || 0)}</td>
                <td>€{calculateCost(scooter.id).toFixed(2)}</td>
                <td>
                  <button
                    className={`btn ${
                      isRunning[scooter.id] ? "btn-danger" : "btn-style3"
                    }`}
                    onClick={() => handleClick(scooter.id)}
                  >
                    {isRunning[scooter.id] ? "Stop" : "Start"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-end">
          <button className="btn btn-style" onClick={handleResetAll}>
            Reset All
          </button>
        </div>
      </section>
    </div>
  );
};

export default TableList;
