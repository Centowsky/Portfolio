import React from "react";
import "../styles/Home.scss";

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-indigo-600 to-gray-800 h-screen flex flex-col justify-center items-center relative text-white z-0">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Frontend Developer</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          libero eget lectus sollicitudin, non bibendum libero facilisis.
        </p>
        <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 ">
          Więcej informacji
        </button>
      </div>
    </section>
  );
}
