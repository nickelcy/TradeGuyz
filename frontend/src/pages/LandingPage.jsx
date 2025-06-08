import { useContext } from "react";
import { PositionContext } from "./App";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const { basePosition, setBasePosition } = useContext(PositionContext);
  console.log(basePosition);
  const handleClick = (position, route) => {
    setBasePosition(position);
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MySite</h1>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="#features" className="hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-5xl font-bold mb-4">Welcome to MySite</h2>
        <p className="text-lg mb-8">
          Your solution for awesome web experiences.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold mb-10">Features</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
            <h4 className="font-semibold text-xl mb-2">Fast</h4>
            <p>Optimized for speed and performance.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
            <h4 className="font-semibold text-xl mb-2">Responsive</h4>
            <p>Looks great on any device.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
            <h4 className="font-semibold text-xl mb-2">Customizable</h4>
            <p>Easy to adapt to your needs.</p>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="py-20 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">Stores</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <button
              onClick={() => handleClick("ea", "/ea")}
              className="text-blue-600 hover:underline"
            >
              Electronics & Accessories
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("ps", "/ps")}
              className="text-blue-600 hover:underline"
            >
              Parts & Spares
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("bt", "/bs")}
              className="text-blue-600 hover:underline"
            >
              Books & Textbooks
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("cf", "/cs")}
              className="text-blue-600 hover:underline"
            >
              Clothing & Fashion
            </button>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; 2025 MySite. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
