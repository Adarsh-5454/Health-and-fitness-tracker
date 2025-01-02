import React from "react";

function Chatlayout() {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center mt-10 bg-white ">
          <div className="w-full max-w-4xl bg-gray-800 text-white p-5 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">MESSAGES</h1>
            <div className="flex items-center gap-4">
              <input
                type="text"
                className="flex-grow h-12 px-6 rounded-full text-black text-lg"
                placeholder="Search"
              />
              <button className="bg-purple-500 text-white px-5 py-2 rounded-full hover:bg-purple-600">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex justify-center mt-6">
          <div className="w-full max-w-4xl bg-gray-800 text-white p-5 rounded-lg shadow-lg">
            <ul className="space-y-4 ps-5">
              {/* Chat List Item */}
              {[
                { name: "Sreekuttan", message: "hi hellooo", time: "3:40" },
                { name: "Jithu", message: "Typing.....", time: "12:10" },
                { name: "Athira", message: "heyyyyyy", time: "8:22" },
                { name: "Christo", message: "Namastee", time: "2:15" },
                { name: "Adarsh", message: "good morning!", time: "6:58" },
              ].map((chat, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-gray-700 pb-3"
                >
                  <div>
                    <h3 className="text-xl font-bold">{chat.name}</h3>
                    <p className="text-gray-300">{chat.message}</p>
                  </div>
                  <span className="text-sm text-gray-400">{chat.time}</span>
                </li>
              ))}
            </ul>

            {/* Footer Buttons */}
            <div className="flex justify-around mt-6">
              <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">
                CHAT ICON
              </button>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">
                CALL ICON
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatlayout;
