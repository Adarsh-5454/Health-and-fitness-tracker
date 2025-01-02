import React from "react";

function Chatpage() {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-center mt-10">
        <div className="flex justify-between items-center w-full max-w-3xl h-16 bg-purple-200 border-4 border-black px-4 text-lg sm:text-xl md:text-2xl">
          <button className="px-4 py-2 bg-purple-300 rounded hover:bg-purple-400">
            BACK
          </button>
          <p className="font-bold text-purple-800">ALEXANDER</p>
          <p className="font-bold">:</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex justify-center mt-5">
        <div className="flex flex-col w-full max-w-3xl border-4 border-black bg-purple-100 p-4 gap-4">
          {/* Chat Messages */}
          <div className="space-y-4">
            <p className="self-start bg-white text-black p-3 rounded-full w-max max-w-[70%]">
              reth
            </p>
            <p className="self-end bg-white text-black p-3 rounded-full w-max max-w-[70%]">
              wer
            </p>
            <p className="self-start bg-white text-black p-3 rounded-full w-max max-w-[70%]">
              trbgs
            </p>
            <p className="self-end bg-white text-black p-3 rounded-full w-max max-w-[70%]">
              sdfbgsdf
            </p>
            <p className="self-start bg-white text-black p-3 rounded-full w-max max-w-[70%]">
              wgf
            </p>
            <p className="self-end bg-white text-black p-3 rounded-full w-max max-w-[70%]">
              ebf
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center bg-purple-200 border-2 border-black p-2 mt-4">
            <button className="px-4 py-2 bg-purple-300 rounded hover:bg-purple-400">
              img
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow mx-4 h-12 px-4 text-lg bg-white border-2 border-gray-300 rounded focus:outline-none focus:border-purple-500"
            />
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-purple-300 rounded hover:bg-purple-400">
                voice
              </button>
              <button className="px-4 py-2 bg-purple-300 rounded hover:bg-purple-400">
                doc
              </button>
              <button className="px-4 py-2 bg-purple-300 rounded hover:bg-purple-400">
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatpage;
