import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Features from "./components/routes/Features";
import Vehicles from "./components/routes/Vehicles";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </div>
  );
}

export default App;
<a>KEKW</a>