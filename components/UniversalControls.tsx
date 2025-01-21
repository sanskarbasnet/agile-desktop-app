import { useNavigate } from "react-router-dom";

function UniversalControls() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-700 to-emerald-800 p-2 shadow-lg w-fit m-4 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-white hover:bg-green-600 rounded-lg transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-white hover:bg-green-600 rounded-lg transition-colors"
        >
          Main Menu
        </button>

        <button
          onClick={() => window.close()}
          className="px-4 py-2 text-white hover:bg-green-600 rounded-lg transition-colors"
        >
          Exit
        </button>
      </div>
    </nav>
  );
}

export default UniversalControls;
