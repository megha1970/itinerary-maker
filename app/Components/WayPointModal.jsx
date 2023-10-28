import React from "react";
import { Btn } from ".";

const WayPointModal = ({ modalStep, incStep, incStep2, decStep }) => {
  return (
    <>
      <div className="bg-[#21212198] self-center place-self-center backdrop-blur-md grid fixed">
        <div
          className="bg-[#ffffff]
          self-center place-self-center
          p-6
          rounded-3xl border-[1.8px] border-solid border-black"
        >
          {modalStep == 1 && (
            <div className="grid gap-6 ">
              <Btn
                text="I know where to go"
                color="bg-[#70B570]"
                textSize="text-xl"
                hover="hover:cursor-pointer hover:opacity-75"
                onClick={incStep}
              />
              <h3 className="text-center text-3xl">or</h3>
              <Btn
                text="I need Suggestion"
                color="bg-[#46B7F4]"
                textSize="text-xl"
                hover="hover:cursor-pointer hover:opacity-75"
                onClick={incStep2}
              />
            </div>
          )}
          {/* i knwo where to go */}
          {modalStep == 2 && (
            <div>
              <input
                type="text"
                placeholder="Enter Location"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
      pb-1 px-1 w-full
      text-sm"
              />
              <input type="radio" name="" id="" />

              <input type="datetime" name="" id="" />
              <div className="grid grid-flow-col justify-between">
                <Btn
                  text="Back"
                  color="bg-[#46B7F4]"
                  textSize="text-sm"
                  onClick={decStep}
                  hover="hover:cursor-pointer hover:opacity-75"
                />
                <Btn
                  text="Continue"
                  color="bg-[#46B7F4]"
                  textSize="text-sm"
                  onClick={incStep}
                  hover="hover:cursor-pointer hover:opacity-75"
                />
              </div>
            </div>
          )}
          {/* suggest pls */}
          {modalStep == 3 && (
            <div>
              <input
                type="text"
                placeholder="Choose Location"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
      pb-1 px-1 w-full
      text-sm"
              />
              <input type="radio" name="" id="" />

              <input type="datetime" name="" id="" />
              <div className="grid grid-flow-col justify-between">
                <Btn
                  text="Back"
                  color="bg-[#46B7F4]"
                  textSize="text-sm"
                  onClick={decStep}
                  hover="hover:cursor-pointer hover:opacity-75"
                />
                <Btn
                  text="Continue"
                  color="bg-[#46B7F4]"
                  textSize="text-sm"
                  onClick={incStep}
                  hover="hover:cursor-pointer hover:opacity-75"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WayPointModal;
