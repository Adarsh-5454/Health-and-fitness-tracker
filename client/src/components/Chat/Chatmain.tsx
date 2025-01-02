import React from "react";
import Chatlayout from "./Chatlayout";
import Chatpage from "./Chatpage";
import Doctorlist from "./Doctorlist";
import style from "./Chat.module.css";

function Chatmain() {
  return (
    <>
      <div className="bg-white ">
        <div>
          <h1 className="font-bebas font-medium text-4xl sm:text-6xl md:text-6xl text-center pt-16">
            CHAT WITH OUR EXPERTS
          </h1>
          <p className="mt-10 text-lg sm:text-2xl md:text-2xl text-center pt-5 font-sans">
            Connect with our experts to get professional advice on health,
            nutrition, and fitness.
            <br />
            Ask questions, share your concerns, and receive personalized
            guidance to achieve your wellness goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5 sm:p-10 md:p-20">
          <div
            className="flex flex-col justify-center p-4 sm:p-8 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/istockphoto-1396653978-612x612.jpg')",
              height: "300px",
              width: "100%",
            }}
          >
            <h1 className="text-4xl sm:text-4xl md:text-4xl text-center font-bebas text-blue-700 mb-6">
              NUTRITIONIST
            </h1>
            <p className="text-xl sm:text-2xl md:text-2xl text-center font-serif font-medium text-black px-5 sm:px-10">
              Receive personalized dietary recommendations from expert
              nutritionists.
            </p>
          </div>

          <div
            className="flex flex-col justify-center p-4 sm:p-8 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/abdominal-male-blue-hoodie-holds-burning-barbell-with-smoke-grey-background_613910-15332.avif')",
              height: "300px",
              width: "100%",
            }}
          >
            <h1 className="text-4xl sm:text-4xl md:text-4xl text-center font-bebas text-blue-700 mb-3 p-2">
              GYM EXPERT
            </h1>
            <p className="text-xl sm:text-2xl md:text-2xl text-center font-serif font-medium text-black px-5 sm:px-10">
              Get fitness tips and workout guidance from certified gym experts.
            </p>
          </div>

          <div
            className="flex flex-col justify-center p-4 sm:p-8 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/portrait-hansome-young-male-doctor-man_171337-5068.avif')",
              height: "300px",
              width: "100%",
            }}
          >
            <h1 className="text-4xl sm:text-4xl md:text-4xl text-center font-bebas text-blue-700 mb-6">
              DOCTOR
            </h1>
            <p className="text-xl sm:text-2xl md:text-2xl text-center font-serif font-medium text-black px-5 sm:px-10">
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
