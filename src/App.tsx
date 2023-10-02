import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarHeader from "./components/NavbarHeader";
import ScrollDownButton from "./components/ScrollDownButton";

import Page from "./pages/Page";
import "./styles/App.scss";

AOS.init({ duration: 1000 });

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/portfolio" element={<Page />} />
        <Route path="*" element={<Page />} />
        {/* <Route path="/home" element={<Page />} /> */}
        {/* <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
      <ScrollDownButton />
    </div>
  );
}

export default App;
