import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Vehicles from "./components/Vehicles";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/vehicles" element={<Vehicles />}></Route>
      </Routes>
      {/* <Container>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">No.</th>
              <th scope="col">available</th>
              <th scope="col">price per minute</th>
              <th scope="col">km</th>
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
      </Container> */}
    </div>
  );
}

export default App;
