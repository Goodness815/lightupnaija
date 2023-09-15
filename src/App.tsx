import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Calculator from "./pages/calculator/Calculator";
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
