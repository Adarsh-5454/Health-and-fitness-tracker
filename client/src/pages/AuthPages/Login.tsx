import Button from "../../components/Button/Button";
import Input from "../../components/Inputbox/Input";

const Login = () => {
   return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="w-full flex flex-col justify-center h-screen sm:w-96 px-6 py-8 bg-light shadow-md bg-purple-50 rounded-lg text-center">
            <div className="w-12 h-12 bg-primary-dark rounded-full mx-auto mb-4"></div>
            <h3 className="text-2xl font-medium mb-6">Login</h3>
            <div className="space-y-4">
               <Input placeholder={"Email or phone number"} type={"text"} />
               <Input placeholder={"Password"} type={"password"} />
            </div>
            <div className="mt-6">
               <Button label={"Login"} />
            </div>
            <div className="flex justify-between mt-4">
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
