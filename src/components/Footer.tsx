import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0 md:w-1/3">
          <Link
            to="https://github.com/twojprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 0a12 12 0 0 0-3.79 23.39c.6.12.82-.27.82-.55 0-.27-.01-1.02-.01-1.99-3.02.65-3.67-1.46-3.67-1.46-.5-1.19-1.22-1.51-1.22-1.51-.99-.68.08-.67.08-.67a1.93 1.93 0 011.42.71 1.97 1.97 0 002.68.77 1.979 1.979 0 01.63-1.24c-2.2-.25-4.52-1.09-4.52-4.86a3.55 3.55 0 011.21-2.78 3.28 3.28 0 01.08-2.82s.89-.28 2.93 1.1a10.14 10.14 0 015.35 0c2.04-1.38 2.93-1.1 2.93-1.1a3.27 3.27 0 01.08 2.82 3.55 3.55 0 011.21 2.78c0 3.77-2.32 4.61-4.53 4.86a2.072 2.072 0 01.62 1.61c0 1.16-.01 2.1-.01 2.39 0 .27.22.59.82.46A12 12 0 0012 0z"
              />
            </svg>
            <span className="ml-2">GitHub</span>
          </Link>
          <Link
            to="https://facebook.com/twojprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M21 12.01c0-5.523-4.477-10-10-10S1 6.487 1 12.01c0 5.15 3.968 9.39 9.062 9.984v-7.056H7.057V12.01H9.06V9.383c0-2.935 1.74-4.566 4.433-4.566 1.284 0 2.825.229 2.825.229v2.95H15.43c-1.57 0-2.058 1.03-2.058 2.08V12.01h3.49l-.557 2.983h-2.933v7.056C17.032 21.4 21 17.16 21 12.01"
              />
            </svg>
            <span className="ml-2">Facebook</span>
          </Link>
        </div>
        <div className="flex space-x-4 md:w-2/3">
          <div className="container mx-auto px-10 py-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Skontaktuj się z nami
            </h2>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Wyślij
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-gray-900">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Centowsky - Wszelkie prawa
          zastrzeżone
        </p>
      </div>
    </footer>
  );
};

export default Footer;
