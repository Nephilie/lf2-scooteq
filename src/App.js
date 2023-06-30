import { Container } from "react-bootstrap";
import scooter from "./img/scoo.png";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">scooter No</th>
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
                    height: "25px",
                    width: "25px",
                    backgroundColor: "#25da51",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </td>
              <td>@placeholder</td>
              <td>@placeholder</td>
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
                    height: "25px",
                    width: "25px",
                    backgroundColor: "#25da51",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </td>
              <td>@placeholder</td>
              <td>@placeholder</td>
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
                    height: "25px",
                    width: "25px",
                    backgroundColor: "#f80807",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </td>
              <td>@placeholder</td>
              <td>@placeholder</td>
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
                    height: "25px",
                    width: "25px",
                    backgroundColor: "#25da51",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </td>
              <td>placeholder</td>
              <td>placeholder</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default App;
