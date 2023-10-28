import React from "react";

const Btn = ({ text, color, textSize, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${color} rounded-lg border-[1.8px] border-solid border-black 
  px-9 py-[3px] w-fit max-w-full
  self-center place-self-center
  text-center ${textSize}
  hover:opacity-75 hover:cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Btn;
