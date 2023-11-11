import { IoMdClose } from "react-icons/io";
import "./calculator.css";
import { useState } from "react";
// import axios from "axios";
interface calculatorProps {
  setIsShown: Function;
}
function LoadCalculator({ setIsShown }: calculatorProps) {
  const appliances = [
    {
      appliance: "Refrigerator",
      powerRating: 150,
    },
    {
      appliance: "Washing Machine",
      powerRating: 400,
    },
    {
      appliance: "Microwave Oven",
      powerRating: 1200,
    },
    {
      appliance: "Light",
      powerRating: 20,
    },
    {
      appliance: "Fan",
      powerRating: 40,
    },
    {
      appliance: "Phone",
      powerRating: 20,
    },
    {
      appliance: "Television",
      powerRating: 80,
    },
    {
      appliance: "Home Sound System",
      powerRating: 50,
    },
    // Add more appliances as needed
  ];
  const [load, setLoad]: any = useState([]);
  const [formData, setFormData]: any = useState([]);

  const onInputChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = (event: any) => {
    event.preventDefault();
    console.log("logged");
    return setLoad([...load, formData]);
  };

  const removeLoad = (index: any) => {
    const updatedLoad = [...load];
    updatedLoad.splice(index, 1);
    setLoad(updatedLoad);
  };

  console.log(formData);

  return (
    <div className="loadcalculator-container">
      <form className="loadcalculator-form" onSubmit={handleAdd}>
        <h1>Your Calculation</h1>
        <div className="form-item">
          <label htmlFor="device">Choose Device</label>
          <select onChange={onInputChange} name="device" required>
            <option>Choose Device</option>
            {appliances.map((value, i) => {
              return (
                <option key={i} value={value.appliance}>
                  {value.appliance}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="rating">Power Rating (watts)</label>
          <input
            type="number"
            name="rating"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="usageHours">Hours of daily use</label>
          <input
            type="number"
            name="usageHours"
            onChange={onInputChange}
            required
          />
        </div>
        <button>Add</button>
      </form>

      <div className="loadcalculator-results">
        <h4>Your Appliances</h4>
        <div className="loadresults-flex">
          {load.map((load: any, index: any) => {
            return (
              <div key={index} className="loadresults-flexitem">
                <div className="loadresults-flexitemleft">
                  <h3>{load.device}</h3>
                  <h4>
                    {load.rating} | {load.quantity} | {load.usageHours} hrs
                    daily
                  </h4>
                </div>
                <div className="loadresults-flexitemright">
                  <IoMdClose
                    className="icons"
                    onClick={() => removeLoad(index)}
                  />
                </div>
              </div>
            );
          })}

          {load.length >= 1 && (
            <button onClick={() => setIsShown(false)}>Proceed</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoadCalculator;
