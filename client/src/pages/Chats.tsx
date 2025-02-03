import React, { useEffect, useState } from "react";
import { socket } from "../lib/socket";

interface ChatProps {
  userId: string;
  receiverId: string;
}

const Chat: React.FC<ChatProps> = ({ userId, receiverId }) => {
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
