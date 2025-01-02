import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatlayout from "../components/Chat/Chatlayout";
import Chatmain from "../components/Chat/Chatmain";
import Chatpage from "../components/Chat/Chatpage";
import Doctorlist from "../components/Chat/Doctorlist";

// import Navbar from "../components/Navbar/Navbar";
// import Chatmain from "../components/Chat/Chatmain";
// import Chatpage from "../components/Chat/Chatpage";
// import Chatlayout from "../components/Chat/Chatlayout";
// import Doctorlist from "../components/Chat/Doctorlist";
// import NotFound from "./NotFound";
// import Sidebar from "../components/Sidebar/Sidebar";

const Chats = () => {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/Chats/Chatmain" element={<Chatmain />} />
          <Route path="/Chats/Chatpage" element={<Chatpage />} />
          <Route path="/Chats/Chatlayout" element={<Chatlayout />} />
          <Route path="/Chats/Doctorlist" element={<Doctorlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}
      <Chatmain />
    </>
  );
};

export default Chats;
