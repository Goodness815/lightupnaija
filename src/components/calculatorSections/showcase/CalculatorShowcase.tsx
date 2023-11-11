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
          <h1>POWER AS A SERVICE</h1>
          <p>
            LightUpNaija offers hassle-free clean energy solutions. With 'Power
            as a Service,' enjoy reliable power at zero upfront cost, paying
            only a fixed tariff based on your chosen solution.
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
