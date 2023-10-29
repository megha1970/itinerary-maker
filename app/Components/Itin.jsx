import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import time from "@/assets/time.png";
import money from "@/assets/money.png";
import score from "@/assets/safety.png";
const Itin = ({ vis }) => {
  return (
    <>
      {vis == 3 && (
        <div
          className="bg-[#ffffff]
        self-start place-self-center
        p-6 m-6
        grid gap-3
        rounded-3xl border-[1.8px] border-solid border-black"
        >
          <h1 className="text-center place-self-center">
            Your Itinerary for the Day
          </h1>
          <div className="border-l-2 border-dotted border-black">
            <div className="grid grid-flow-col gap-1">
              <Image src={logo} height={45} width={45} alt="markers" />
              <div
                className="bg-[#E85654] rounded-lg border-[1.8px] border-solid border-black 
  px-6 py-[3px] w-fit min-w-fit max-w-full
  self-center place-self-center
  text-center text-sm
"
              >
                2:00 PM
              </div>
              <h1 className="place-self-center">Manipal University Jaipur</h1>
            </div>
            <h1 className="font-bold text-center">14.64 km - 24 Mins</h1>
            <div className="grid grid-flow-col gap-1">
              <Image
                src={logo}
                height={45}
                width={45}
                alt="markers"
                className="self-center place-self-start"
              />
              <div
                className="bg-[#EAD032] rounded-lg border-[1.8px] border-solid border-black 
  px-6 py-[3px] w-fit min-w-fit max-w-full
  self-center place-self-start
  text-center text-sm
"
              >
                2:24 PM
              </div>
              <div className="self-center place-self-start grid gap-[0px]">
                {" "}
                <h1 className="place-self-center">Elements Mall, Jaipur</h1>
                <h3 className="text-xs place-self-center">1 hour Stop....</h3>
              </div>
            </div>
            <h1 className="font-bold text-center">24 km - 44 Mins</h1>
            <div className="grid grid-flow-col gap-1">
              <Image src={logo} height={45} width={45} alt="markers" />
              <div
                className="bg-[#70B570] rounded-lg border-[1.8px] border-solid border-black 
  px-6 py-[3px] w-fit min-w-fit max-w-full
  self-center place-self-center
  text-center text-sm
"
              >
                5:08 PM
              </div>
              <h1 className="place-self-center">Chokhi Dhani, Pratap Nagar</h1>
            </div>
          </div>
          <h1 className="text-start place-self-center">
            You’ve completed your Journey!
          </h1>
          <div className="w-fit">
            <div className="grid grid-flow-col gap-2 w-fit">
              {" "}
              <Image
                src={time}
                height={30}
                width={30}
                alt="markers"
                className="place-self-start"
              />
              <h3 className="place-self-start grid grid-flow-col">
                <h1> Total time: </h1>

                <div
                  className="bg-[#46B7F4] rounded-lg border-[1.8px] border-solid border-black 
  px-3 py-[3px] w-fit min-w-fit max-w-full
  self-center place-self-start
  text-center text-sm
"
                >
                  3h 8mins
                </div>
              </h3>
            </div>
            <div className="grid grid-flow-col gap-2 w-fit">
              {" "}
              <Image
                src={money}
                height={30}
                width={30}
                alt="markers"
                className="place-self-start"
              />
              <h3 className="place-self-start grid grid-flow-col">
                <h1> Total Money: $545 </h1>
              </h3>
            </div>
            <div className="grid grid-flow-col gap-2 w-fit">
              {" "}
              <Image
                src={score}
                height={30}
                width={30}
                alt="markers"
                className="place-self-start"
              />
              <h3 className="place-self-start grid grid-flow-col">
                <h1>Safety Score: 0.76/1.00</h1>
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Itin;
