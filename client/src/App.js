import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Vehicles from "./components/routes/Vehicles";
import Scooters from "./components/routes/Scooters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scooters" element={<Scooters />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </div>
  );
}

export default App;
