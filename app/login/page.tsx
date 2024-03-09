import { NavigatorBar } from "../component/navigationBar";
import LoginForm from "../component/loginForm";

function Login() {
  return (
    <>
    <div className="relative z-10">
    <NavigatorBar />
    </div>
    <LoginForm/>
    </> 
  )
}

export default Login;