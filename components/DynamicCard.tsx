import React from "react";

interface Button {
  icon?: React.ReactNode; // Optional icon (e.g., from react-icons)
  name: string; // Name of the button
  onClick: () => void; // Function to handle button click
}

interface DynamicCardProps {
  title: string; // Title of the card
  subheading?: string; // Optional subheading
  buttons: Button[]; // Array of buttons
}

const DynamicCard: React.FC<DynamicCardProps> = ({ title, subheading, buttons }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl w-80">
      <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
        {title}
      </h1>
      {subheading && (
        <p className="text-lg text-center text-gray-600 mb-6">{subheading}</p>
      )}
      <div className="space-y-5">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className="w-full py-5 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-4 group"
          >
            {button.icon && (
              <span className="text-2xl group-hover:scale-110 transition-transform">
                {button.icon}
              </span>
            )}
            <span className="text-lg font-semibold">{button.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DynamicCard;
