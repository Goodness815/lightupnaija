import { Link } from "react-router-dom";
import "./authentication.css";
function SignUpForm() {
  return (
    <div className="auth_container">
      <form className="auth_inner">
        <h3>Log In</h3>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
        <span>
          Already have an acount ? <Link to={"/login"}>Log In</Link>
        </span>
      </form>
    </div>
  );
}

export default SignUpForm;
