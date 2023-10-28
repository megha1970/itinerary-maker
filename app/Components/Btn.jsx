import React from "react";

const Btn = ({ text, color, textSize, onClick, hover }) => {
  return (
    <div
      onClick={onClick}
      className={`${color} rounded-lg border-[1.8px] border-solid border-black 
  px-9 py-[3px] w-fit min-w-fit max-w-full
  self-center place-self-center
  text-center ${textSize}
  ${hover}`}
    >
      {text}
    </div>
  );
};

export default Btn;
