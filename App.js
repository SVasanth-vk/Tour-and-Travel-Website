import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import Footer from "./components/Footer";
import SignInPage from "./routes/SignInPage";
export default function App() {
  return (
    <div className="App">

      
      <Routes >
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/signInPage" element={<SignInPage/>} />
      </Routes>
    </div>
  );
}
