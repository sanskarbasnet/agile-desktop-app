import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicCard from "./DynamicCard";
import UniversalControls from "./UniversalControls";

function WithdrawCash() {
  const navigate = useNavigate();

  const buttons = [
    {
      icon: "",
      name: "Checking",
      onClick: () => alert("Navigating to fastcash Page"),
    },
    {
      icon: "",
      name: "Savings",
      onClick: () => alert("Navigating to fastcash Page"),
    },
    {
      icon: "",
      name: "Loan",
      onClick: () => alert("Navigating to fastcash Page"),
    },
    {
      icon: "",
      name: "Credit",
      onClick: () => alert("Navigating to fastcash Page"),
    },
  ];
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-green-800 to-emerald-900 flex items-center justify-center">
    <div className="absolute">
      <UniversalControls />
    </div>
    <DynamicCard title="Cash Withdrawal" subheading="Select an Account" buttons={buttons}/>
    </div>
  )
}

export default WithdrawCash