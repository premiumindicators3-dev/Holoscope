import React from "react";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";


const Result = () => {
     const navigate = useNavigate();
 
  const location = useLocation();
  const dob = location.state?.dob;

const handlePayment = async (amount) => {
    try {
    // Step 1: create order from backend
    const res = await fetch("https://holoscope-x61p.onrender.com/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();

    // Step 2: open Razorpay
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      name: "Horoscope",
      description: "Purchase Horoscope Report",
      order_id: order.id,

      handler: function (response) {
        navigate("/success");
      },

      theme: {
        color: "#FACC15",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* HEADER */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl text-yellow-400 font-bold mb-4">
          Your Horoscope Report 🔮
        </h1>
        <p className="text-gray-400">
          Date of Birth: {dob}
        </p>
      </div>

      {/* IMAGE SECTIONS */}
      <div className="space-y-12 px-4 md:px-10">

        <img
          src="/p.jpeg"
          alt="Instant Access"
          className="rounded-2xl shadow-xl"
        />

    

        <img
          src="/d.jpeg"
          alt="Report"
          className="rounded-2xl shadow-xl"
        />

      </div>

      {/* PRICING SECTION */}
      <div className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-10">
          Choose Your Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* BASIC */}
          <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4 text-green-400">Basic</h3>
            <p className="text-3xl font-bold mb-4">₹100</p>
            <p className="text-gray-400 mb-6">
              Basic life insights and summary
            </p>
            <button onClick={() => handlePayment(100)} className="bg-green-500 px-6 py-2 rounded-full text-black font-semibold hover:bg-green-400">
              Buy Now
            </button>
          </div>

          {/* MEDIUM */}
          <div className="bg-gray-900 border-2 border-yellow-400 p-8 rounded-xl scale-105 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Medium</h3>
            <p className="text-3xl font-bold mb-4">₹500</p>
            <p className="text-gray-400 mb-6">
              Detailed report with timeline & insights
            </p>
            <button onClick={() => handlePayment(500)} className="bg-yellow-400 px-6 py-2 rounded-full text-black font-semibold hover:bg-yellow-300">
              Buy Now
            </button>
          </div>

          {/* PREMIUM */}
          <div className="bg-gray-900 border border-purple-500 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Premium</h3>
            <p className="text-3xl font-bold mb-4">₹1000</p>
            <p className="text-gray-400 mb-6">
              Full 100-year life report + predictions
            </p>
            <button onClick={() => handlePayment(1000)} className="bg-purple-500 px-6 py-2 rounded-full text-black font-semibold hover:bg-purple-400">
              Buy Now
            </button>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 py-6 border-t border-gray-800">
        © 2026 Horoscope | Secure Payments 🔒
      </div>
    </div>
  );
};

export default Result;
