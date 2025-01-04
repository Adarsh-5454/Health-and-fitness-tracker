import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/AuthPages/Login";
import Profile from "./pages/Profile";
import Chats from "./pages/Chats";
import Shopping from "./pages/Shopping";
import Blogs from "./pages/Blogs";
import Signup from "./pages/AuthPages/Signup";
import SingleBlog from "./pages/SingleBlog";
import CartElement from "./pages/CartElement";
import Workouts from "./pages/Workouts";
import Diets from "./pages/Diets";
import Chatpage from "./components/Chat/Chatpage";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/singlechat" element={<Chatpage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cart" element={<CartElement />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/diets" element={<Diets />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
