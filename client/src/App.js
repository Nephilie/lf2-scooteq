import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Scooters from "./components/routes/Scooters";
import OurRides from "./components/routes/OurRides";
import Contact from "./components/routes/Contact";
import SignUp from "./components/routes/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rides" element={<OurRides />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/scooters" element={<Scooters />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
