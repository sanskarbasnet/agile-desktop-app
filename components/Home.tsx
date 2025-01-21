import { useState } from "react";
import {
  FaDollarSign,
  FaCreditCard,
  FaMobileAlt,
  FaUniversity,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-emerald-900 flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-sm p-12 rounded-2xl shadow-2xl w-[32rem]">
        <div className="flex items-center justify-center mb-8">
          <FaUniversity className="text-6xl text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
          Welcome to TheAgileCult ATM
        </h1>
        <h2 className="text-xl text-center mb-8 text-gray-600">
          Please select your transaction method:
        </h2>

        <div className="space-y-5">
          <button
            onClick={() => navigate("/inserted-card")}
            className="w-full py-5 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-4 group"
          >
            <FaCreditCard className="text-2xl group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold">Insert Card</span>
          </button>

          <button
            onClick={() => handleOptionSelect("tap_card")}
            className="w-full py-5 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-4 group"
          >
            <FaMoneyBillWave className="text-2xl group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold">Tap Contactless Card</span>
          </button>

          <button
            onClick={() => handleOptionSelect("tap_mobile")}
            className="w-full py-5 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-4 group"
          >
            <FaMobileAlt className="text-2xl group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold">Mobile Payment</span>
          </button>
        </div>

        {selectedOption && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-100 rounded-full text-green-800 font-medium">
              <FaDollarSign className="text-lg" />
              <span>
                Method selected: {selectedOption.split("_").join(" ")}
              </span>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          Secured by TheAgileCult | Available 24/7
        </div>
      </div>
    </div>
  );
}

export default Home;
