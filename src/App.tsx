import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarHeader from "./components/NavbarHeader";
import ScrollDownButton from "./components/ScrollDownButton";
import ErrorPage from "./pages/NotFound";
import CV from "./pages/CV";

import Page from "./pages/Page";
import "./styles/App.scss";

AOS.init({ duration: 1000 });

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Routes>
        <Route index element={<Page />} />
        <Route path="/" element={<Page />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ScrollDownButton />
    </div>
  );
}

export default App;
