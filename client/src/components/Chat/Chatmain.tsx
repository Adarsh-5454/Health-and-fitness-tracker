import React from "react";
import Chatlayout from "./Chatlayout";
import Chatpage from "./Chatpage";
import Doctorlist from "./Doctorlist";

function Chatmain() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-100 via-purple-400 to-purple-900">
        <div>
          <h1 className="font-bebas font-medium text-4xl sm:text-6xl md:text-9xl text-center pt-16">
            CHAT WITH OUR EXPERTS
          </h1>
          <p className="mt-10 text-lg sm:text-2xl md:text-5xl text-center pt-5 font-sans">
            Connect with our experts to get professional advice on health,
            nutrition, and fitness.
            <br />
            Ask questions, share your concerns, and receive personalized
            guidance to achieve your wellness goals.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 sm:p-10 md:p-20">
          <div
            className="mt-2 flex flex-col justify-center p-4 sm:p-8 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/istockphoto-1396653978-612x612.jpg')",
              height: "300px",
              width: "100%",
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-center font-bebas text-blue-700 mb-16 sm:mb-20 md:mb-24">
              NUTRITIONIST
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-center font-serif font-medium text-black p-5 sm:p-10">
              Receive personalized dietary recommendations from expert
              nutritionists.
              <br />
              Plan meals that align with your health and fitness goals.
            </p>
          </div>
          <div
            className="mt-16 sm:mt-20 md:mt-24 flex flex-col justify-center p-4 sm:p-8 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/abdominal-male-blue-hoodie-holds-burning-barbell-with-smoke-grey-background_613910-15332.avif')",
              height: "300px",
              width: "100%",
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-center font-bebas text-blue-700 mb-16 sm:mb-20 md:mb-24">
              GYM EXPERT
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-center font-serif font-medium text-black p-5 sm:p-10">
              Get fitness tips and workout guidance from certified gym experts.
              Tailor your exercise routines to improve strength, endurance, and
              overall fitness.
            </p>
          </div>
          <div
            className="mt-16 sm:mt-20 md:mt-24 flex flex-col justify-center p-4 sm:p-8 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/portrait-hansome-young-male-doctor-man_171337-5068.avif')",
              height: "300px",
              width: "100%",
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-center font-bebas text-blue-700 mb-16 sm:mb-20 md:mb-24">
              DOCTOR
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-center font-serif font-medium text-black p-5 sm:p-10">
              Get reliable medical advice from qualified doctors. Discuss
              symptoms, treatments, and preventive care to stay on top of your
              health.
            </p>
          </div>
        </div>
      </div>

      <Chatlayout />
      <Chatpage />
      <Doctorlist />
    </>
  );
}

export default Chatmain;
