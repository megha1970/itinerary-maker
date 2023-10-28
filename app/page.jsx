"use client";
import { useState } from "react";
import { Btn, SignIn } from "./Components";

export default function Home() {
  const [vis, setVis] = useState(1);
  const moveFwd = () => {
    setVis(vis + 1);
  };
  return (
    <main
      className="mainBg rounded-2xl border-2 border-solid border-black 
     w-fit h-fit min-h-[90%] 
    place-self-center self-center
    grid grid-flow-row"
    >
      <SignIn vis={vis} onIn={moveFwd} />
      {vis == 2 && (
        <div>
          <div
            className="rounded-b-[30px] rounded-t-2xl border-[1.8px] border-solid border-black bg-[#ffffff] p-6
  grid gap-3
  self-start place-self-center"
          >
            <input
              type="text"
              placeholder="Start Point"
              className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
      pb-1 px-1 w-full
      text-sm"
            />
            <div className="grid grid-flow-col gap-1">
              <Btn text="WayPoint 1" color="bg-[#EAD032]" textSize="text-xl" />
              <div>
                <Btn
                  text="WayPoint 2"
                  color="bg-[#E85654]"
                  textSize="text-xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
