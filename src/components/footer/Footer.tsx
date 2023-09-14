import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import "./footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <span>© 2023 - LightUpNaija</span>
        <div className="footer-socials">
          <FiFacebook className="icons" />
          <FiTwitter className="icons" />
          <FiInstagram className="icons" />
          <FiLinkedin className="icons" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
