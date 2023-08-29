import React from "react";
import ContactForm from "./ContactForm";
interface SocialLinkProps {
  href: string;
  icon: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-400 hover:text-gray-200"
  >
    {icon === "github" && (
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
    )}
    {icon === "facebook" && (
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
    )}
    {icon === "discord" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-discord"
        viewBox="0 0 16 16"
      >
        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
      </svg>
    )}
    <span className="ml-2">{label}</span>
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 md:flex md:justify-between">
        <div className="flex space-x-4 md:w-1/2">
          <ContactForm />
        </div>
        <div className="flex justify-center items-center space-x-4 md:w-1/2">
          <div className="flex flex-col text-center">
            <p className="text-gray-300 text-xl py-4">Socialmedia</p>
            <div className="flex justify-center space-x-10">
              <SocialLink
                href="https://github.com/Centowsky"
                icon="github"
                label="GitHub"
              />
              <SocialLink
                href="https://www.facebook.com/centowskyofficial"
                icon="facebook"
                label="Facebook"
              />
              <SocialLink
                href="https://discord.com/channels/@me/133190016200343552"
                icon="discord"
                label="Discord"
              />
            </div>
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
