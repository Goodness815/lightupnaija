import inverter from "../../../assets/inverter.png";
import "./market.css";
function MarketItem() {
  return (
    <div className="marketItem">
      <img src={inverter} alt="product image" />
      <h3>Inverter</h3>
    </div>
  );
}

export default MarketItem;
