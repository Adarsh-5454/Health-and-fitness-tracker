import Button from "../../components/Button/Button";
import Input from "../../components/Inputbox/Input";

const Signup = () => {
   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
         <div className="w-full flex flex-col justify-center h-screen sm:h-fit sm:w-96   px-6 py-8 bg-light shadow-md bg-purple-50 rounded-lg text-center">
            <h3 className="text-2xl font-medium mb-6">Create a new account</h3>

            <div className="space-y-4">
               <Input placeholder={"User  Name"} type={"text"} />
               <Input placeholder={"Email or phone number"} type={"text"} />
               <Input placeholder={"Password"} type={"password"} />
               <Input placeholder={"Confirm password"} type={"password"} />
            </div>

            <p className="text-xs text-left leading-5 my-4">
               By clicking Sign Up, you agree to our
               <a href="" className="text-blue-700 hover:underline mx-1 ">
                  Terms,Data Policy -
               </a>
               <span>and</span>
               <a href="" className="text-blue-700 hover:underline mx-1">
                  Cookies Policy.
               </a>
               You may receive SMS notifications from us and can opt out at any
               time.
            </p>

            <div className="mt-6">
               <Button label={"Sign Up"} />
            </div>

            <div className="text-center mt-4">
               <a
                  href="Login.html"
                  className="text-primary-light text-sm hover:underline"
               >
                  Already have an account?
               </a>
            </div>
         </div>
      </div>
   );
};

export default Signup;
