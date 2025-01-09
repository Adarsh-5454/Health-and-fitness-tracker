import React from "react";
import style from "./Chat.module.css";
function Doctorlist() {
  return (
    <>
      <div className="bg-white">
        <h3 className=" ml-40 font-bebas font-medium text-2xl sm:text-4xl md:text-5xl text-center pt-16">
          PHYSICIAN SPECIALIST
        </h3>
        <div className="  ml-32 grid grid-cols sm:grid-cols-2  lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10 lg:p-20 ">
          {/* Specialist 1 */}
          <div className=" relative  md:w-1/3 bg-cover bg-center h-80 sm:h-96 lg:h-[600px] text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500">
            <h3 className=" text-2xl sm:text-3xl md:text-4xl text-center font-bebas text-dark py-4 sm:py-7">
              PEDIATRICIAN
            </h3>
            <button className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300 rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 2 */}
          <div className="relative  md:w-1/3 bg-cover bg-center h-80 sm:h-96 lg:h-[600px] text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500">
            <h3 className=" font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              NEUROLOGIST
            </h3>
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300  rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 3 */}
          <div className="relative w-full md:w-1/3 bg-cover bg-center h-80 sm:h-96 lg:h-[600px] text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              DERMATOLOGIST
            </h3>
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300  rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 4 */}
          <div
            className="relative w-full md:w-1/3 bg-cover bg-center h-80 sm:h-96 lg:h-[600px] text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/portrait-hansome-young-male-doctor-man_171337-5068.avif')",
            }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              PSYCHIATRIST
            </h3>
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300  rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 5 */}
          <div
            className="relative w-full md:w-1/3 bg-cover bg-center h-80 sm:h-96 lg:h-[600px] text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/smiling-doctor-with-strethoscope-isolated-grey_651396-974.avif')",
            }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              CARDIOLOGIST
            </h3>
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300  rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 6 */}
          <div
            className="relative w-full md:w-1/3 bg-cover bg-center h-80 sm:h-96 lg:h-[600px] text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/young-blonde-woman-with-doctor-gown-holding-folder_1368-54612.avif')",
            }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              NEPHROLOGIST
            </h3>
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300  rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctorlist;
