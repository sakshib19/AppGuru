import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Simulation from "./pages/Simulation";
import Navbar from "./components/Navbar";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/simulation" element={<Simulation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
