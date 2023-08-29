import React from "react";
import "../styles/Home.scss";

export default function Home(): JSX.Element {
  return (
    <section className="bg-gray-600 h-screen flex flex-col justify-center items-center relative text-white z-0">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Frontend Developer</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          libero eget lectus sollicitudin, non bibendum libero facilisis.
        </p>
        <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded transition duration-1000 hover:bg-amber-600 ">
          Więcej informacji
        </button>
      </div>
    </section>
  );
}
