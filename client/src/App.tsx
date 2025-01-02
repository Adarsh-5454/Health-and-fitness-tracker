import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/AuthPages/Login";
import Profile from "./pages/Profile";
import Chats from "./pages/Chats";
import Shopping from "./pages/Shopping";
import Blogs from "./pages/Blogs";
import Signup from "./pages/AuthPages/Signup";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
