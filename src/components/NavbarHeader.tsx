import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

interface MenuItem {
  text: string;
  link: string;
}

export default function NavbarHeader() {
  const [navbar, setNavbar] = useState(false);

  const logoText: string = "CENTOWSKY";
  const menuItems: MenuItem[] = [
    { text: "Strona główna", link: "/" },
    { text: "O mnie", link: "/about" },
    { text: "Projekty", link: "/projects" },
    { text: "Kontakt", link: "/contact" },
  ];

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const handleContactClick = () => {
    const formContact = document.getElementById("contact");
    if (formContact) {
      formContact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`mx-auto max-w-full py-2 px-4 bg-gradient-to-b bg-gray-800  text-white rounded-b-lg fixed top-0 w-screen select-none z-10 ${
        navbar ? "shadow-lg" : ""
      }`}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between md:py-2 md:block">
            <Link
              to="/"
              className="flex items-center p-1 border-transparent border-b-2 transition hover:scale-110"
            >
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold text-white">{logoText}</span>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={toggleNavbar}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            } `}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="text-white p-1 border-transparent border-b-2 transition duration-500 hover:border-gray-500"
                >
                  {item.link === "#contact" ? (
                    <a href="#contact" onClick={handleContactClick}>
                      {item.text}
                    </a>
                  ) : (
                    <Link to={item.link}>{item.text}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
