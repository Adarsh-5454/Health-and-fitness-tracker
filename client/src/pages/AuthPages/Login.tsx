const Login = () => {
   return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="w-96 px-6 py-8 bg-light shadow-md bg-purple-50 rounded-lg text-center">
            <div className="w-12 h-12 bg-primary-dark rounded-full mx-auto mb-4"></div>
            <h3 className="text-2xl font-medium mb-6">Login</h3>
            <input
               type="text"
               className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
               placeholder="Email or phone number"
            />
            <input
               type="password"
               className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
               placeholder="Password"
            />
            <button className="py-2 px-5 mb-6 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500">
               Login
            </button>
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
