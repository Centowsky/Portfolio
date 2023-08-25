import { Route, Routes } from "react-router-dom";
import { NavbarHeader } from "./components/NavbarHeader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
