import { Link } from "react-router-dom";
import logo from "../../assets/light-up-naija-trade-mark-1.png";
import { useEffect, useState } from "react";
import "./navbar.css";

interface navbarProps {
  navLinks: Boolean;
}

function Navbar({ navLinks }: navbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navState, setNavState] = useState(false);

  const openNav = () => {
    const mySidenav = document.getElementById("mySidenav");
    if (mySidenav) {
      mySidenav.style.width = "270px";
      setNavState(!navState);
    }
  };

  const closeNav = () => {
    const mySidenav = document.getElementById("mySidenav");
    if (mySidenav) {
      mySidenav.style.width = "0";
      setNavState(!navState);
    }
  };

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
        style={{ backgroundColor: isScrolled ? "#FFFFF0" : "transparent" }}
      >
        <div className="navbar-inner">
          <Link to="/">
            <div className="navbar-left">
              <img src={logo} alt="lightUpNaija Logo" />
              LightUpNaija
            </div>
          </Link>
          <div
            className="navbar-right"
            style={{
              display: !navLinks ? "none" : "flex",
              alignItems: "center",
            }}
          >
            <ul className="navbar-ul">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/market">Market-Hub</Link>
              </li>
              <li>
                <Link to="/quote">Request Quote</Link>
              </li>
              <li>
                <Link to="/login">
                  <button>Log In</button>
                </Link>
              </li>
            </ul>
            {navState ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                onClick={() => closeNav()}
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M13.1665 12.3948L20.762 4.82494C21.0793 4.50462 21.0793 3.98571 20.762 3.6654C20.4503 3.33936 19.9355 3.32957 19.6118 3.64352L12.0163 11.2133L4.51839 3.64352C4.36467 3.4796 4.15078 3.38672 3.92702 3.38672C3.70327 3.38672 3.48938 3.4796 3.33566 3.64352C3.0543 3.95299 3.0543 4.42795 3.33566 4.73743L10.8335 12.2963L3.238 19.8552C2.92067 20.1755 2.92067 20.6944 3.238 21.0147C3.38907 21.1707 3.59685 21.2577 3.81309 21.2554C4.03351 21.2734 4.25202 21.2026 4.42074 21.0585L12.0163 13.4887L19.6118 21.146C19.7629 21.302 19.9707 21.389 20.1869 21.3867C20.4029 21.3877 20.6102 21.301 20.762 21.146C21.0793 20.8257 21.0793 20.3068 20.762 19.9865L13.1665 12.3948Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                className={"navbar_hamburger"}
                onClick={() => openNav()}
              >
                <path
                  d="M19 5.38672C19 4.83443 18.5523 4.38672 18 4.38672L5 4.38672C4.44771 4.38672 4 4.83443 4 5.38672C4 5.939 4.44771 6.38672 5 6.38672L18 6.38672C18.5523 6.38672 19 5.939 19 5.38672Z"
                  fill="black"
                />
                <path
                  d="M19 12.3867C19 11.8344 18.5523 11.3867 18 11.3867L5 11.3867C4.44771 11.3867 4 11.8344 4 12.3867C4 12.939 4.44771 13.3867 5 13.3867L18 13.3867C18.5523 13.3867 19 12.939 19 12.3867Z"
                  fill="black"
                />
                <path
                  d="M19 19.3867C19 18.8344 18.5523 18.3867 18 18.3867L5 18.3867C4.44771 18.3867 4 18.8344 4 19.3867C4 19.939 4.44771 20.3867 5 20.3867L18 20.3867C18.5523 20.3867 19 19.939 19 19.3867Z"
                  fill="black"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      <div id="mySidenav" className={"sidenav"}>
        <div style={{ marginLeft: "10px" }}>
          <div
            className="navbar-left"
            style={{ marginBottom: "70px", color: "white" }}
          >
            <img src={logo} alt="lightUpNaija Logo" />
            LightUpNaija
          </div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Request Quote</Link>
          </li>
          <li>
            <Link to="/market">Market Hub</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
