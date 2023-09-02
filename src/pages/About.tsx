interface SkillLevels {
  [key: string]: { level: number; category: string };
}

export default function About(): JSX.Element {
  const skillLevels: SkillLevels = {
    HTML: { level: 80, category: "Frontend" },
    CSS: { level: 70, category: "Frontend" },
    JavaScript: { level: 60, category: "Frontend" },
    ReactJS: { level: 70, category: "Frontend" },
    TailwindCSS: { level: 65, category: "Frontend" },
    Bootstrap: { level: 75, category: "Frontend" },
    Python: { level: 85, category: "Pozostałe" },
    SQL: { level: 75, category: "Pozostałe" },
    PHP: { level: 50, category: "Pozostałe" },
    NodeJS: { level: 70, category: "Pozostałe" },
    WordPress: { level: 60, category: "Pozostałe" },
    Office: { level: 75, category: "Pozostałe" },
  };

  const renderSkillBar = (
    skill: string,
    level: number,
    category: string
  ): JSX.Element => (
    <div className="mb-2">
      <span>{skill}</span>
      <div className="bg-gray-600 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-amber-500 to-amber-600 h-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  const renderSkillsByCategory = (category: string): JSX.Element => (
    <div>
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="flex flex-col">
        {Object.keys(skillLevels).map(
          (skill) =>
            skillLevels[skill].category === category &&
            renderSkillBar(skill, skillLevels[skill].level, category)
        )}
      </div>
    </div>
  );

  return (
    <section className="bg-gray-700 h-screen flex flex-col justify-center items-center relative text-white z-0">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-8 tracking-tight">O mnie</h1>
        <p className="text-xl leading-8 mb-8 px-4">
          Jestem studentem trzeciego roku informatyki i pasjonatem tworzenia
          stron internetowych. Moje umiejętności w tej dziedzinie stale się
          rozwijają, a moim celem jest tworzenie estetycznych, interaktywnych i
          responsywnych stron WWW. Poniżej znajdują się umiejętności, które
          dotychczas najbardziej udało mi się rozwinąć:
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {["Frontend", "Pozostałe"].map((category) => (
            <div key={category}>{renderSkillsByCategory(category)}</div>
          ))}
        </div>
        <button className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-full transition duration-500 hover:shadow-lg">
          Zobacz moje projekty
        </button>
      </div>
    </section>
  );
}
