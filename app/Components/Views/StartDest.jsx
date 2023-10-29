"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import timeIcon from "@/assets/timeIcon.png";
import { Btn } from "..";
import { useStore } from "@/app/store";
import GlobalApi from "@/app/Shared/GlobalApi";
const StartDest = ({ vis, wp1, wp2, setWp, moveFwd }) => {
  const setStart = useStore((store) => store.setStart);
  const startPoint = useStore((store) => store.startPoint);
  const setEnd = useStore((store) => store.setEnd);
  const endPoint = useStore((store) => store.endPoint);
  const wayPoint1 = useStore((store) => store.wayPoint1);

  const [input, setInput] = useState("");
  const [autoList, setAutoList] = useState([]);
  const [autoVisS, setAutoVisS] = useState(false);
  const [autoVisE, setAutoVisE] = useState(false);
  useEffect(() => {
    autoComplete();
  }, [input]);
  const autoComplete = () => {
    GlobalApi.autoComplete({ input }).then((resp) => {
      setAutoList(resp.data.product.predictions);
    });
  };
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
                onInput={() => {
                  setAutoVisS(true);
                }}
                onChange={(e) => {
                  setStart(e.target.value);
                  setInput(e.target.value);
                }}
                type="text"
                placeholder="Start Point"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
  pb-1 px-1 w-full
  self-end place-self-start
  text-md"
                value={startPoint}
              />
              <Image
                src={timeIcon}
                width={45}
                height={45}
                className="self-start place-self-end"
                alt="time"
              />
              {autoVisS && (
                <ul className="absolute bg-[#ffffff] mt-12 hover:cursor-pointer p-3 w-fit z-[60]">
                  {autoList.map((item) => {
                    return (
                      <li
                        className="hover:bg-[#eeeeee] px-2"
                        onClick={() => {
                          setStart(item.description);
                          setAutoVisS(false);
                        }}
                      >
                        {item.description.slice(0, 45)}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {/* way points */}
            <div className="grid grid-flow-col gap-1">
              {/* waypoint1 */}
              {!wayPoint1 && (
                <Btn
                  text="WayPoint 1"
                  color="bg-[#EAD032]"
                  textSize="text-xl"
                  hover="hover:cursor-pointer hover:opacity-75"
                  onClick={setWp}
                />
              )}
              {wayPoint1 && (
                <Btn
                  text={wayPoint1.slice(0, 21)}
                  color="bg-[#EAD032]"
                  textSize="text-xl"
                  hover="hover:cursor-pointer hover:opacity-75"
                  onClick={setWp}
                />
              )}
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
                onInput={() => {
                  setAutoVisE(true);
                }}
                onChange={(e) => {
                  setEnd(e.target.value);
                  setInput(e.target.value);
                }}
                type="text"
                placeholder="Destination"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
  pb-1 px-1 w-full
  self-end place-self-start
  text-md"
                value={endPoint}
              />
              <Image
                src={timeIcon}
                width={45}
                height={45}
                className="self-start place-self-end"
                alt="time"
              />
              {autoVisE && (
                <ul className="absolute bg-[#ffffff] mt-12 hover:cursor-pointer p-3 w-fit z-[60]">
                  {autoList.map((item) => {
                    return (
                      <li
                        className="hover:bg-[#eeeeee] px-2"
                        onClick={() => {
                          setEnd(item.description);
                          setAutoVisE(false);
                        }}
                      >
                        {item.description.slice(0, 45)}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {/* generate btn */}
            <Btn
              text="Generate my Perfect Day!"
              color="bg-[#70B570]"
              textSize="text-sm"
              hover="hover:cursor-pointer hover:opacity-75"
              onClick={moveFwd}
            />
          </div>
        </div>
      )}
      {vis == 9 && (
        <div className="blur-md hover:cursor-not-allowed">
          <div
            className="rounded-b-[30px] rounded-t-2xl border-[1.8px] border-solid border-black bg-[#ffffff] p-6
grid gap-3
self-start place-self-center"
          >
            {/* origin */}
            <div className="flex gap-3">
              <input
                disabled
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
                onClick={setWp}
              />
              {/* waypoint2 */}
              {wp1 && (
                <div>
                  <Btn
                    text="WayPoint 2"
                    color="bg-[#E85654]"
                    textSize="text-xl"
                  />
                </div>
              )}
              {!wp1 && (
                <div className="opacity-50">
                  <Btn
                    text="WayPoint 2"
                    color="bg-[#E85654]"
                    textSize="text-xl"
                  />
                </div>
              )}
            </div>
            {/* destination */}
            <div className="flex gap-3">
              <input
                disabled
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
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StartDest;
