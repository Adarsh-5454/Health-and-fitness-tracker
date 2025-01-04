import React from "react";
import Chatlayout from "./Chatlayout";
import Chatpage from "./Chatpage";
import Doctorlist from "./Doctorlist";
import style from "./Chat.module.css";

function Chatmain() {
  return (
    <>
      <div className="bg-white px-32">
        <div>
          <h3 className="font-bebas font-medium text-2xl sm:text-4xl md:text-5xl text-center pt-16">
            CHAT WITH OUR EXPERTS
          </h3>
          <p className="mt-10 text-lg sm:text-xl md:text-2xl text-center pt-5 font-sans">
            Connect with our experts to get professional advice on health,
            nutrition, and fitness.
            <br />
            Ask questions, share your concerns, and receive personalized
            guidance to achieve your wellness goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10 lg:p-20">
          <div
            className="flex flex-col justify-center p-4 sm:p-6 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/istockphoto-1396653978-612x612.jpg')",
              height: "300px",
              width: "100%",
            }}
          >
            <h4 className="text-2xl sm:text-3xl md:text-4xl text-center font-bebas text-blue-700 py-4 sm:py-7">
              NUTRITIONIST
            </h4>
            <p className="text-base sm:text-lg md:text-xl text-center font-serif font-medium text-black px-4 sm:px-8">
              Receive personalized dietary recommendations from expert
              nutritionists.
            </p>
          </div>

          <div
            className="flex flex-col justify-center p-4 sm:p-6 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/abdominal-male-blue-hoodie-holds-burning-barbell-with-smoke-grey-background_613910-15332.avif')",
              height: "300px",
              width: "100%",
            }}
          >
            <h4 className="text-2xl sm:text-3xl md:text-4xl text-center font-bebas text-blue-700 py-4 sm:py-7">
              GYM EXPERT
            </h4>
            <p className="text-base sm:text-lg md:text-xl text-center font-serif font-medium text-black px-4 sm:px-8">
              Get fitness tips and workout guidance from certified gym experts.
            </p>
          </div>

          <div
            className="flex flex-col justify-center p-4 sm:p-6 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/portrait-hansome-young-male-doctor-man_171337-5068.avif')",
              height: "300px",
              width: "100%",
            }}
          >
            <h4 className="text-2xl sm:text-3xl md:text-4xl text-center font-bebas text-blue-700 py-4 sm:py-7">
              DOCTOR
            </h4>
            <p className="text-base sm:text-lg md:text-xl text-center font-serif font-medium text-black px-4 sm:px-8">
              Get reliable medical advice from qualified doctors.
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
