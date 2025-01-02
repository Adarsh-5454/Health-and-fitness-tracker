import React from "react";

function Doctorlist() {
  return (
    <>
      <h1 className="font-bebas text-center text-4xl sm:text-6xl md:text-8xl pt-10">
        PHYSICIAN SPECIALIST
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 mt-10 px-5">
        {/* Specialist 1 */}
        <div
          className="relative w-full md:w-1/3 bg-cover bg-center h-80 sm:h-96 lg:h-[600px] text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage:
              "url('assets/doctor-with-his-arms-crossed-white-background_1368-5790.avif')",
          }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-impact text-white pt-10">
            PEDIATRICIAN
          </h3>
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
            APPOINTMENTS
          </button>
        </div>
        {/* Specialist 2 */}
        <div
          className="relative w-full md:w-1/3 bg-cover bg-center h-80 sm:h-96 lg:h-[600px] text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage:
              "url('assets/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-88112.avif')",
          }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-impact text-white pt-10">
            NEUROLOGIST
          </h3>
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
            APPOINTMENTS
          </button>
        </div>
        {/* Specialist 3 */}
        <div
          className="relative w-full md:w-1/3 bg-cover bg-center h-80 sm:h-96 lg:h-[600px] text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage:
              "url('assets/front-view-male-doctor-medical-suit-wearing-mask-due-covid-white-wall-illness-covid-pandemic-virus-disease_140725-67338.avif')",
          }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-impact text-white pt-10">
            DERMATOLOGIST
          </h3>
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
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
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-impact text-white pt-10">
            PSYCHIATRIST
          </h3>
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
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
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-impact text-white pt-10">
            CARDIOLOGIST
          </h3>
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
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
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-impact text-white pt-10">
            NEPHROLOGIST
          </h3>
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-3/4 sm:w-2/3 lg:w-1/2 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
            APPOINTMENTS
          </button>
        </div>
      </div>
    </>
  );
}

export default Doctorlist;
