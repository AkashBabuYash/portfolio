import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';
import Project from "./components/Project";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar"
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/resume" element={<Resume/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
