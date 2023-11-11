import { Link } from "react-router-dom";
import "./cta.css";
function Cta({ mode }: any) {
  if (!mode) {
    return (
      <div className="cta-container">
        <div className="cta-inner">
          <h1>Ready to light up your space?</h1>
          <p>Get started with us and experience quality on another level</p>
          <Link to="/signup">
            <button>SIGN UP NOW</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="cta-container">
      <div className="cta-inner">
        <h1>POWER AS A SERVICE</h1>
        <p>
          LightUpNaija offers hassle-free clean energy solutions. With 'Power as
          a Service,' enjoy reliable power at zero upfront cost, paying only a
          fixed tariff based on your chosen solution.
        </p>
        <Link to="/quote">
          <button>Request Quote</button>
        </Link>
      </div>
    </div>
  );
}

export default Cta;
