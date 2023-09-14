import MarketItem from "./MarketItem";
import "./market.css";
function Market() {
  return (
    <div className="market-container">
      <div className="market-inner">
        <div className="market-top">
          <h2>Market-Hub</h2>
          <span>{">"}</span>
        </div>
        <div className="market-bottom">
          <MarketItem />
          <MarketItem />
          <MarketItem />
          <MarketItem />
          <MarketItem />
          <MarketItem />
        </div>
      </div>
    </div>
  );
}

export default Market;
