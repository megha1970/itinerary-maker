import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Btn } from "..";

const SignIn = ({ vis, onIn }) => {
  return (
    <>
      {vis == 1 && (
        <div
          className="grid gap-12 m-9
    self-start place-self-center
    "
        >
          {" "}
          <Image
            src={logo}
            width={240}
            height={120}
            className="self-start place-self-center"
          />
          <div
            className="rounded-[30px] border-[1.8px] border-solid border-black bg-[#ffffff] p-6
  grid gap-3
  self-start place-self-center"
          >
            <h1 className="self-center place-self-center text-2xl">Login</h1>
            <form action="" className="grid gap-6">
              <input
                type="text"
                placeholder="Username/ Email ID"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
      pb-1 px-1 w-full
      text-sm"
              />
              <input
                type="text"
                placeholder="Password"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
      pb-1 px-1 w-full
      text-sm"
              />
              <Btn
                text="Sign In"
                color="bg-[#46B7F4]"
                textSize="text-lg"
                onClick={onIn}
                hover="hover:cursor-pointer hover:opacity-75"
              />
            </form>
            <div className="mt-3">
              <Btn
                text="Im a New User, Sign Up"
                color="bg-[#46B7F4]"
                textSize="text-sm"
                hover="hover:cursor-pointer hover:opacity-75"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
