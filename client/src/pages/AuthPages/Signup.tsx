import Button from "../../components/Button/Button";
import Input from "../../components/Inputbox/Input";

const Signup = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center  ">
        <div
          className=" px-6 py-8 bg-light shadow-md bg-purple-50 rounded-lg text-center"
          style={{ width: "410px" }}
        >
          <h3 className="text-2xl font-medium mb-6">Create a new account</h3>

          <Input placeholder={"User Name"} type={"text"} />
          <Input placeholder={"Email or phone number"} type={"text"} />
          <Input placeholder={"Password"} type={"password"} />
          <Input placeholder={"Confirm password"} type={"password"} />

          <p className="text-xs text-left leading-5 mb-4">
            By clicking Sign Up, you agree to our
            <a href="" className="text-blue-700 hover:underline mr-1">
              Terms, Data Policy
            </a>
            <span>and</span>
            <a href="" className="text-blue-700 hover:underline ml-1">
              Cookies Policy.
            </a>
            You may receive SMS notifications from us and can opt out at any
            time.
          </p>
          <Button label={"Sign Up"} />
          <div className="text-center">
            <a
              href="Login.html"
              className="text-primary-light text-sm hover:underline"
            >
              Already have an account?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
