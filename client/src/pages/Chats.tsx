import React, { useEffect, useState, useRef } from "react";
import { socket } from "../lib/socket";

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface Message {
  sender: string;
  content: string;
}

const allUsers: User[] = [
  { id: "user1", name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: "user2", name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: "user3", name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
];

const ChatApp: React.FC<{ userId: string }> = ({ userId }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.emit("join", userId);

    socket.on("updateUsers", (users: string[]) => {
      setOnlineUsers(users);
    });

    const handleReceiveMessage = (message: Message) => {
      setMessages((prev) => [...prev, message]);
    };

    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("updateUsers");
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedUser) return;

    const messageData = {
      sender: userId,
      receiver: selectedUser.id,
      content: newMessage,
    };

    socket.emit("sendMessage", messageData);
    setMessages((prev) => [...prev, messageData]);
    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-300 via-violet-200 to-pink-300">
      {/* Sidebar - People List */}
      <div className="w-1/3 bg-white border-r border-gray-300 shadow-lg rounded-l-xl">
        <h2 className="text-2xl font-semibold p-6 text-gray-700">Chats</h2>
        <div className="overflow-y-auto h-full">
          {allUsers.map((user) => (
            <div
              key={user.id}
              className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-violet-200 hover:text-white transition-all rounded-xl ${
                selectedUser?.id === user.id ? "bg-violet-900 text-white" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full border-2 border-purple-400"
              />
              <span className="text-lg font-semibold">{user.name}</span>
              {onlineUsers.includes(user.id) && (
                <span className="ml-auto text-green-500 text-sm">Online</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-2/3 flex flex-col">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="mt-12 bg-white p-6 flex items-center gap-4 border-b border-gray-300 shadow-md rounded-t-xl">
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                className="w-14 h-14 rounded-full border-2 border-purple-400"
              />
              <div>
                <h2 className="font-semibold text-xl text-gray-800">
                  {selectedUser.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {onlineUsers.includes(selectedUser.id) ? "Online" : "Offline"}
                </p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg max-w-md shadow-lg ${
                    msg.sender === userId
                      ? "bg-purple-800 text-white ml-auto"
                      : "bg-white text-black border border-gray-300"
                  } mb-4`}
                >
                  {msg.content}
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            {/* Message Input */}
            <div className="flex p-6 bg-white border-t border-gray-300 items-center shadow-md rounded-b-xl">
              <input
                type="text"
                className="flex-1 p-4 border-2 border-purple-400 rounded-full focus:outline-none text-gray-700"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="ml-4 bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-500 text-lg">
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
