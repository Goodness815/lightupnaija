import SignUpForm from "../../components/authentication/SignUpForm";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function SignUp() {
  return (
    <div>
      <Navbar navLinks={false} />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default SignUp;
