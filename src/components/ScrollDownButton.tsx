import { useState } from "react";
import "../styles/ScrollDownButton.scss";

function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleScroll = () => {
    setIsVisible(false);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-down-button ${isVisible ? "visible" : ""}`}
      onClick={handleScroll}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white arrow-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  );
}

export default ScrollDownButton;
