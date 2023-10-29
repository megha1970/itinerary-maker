import Image from "next/image";
import React from "react";
import timeIcon from "@/assets/timeIcon.png";
import { Btn } from "..";
const StartDest = ({ vis, wp1, wp2, setWp }) => {
  return (
    <>
      {" "}
      {vis == 2 && (
        <div>
          <div
            className="rounded-b-[30px] rounded-t-2xl border-[1.8px] border-solid border-black bg-[#ffffff] p-6
grid gap-3
self-start place-self-center"
          >
            {/* origin */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Start Point"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
  pb-1 px-1 w-full
  self-end place-self-start
  text-md"
              />
              <Image
                src={timeIcon}
                width={45}
                height={45}
                className="self-start place-self-end"
                alt="time"
              />
            </div>
            {/* way points */}
            <div className="grid grid-flow-col gap-1">
              {/* waypoint1 */}
              <Btn
                text="WayPoint 1"
                color="bg-[#EAD032]"
                textSize="text-xl"
                hover="hover:cursor-pointer hover:opacity-75"
                onClick={setWp}
              />
              {/* waypoint2 */}
              {wp1 && (
                <div>
                  <Btn
                    text="WayPoint 2"
                    color="bg-[#E85654]"
                    textSize="text-xl"
                    hover="hover:cursor-pointer hover:opacity-75"
                  />
                </div>
              )}
              {!wp1 && (
                <div className="opacity-50">
                  <Btn
                    text="WayPoint 2"
                    color="bg-[#E85654]"
                    textSize="text-xl"
                    hover="cursor-not-allowed"
                  />
                </div>
              )}
            </div>
            {/* destination */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Destination"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
  pb-1 px-1 w-full
  self-end place-self-start
  text-md"
              />
              <Image
                src={timeIcon}
                width={45}
                height={45}
                className="self-start place-self-end"
                alt="time"
              />
            </div>
            {/* generate btn */}
            <Btn
              text="Generate my Perfect Day!"
              color="bg-[#70B570]"
              textSize="text-sm"
              hover="hover:cursor-pointer hover:opacity-75"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StartDest;
