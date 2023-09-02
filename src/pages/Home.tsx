import React from "react";

export default function Home(): JSX.Element {
  return (
    <section className="bg-gray-900 h-screen flex flex-col justify-center items-center relative text-white z-0">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-8 tracking-tight">
          Frontend Developer
        </h1>
        <p className="text-xl leading-8 mb-8 px-4">
          Jestem Centowsky, początkujący web frontend developer z doświadczeniem
          w HTML, CSS i JavaScript. Obecnie rozwijam swoje umiejętności w
          ReactJS i TailwindCSS. Na mojej stronie znajdziesz informacje o moich
          projektach oraz linki do moich realizacji. Jestem otwarty na
          współpracę i chętnie pomogę Ci w stworzeniu wymarzonej strony
          internetowej.
        </p>
        <button className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-full transition duration-500 hover:shadow-lg">
          Zobacz więcej
        </button>
      </div>
    </section>
  );
}
