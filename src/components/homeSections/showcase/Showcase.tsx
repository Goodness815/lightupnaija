import image1 from "../../../assets/showcase-1.png";
import image2 from "../../../assets/showcase-2.png";
import image3 from "../../../assets/showcase-3.png";
import "./showcase.css";

function Showcase() {
  return (
    <div className="showcase-container">
      <div className="showcase-inner">
        <div className="showcase-left">
          <h1>Solar power made easy with smart solution.</h1>
          <p>
            Elevate your energy independence with our cutting-edge solar web
            service, streamlining solar panel installation, real-time
            monitoring, and energy optimization."
          </p>
          <div className="showcase-left-buttons">
            <button>Get Started</button>
            <button>See How It Works</button>
          </div>
        </div>
        <div className="showcase-right">
          <div className="image-case">
            <img src={image1} alt="solar image" className="top-image" />
            <img src={image2} alt="solar image" className="bottom-image" />
          </div>
          <div className="image-case">
            <img src={image3} alt="solar image" className="side-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
