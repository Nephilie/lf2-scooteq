import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import scooter from "../../asstes/scoo.png";
import Navbar from "../Navbar";

const Features = () => {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const calculateCost = () => {
    const timeCost = time * 0.3;
    const distanceCost = distance * 0.4;
    return timeCost + distanceCost;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleDistanceChange = (event) => {
    const newDistance = Number(event.target.value);
    setDistance(newDistance);
  };

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "180px" }}>
      <h1>Features Page</h1>

      
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">No.</th>
              <th scope="col">available</th>
              <th scope="col">€/min</th>
              <th scope="col">€/km</th>
              <th scope="col">duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img
                  src={scooter}
                  alt="scooter"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "30px",
                    border: "1px solid #1ecbe1",
                  }}
                />
              </th>
              <td>001</td>
              <td>
                <span
                  className="logged"
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: "#25da51",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </td>
              <td>0.30</td>
              <td>0.40</td>
              <td>{formatTime(time)}</td>
              <td>
                <label>Distance in km: </label>
                <input
                  type="number"
                  value={distance}
                  onChange={handleDistanceChange}
                />
              </td>
              <td>€{calculateCost().toFixed(2)}</td>
              <td>
                <button className="btn btn-success" onClick={handleClick}>
                  {isRunning ? "Ausleihen" : "Start"}
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img
                  src={scooter}
                  alt="scooter"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "30px",
                    border: "1px solid #1ecbe1",
                  }}
                />
              </th>
              <td>002</td>
              <td>
                {" "}
                <span
                  className="logged"
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: "#25da51",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </td>
              <td>0.30</td>
              <td>0.40</td>
            </tr>
            <tr>
              <th scope="row">
                <img
                  src={scooter}
                  alt="scooter"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "30px",
                    border: "1px solid #1ecbe1",
                  }}
                />
              </th>
              <td>003</td>
              <td>
                <span
                  className="logged"
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: "#f80807",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </td>
              <td>0.30</td>
              <td>0.40</td>
            </tr>
            <tr>
              <th scope="row">
                <img
                  src={scooter}
                  alt="scooter"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "30px",
                    border: "1px solid #1ecbe1",
                  }}
                />
              </th>
              <td>004</td>
              <td>
                <span
                  className="logged"
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: "#25da51",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </td>
              <td>0.30</td>
              <td>0.40</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default Features;
