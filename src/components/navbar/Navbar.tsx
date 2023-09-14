import { Link } from "react-router-dom";
import logo from "../../assets/light-up-naija-trade-mark-1.png";
import { useEffect, useState } from "react";
import "./navbar.css";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      // You can adjust the scroll threshold as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Attach the 'handleScroll' function to the 'scroll' event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="navbar-container"
        style={{ backgroundColor: isScrolled ? "white" : "transparent" }}
      >
        <div className="navbar-inner">
          <div className="navbar-left">
            <img src={logo} alt="lightUpNaija Logo" />
            LightUpNaija
          </div>
          <div className="navbar-right">
            <ul className="navbar-ul">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/">Market-Hub</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <button>Log In</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
