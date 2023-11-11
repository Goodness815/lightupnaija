import { Link } from "react-router-dom";
import "./authentication.css";
function LoginForm() {
  return (
    <div className="auth_container">
      <form className="auth_inner">
        <h3>Log In</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Log In</button>
        <span>
          Don't have an acount ? <Link to={"/signup"}>Sign Up</Link>
        </span>
      </form>
    </div>
  );
}

export default LoginForm;
