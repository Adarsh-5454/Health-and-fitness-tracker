// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Chatlayout from "../components/Chat/Chatlayout";
// import Chatmain from "../components/Chat/Chatmain";
// import Chatpage from "../components/Chat/Chatpage";
// import Doctorlist from "../components/Chat/Doctorlist";

// // import Navbar from "../components/Navbar/Navbar";
// // import Chatmain from "../components/Chat/Chatmain";
// // import Chatpage from "../components/Chat/Chatpage";
// // import Chatlayout from "../components/Chat/Chatlayout";
// // import Doctorlist from "../components/Chat/Doctorlist";
// // import NotFound from "./NotFound";
// // import Sidebar from "../components/Sidebar/Sidebar";

// const Chats = () => {
//   return (
//     <>
//       {/* <Router>
//         <Navbar />
//         <Sidebar />
//         <Routes>
//           <Route path="/Chats/Chatmain" element={<Chatmain />} />
//           <Route path="/Chats/Chatpage" element={<Chatpage />} />
//           <Route path="/Chats/Chatlayout" element={<Chatlayout />} />
//           <Route path="/Chats/Doctorlist" element={<Doctorlist />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router> */}
//       <Chatmain />
//     </>
//   );
// };

// export default Chats;
import { useEffect, useState } from "react";
import { socket } from "../lib/socket";

const Chat = ({
  userId,
  receiverId,
}: {
  userId: string;
  receiverId: string;
}) => {
  const [messages, setMessages] = useState<
    { sender: string; content: string }[]
  >([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.emit("join", userId);

    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [userId]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const messageData = {
      sender: userId,
      receiver: receiverId,
      content: newMessage,
    };

    socket.emit("sendMessage", messageData);
    setMessages((prev) => [...prev, messageData]);
    setNewMessage("");
  };

  return (
    <div>
      <h2>Chat with {receiverId}</h2>
      <div>
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{ textAlign: msg.sender === userId ? "right" : "left" }}
          >
            {msg.content}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
