import { IoMdClose } from "react-icons/io";
import "./calculator.css";
import { useEffect, useState } from "react";
import axios from "axios";
interface calculatorProps {
  setIsShown: Function;
}
function LoadCalculator({ setIsShown }: calculatorProps) {
  const [appliances, setAppliances] = useState([]);

  useEffect(() => {
    const apiUrl = "https://api.watttime.org/api/v1/data";

    // Replace 'YOUR_API_KEY' with your actual API key (if required by the API).
    const apiKey = "";

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((response) => {
        setAppliances(response.data); // Handle the API response data as needed
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false);
      });
  }, []);

  console.log(appliances);

  return (
    <div className="loadcalculator-container">
      <form className="loadcalculator-form">
        <h1>Your Calculation</h1>
        <div className="form-item">
          <label htmlFor="device">Choose Device</label>
          <select name="device" required>
            <option value="">Choose Device</option>
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="rating">Power Rating (watts)</label>
          <input type="number" name="rating" required />
        </div>
        <div className="form-item">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" required />
        </div>
        <div className="form-item">
          <label htmlFor="usageHours">Hours of daily use</label>
          <input type="number" name="usageHours" required />
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
