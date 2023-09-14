import { useState } from "react";
import CalculatorShowcase from "../showcase/CalculatorShowcase";
import LoadCalculator from "./LoadCalculator";
import "./calculator.css";
import RequestQuote from "./RequestQuote";
function CalculatorToggle() {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <CalculatorShowcase isShown={isShown} />
      <div className="calculator-toggle">
        {isShown ? (
          <LoadCalculator setIsShown={setIsShown} />
        ) : (
          <RequestQuote />
        )}
      </div>
    </>
  );
}

export default CalculatorToggle;
