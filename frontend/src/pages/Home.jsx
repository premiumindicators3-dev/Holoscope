import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!dob) return alert("Please select your date of birth");
    navigate("/result", { state: { dob } });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* LOGO */}
      <div className="flex flex-col items-center py-8">
        <img
          src="/logo.jpeg"
          alt="logo"
          className="w-44 md:w-60 rounded-full rotate-slow glow"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mt-4">
          Horoscope
        </h1>
      </div>

      {/* HERO */}
      <div className="px-4 md:px-10 mb-12">
        <img
          src="/banner.jpeg"
          alt="banner"
          className="rounded-2xl shadow-xl"
        />
      </div>

      {/* PROBLEM SECTION */}
      <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto mb-16">
        {[
          ["Confused about career?", "Wrong path? No growth?"],
          ["Love life uncertain?", "Will it last? Marriage?"],
          ["Money ups & downs?", "Expenses? Savings issues?"],
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-700 hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold text-yellow-300 mb-2">
              {item[0]}
            </h2>
            <p className="text-gray-400 text-sm">{item[1]}</p>
          </div>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="text-center px-6 max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-6">
          Understand Your Timeline
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-4 rounded-lg">✨ Insights</div>
          <div className="bg-gray-900 p-4 rounded-lg">⏳ Timeline</div>
          <div className="bg-gray-900 p-4 rounded-lg">⭐ Events</div>
          <div className="bg-gray-900 p-4 rounded-lg">💡 Decisions</div>
        </div>
      </div>

      {/* DOB INPUT */}
      <div className="text-center mb-16">
        <h3 className="text-xl mb-4 text-gray-300">
          Enter your Date of Birth
        </h3>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="bg-gray-900 border border-gray-700 p-3 rounded-lg text-white"
        />

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 text-black px-10 py-3 rounded-full font-semibold hover:bg-yellow-300 glow transition"
          >
            Know Your Future ✨
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 py-6 border-t border-gray-800">
        © 2026 Horoscope
      </div>
    </div>
  );
};

export default Home;