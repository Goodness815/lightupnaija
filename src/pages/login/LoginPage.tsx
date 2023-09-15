import LoginForm from "../../components/authentication/LoginForm"
import HomeLayout from "../../components/layouts/HomeLayout"

function LoginPage() {
  return (
    <div>
      <HomeLayout>
        <LoginForm />
      </HomeLayout>
    </div>
  )
}

export default LoginPage