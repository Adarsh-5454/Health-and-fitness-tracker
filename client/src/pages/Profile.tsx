const Profile = () => {
   return (
      <>
         <div className="h-screen flex">
            <div className="flex w-full">
               {/* <!-- Profile Section --> */}
               <div className="flex flex-col items-center bg-light shadow-md bg-purple-50  text-white w-80 h-screen p-5">
                  <div className="w-36 h-36 bg-black rounded-full bg-cover bg-center mb-8"></div>
                  <h3 className="text-black text-xl font-medium mb-2">
                     User Name
                  </h3>
                  <p className="text-black font-bold">Full name</p>
                  <p className="text-black font-bold mb-6">Role</p>
                  <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                     Account
                  </button>
                  <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                     Change password
                  </button>
                  <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                     Logout
                  </button>
               </div>

               {/* <!-- Form Section --> */}
               <div className="flex-grow p-8 ">
                  <div className="relative w-36 h-36 mx-auto bg-black rounded-full bg-cover bg-center mb-8">
                     <div className="absolute w-12 h-12 bg-cover bg-center rounded-full bottom-0 right-0"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <input
                        type="text"
                        className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="User Name"
                     />
                     <input
                        type="text"
                        className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Full Name"
                     />
                  </div>

                  <div className="grid grid-cols-2 gap-4  mt-4">
                     <label className="text-sm">Date of birth</label>
                     <label className="text-sm ">Gender</label>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-2">
                     <input
                        type="date"
                        className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     <div className="flex gap-4">
                        <label className="flex items-center">
                           <input type="radio" name="Gender" className="mr-2" />{" "}
                           Male
                        </label>
                        <label className="flex items-center">
                           <input type="radio" name="Gender" className="mr-2" />{" "}
                           Female
                        </label>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                     <input
                        type="email"
                        className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Email"
                     />
                     <input
                        type="text"
                        className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Phone number"
                     />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                     <input
                        type="text"
                        className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="City"
                     />
                     <input
                        type="text"
                        className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Pincode"
                     />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                     <input
                        type="text"
                        className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="State"
                     />
                     <input
                        type="text"
                        className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Country"
                     />
                  </div>

                  <label className="block mt-4 text-sm">Role</label>

                  <div className="flex gap-4 mt-2">
                     <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                        Trainer
                     </button>
                     <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                        Doctor
                     </button>
                     <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                        Nutritionist
                     </button>
                  </div>

                  <div id="Trainer" className="role mt-4"></div>

                  <div id="Doctor" className="role hidden mt-4">
                     <h2 className="text-lg font-medium mb-2">Doctor</h2>
                     <div className="grid grid-cols-2 gap-4">
                        <input
                           type="text"
                           className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                           placeholder="Specialist or Department"
                        />
                        <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                           Upload file
                        </button>
                     </div>
                  </div>

                  <div id="Nutritionist" className="role hidden mt-4">
                     <h2 className="text-lg font-medium mb-2">Nutritionist</h2>
                     <div className="grid grid-cols-2 gap-4">
                        <input
                           type="text"
                           className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                           placeholder="Years of experience"
                        />
                        <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                           Upload file
                        </button>
                     </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                     <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                        Reset
                     </button>
                     <button className="w-full p-2 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4">
                        Save
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Profile;
