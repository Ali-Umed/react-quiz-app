import React from "react";
import SpiWheel from "react-spin-to-wheel/index";

const SpinWheel = () => {
  const segments = [
    {
      color: "#db7093",
      value: "programing",
    },
    {
      color: "#20b2aa",
      value: "sport",
    },
    {
      color: "#d63e92",
      value: "random",
    },
    {
      color: "#daa520",
      value: "history",
    },
    {
      color: "#ff340f",
      value: "match",
    },
    {
      color: "#ff7f50",
      value: "arabic",
    },
    {
      color: "#3cb371",
      value: "quran",
    },
    {
      color: "#4169e1",
      value: "mistory",
    },
  ];

  const spinOutput = (result) => {
    alert(result);
  };
  return <SpiWheel segments={segments} spinOutput={spinOutput} />;
};

export default SpinWheel;
