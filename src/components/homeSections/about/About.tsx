import image from "../../../assets/aboutimg.png";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-inner">
        <div className="about-left">
          <img src={image} alt="about" />
        </div>
        <div className="about-right">
          <span>ABOUT US</span>
          <div>
            <h1> Energizing a Sustainable Tomorrow</h1>
            <p>
              At LightUpNaija, we're on a mission to reshape the energy
              landscape by harnessing the boundless potential of the sun. Our
              user-friendly solar web service is designed to simplify your
              journey to clean energy. With a focus on transparency, innovation,
              and community, we're here to guide you every step of the way
              towards a brighter, greener future. Welcome to the solar
              revolution with LightUpNaija. We guide seamless transition to
              solar energy with a user-centric approach, driven by innovation,
              knowledge, and community.
            </p>
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
