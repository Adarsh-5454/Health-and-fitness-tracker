import Button from "../../components/Button/Button";
import Input from "../../components/Inputbox/Input";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-96 px-6 py-8 bg-light shadow-md bg-purple-50 rounded-lg text-center">
        <div className="w-12 h-12 bg-primary-dark rounded-full mx-auto mb-4"></div>
        <h3 className="text-2xl font-medium mb-6">Login</h3>
        <Input placeholder={"Email or phone number"} type={"text"} />
        <Input placeholder={"Password"} type={"password"} />
        <Button label={"Login"} />
        <div className="flex justify-between">
          <a
            href="####"
            className="mb-2 text-primary-light text-sm hover:underline"
          >
            Forgot password?
          </a>
          <a
            href="SignUp.html"
            className="text-primary-light text-sm hover:underline"
          >
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
