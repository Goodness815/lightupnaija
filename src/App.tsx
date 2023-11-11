import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Calculator from "./pages/calculator/Calculator";
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/signup/SignUp";
import Market from "./pages/market/Market";
import CategoryDetails from "./components/markets/categoryDetails/CategoryDetails";
import ScrollToTop from "./ScrollToTop";
import CalculatorShowcase from "./components/calculatorSections/showcase/CalculatorShowcase";
import RequestQuote from "./components/calculatorSections/calculatorForms/RequestQuote";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route
          path="/quote"
          element={
            <>
              <Navbar navLinks={true} />
              <CalculatorShowcase isShown={false} />
              <div className="calculator-toggle">
                <RequestQuote />
              </div>
            </>
          }
        />
        <Route path="/market" element={<Market />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/category/:name" element={<CategoryDetails />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
