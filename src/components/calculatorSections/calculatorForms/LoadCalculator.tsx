import { IoMdClose } from "react-icons/io";
import "./calculator.css";
interface calculatorProps {
  setIsShown: Function;
}
function LoadCalculator({ setIsShown }: calculatorProps) {
  return (
    <div className="loadcalculator-container">
      <form className="loadcalculator-form">
        <h1>Your Calculation</h1>
        <div className="form-item">
          <label htmlFor="">Choose Device</label>
          <select name="" id="">
            <option value="">Choose Device</option>
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="">Power Rating</label>
          <input type="number" name="" id="" />
        </div>
        <div className="form-item">
          <label htmlFor="">Quantity</label>
          <input type="number" name="" id="" />
        </div>
        <div className="form-item">
          <label htmlFor="">Hours of daily use</label>
          <input type="number" name="" id="" />
        </div>
        <button>Add</button>
      </form>

      <div className="loadcalculator-results">
        <h4>Your Appliances</h4>
        <div className="loadresults-flex">
          <div className="loadresults-flexitem">
            <div className="loadresults-flexitemleft">
              <h3>Deep Fryer</h3>
              <h4>1 | 5 | 3 hrs daily</h4>
            </div>
            <div className="loadresults-flexitemright">
              <IoMdClose className="icons" />
            </div>
          </div>
          <div className="loadresults-flexitem">
            <div className="loadresults-flexitemleft">
              <h3>Deep Fryer</h3>
              <h4>1 | 5 | 3 hrs daily</h4>
            </div>
            <div className="loadresults-flexitemright">
              <IoMdClose className="icons" />
            </div>
          </div>

          <button onClick={() => setIsShown(false)}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default LoadCalculator;