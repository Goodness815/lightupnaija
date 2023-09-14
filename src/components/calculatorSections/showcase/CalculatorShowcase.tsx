import calculatorimg from "../../../assets/calculator.png";
import energyimg from "../../../assets/energy.png";
import "./calculatorshowcase.css";

interface showcaseProps {
  isShown: Boolean;
}

function CalculatorShowcase({ isShown }: showcaseProps) {
  return (
    <div className="calculator-container">
      {isShown ? (
        <div className="calculator-left">
          <h1>Load calculator</h1>
          <p>
            Gain clarity on the appropriate inverter, its load-bearing capacity,
            and the duration it can sustain.
          </p>
          <button>Request quote</button>
        </div>
      ) : (
        <div className="calculator-left">
          <h1>ENERGY AUDIT</h1>
          <p>
            "To find the right solution, Imperium will review how much energy
            you currently use and what you need. After this, we'll figure out
            how much of your energy can come from renewable sources."
          </p>
        </div>
      )}
      <div className="calculator-right">
        <img src={isShown ? calculatorimg : energyimg} alt="calculator" />
      </div>
    </div>
  );
}

export default CalculatorShowcase;
