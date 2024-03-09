import Image from "next/image";
import { imageLogin } from "../data/images";

function LoginForm() {
  return (
    <div className="flex">
      <Image src={imageLogin.loginImage} alt="loginImage" />
      <form>
        <div>
          <p>LOGIN</p>
          <h2>Welcome back to Merry Match</h2>
          <div>

          </div>
        </div>
      </form>
      

    </div>
  )
}

export default LoginForm;