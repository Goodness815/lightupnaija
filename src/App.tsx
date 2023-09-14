import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Calculator from "./pages/calculator/Calculator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
