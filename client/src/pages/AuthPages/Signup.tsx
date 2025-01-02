const Signup = () => {
   return (
      <>
         <div className="h-screen flex items-center justify-center  ">
            <div
               className=" px-6 py-8 bg-light shadow-md bg-purple-50 rounded-lg text-center"
               style={{ width: "410px" }}
            >
               <h3 className="text-2xl font-medium mb-6">
                  Create a new account
               </h3>
               <input
                  type="text"
                  className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="User Name"
               />
               <input
                  type="password"
                  className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Email or phone number"
               />
               <input
                  type="password"
                  className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Password"
               />
               <input
                  type="password"
                  className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Confirm password"
               />
               <p className="text-xs text-left leading-5 mb-4">
                  By clicking Sign Up, you agree to our
                  <a href="" className="text-blue-700 hover:underline mr-1">
                     Terms, Data Policy
                  </a>
                  <span>and</span>
                  <a href="" className="text-blue-700 hover:underline ml-1">
                     Cookies Policy.
                  </a>
                  You may receive SMS notifications from us and can opt out at
                  any time.
               </p>
               <button className="py-2 px-5 mb-6 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500">
                  Sign Up
               </button>
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
