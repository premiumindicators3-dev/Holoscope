import React from "react";

const Success = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl md:text-5xl text-green-400 font-bold mb-6">
        Payment Successful 🎉
      </h1>

      <p className="text-gray-400 mb-8 max-w-md">
        Your horoscope report is ready. Click below to receive your report on WhatsApp.
      </p>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/7396738496?text=Hi%20I%20have%20completed%20payment%20for%20Horoscope%20report"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 px-8 py-3 rounded-full text-black font-semibold hover:bg-green-400 transition"
      >
        Get Report on WhatsApp 📲
      </a>

      <p className="text-gray-600 text-sm mt-6">
        Our team will respond shortly with your personalized report.
      </p>

    </div>
  );
};

export default Success;