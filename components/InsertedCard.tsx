import React, { useState } from "react";
import { FaLock, FaMoneyBillWave, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UniversalControls from "./UniversalControls";
function InsertedCard() {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPin = "1234"; // In real app, this would be validated against backend

  const handlePinSubmit = () => {
    if (pin === correctPin) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect PIN. Please try again.");
      setPin("");
    }
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      setPin(e.target.value);
    }
  };

  const handlePasteDemoPin = () => {
    setPin(correctPin);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-green-800 to-emerald-900 flex items-center justify-center">
      <div className="absolute">
        <UniversalControls />
      </div>
      <div className="bg-white/95 backdrop-blur-sm p-12 rounded-2xl shadow-2xl w-[32rem]">
        {!isAuthenticated ? (
          <>
            <div className="flex items-center justify-center mb-8">
              <FaLock className="text-6xl text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
              Enter Your PIN
            </h1>
            <div className="mt-8 space-y-4">
              <div className="relative">
                <input
                  type="password"
                  value={pin}
                  onChange={handlePinChange}
                  maxLength={4}
                  className="w-full text-center text-2xl py-4 border-2 border-green-600 rounded-xl focus:outline-none focus:border-emerald-600"
                  placeholder="****"
                />
                <button
                  onClick={handlePasteDemoPin}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-gray-700"
                >
                  Demo PIN
                </button>
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <button
                onClick={handlePinSubmit}
                className="w-full py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
              Select Transaction
            </h1>
            <div className="space-y-5">
              <button className="w-full py-5 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-4 group">
                <FaSearch className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="text-lg font-semibold">Balance Enquiry</span>
              </button>

              <button className="w-full py-5 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-4 group">
                <FaMoneyBillWave className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="text-lg font-semibold">Cash Withdrawal</span>
              </button>
            </div>
          </>
        )}
        <div className="mt-8 text-center text-sm text-gray-500">
          Secured by TheAgileCult | Available 24/7
        </div>
      </div>
    </div>
  );
}

export default InsertedCard;
