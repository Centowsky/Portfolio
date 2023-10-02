import React from "react";

export default function NotFound(): JSX.Element {
  return (
    <section className="bg-gray-900 h-screen flex flex-col justify-center items-center relative text-white z-0">
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-6xl font-bold mb-8 tracking-tight"
          data-aos="zoom-in-down"
          data-aos-delay="200"
        >
          404 - Strona nie znaleziona
        </h1>
        <p
          className="text-xl leading-8 mb-8 px-4"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          Przepraszamy, ale strona, której szukasz, nie została znaleziona. Być
          może adres URL jest niepoprawny lub strona została usunięta.
        </p>
        <a
          href="/"
          className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-full transition duration-500 hover:shadow-lg"
          data-aos="fade-right"
          data-aos-delay="1500"
        >
          Wróć do strony głównej
        </a>
      </div>
    </section>
  );
}
