import { Route, Routes } from "react-router-dom";
import NavbarHeader from "./components/NavbarHeader";
import ScrollDownButton from "./components/ScrollDownButton";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
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
      <Footer />
      <ScrollDownButton />
    </div>
  );
}

export default App;
