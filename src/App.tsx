import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import InsertedCard from "../components/InsertedCard";
import WithdrawCash from "../components/WithdrawCash";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inserted-card" element={<InsertedCard />} />
        <Route path="/withdraw-cash" element={<WithdrawCash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
