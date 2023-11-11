import LoginForm from "../../components/authentication/LoginForm";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function LoginPage() {
  return (
    <div>
      <Navbar navLinks={false} />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;
