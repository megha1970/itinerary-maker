"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Btn } from "..";
import { useStore } from "../../store.js";

const SignIn = ({ vis, onIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // console.log(`Email:${email}   Password:${password}`);

  const profiles = useStore((store) =>
    store.userProfiles.map((profile) => profile)
  );
  // console.log(`Profiles:${profiles}`);

  // profiles.map((profile) => {
  //   console.log(`Profile:${profile.email}`);
  // });

  const checkAuth = () => {
    // console.log(profiles.length);
    profiles.map((profile, index) => {
      if (profile.email == email && profile.password == password) {
        console.log("User Authenticated");
        onIn();
      } else if (index == profiles.length - 1) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        console.log("NOT");
      }
    });
  };

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
            alt="logo"
          />
          <div
            className="rounded-[30px] border-[1.8px] border-solid border-black bg-[#ffffff] p-6
  grid gap-3
  self-start place-self-center"
          >
            <h1 className="self-center place-self-center text-2xl">Login</h1>
            <form action="" className="grid gap-6">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Username/ Email ID"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
      pb-1 px-1 w-full
      text-sm"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                placeholder="Password"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
      pb-1 px-1 w-full
      text-sm"
              />
              <div
                className="self-center place-self-center
              grid gap-[2px]"
              >
                {" "}
                <Btn
                  text="Sign In"
                  color="bg-[#46B7F4]"
                  textSize="text-lg"
                  onClick={() => {
                    checkAuth();
                  }}
                  hover="hover:cursor-pointer hover:opacity-75"
                />
                {error && (
                  <h3 className="text-center text-[#ce0000] text-xs">
                    Email ID or Password Wrong
                  </h3>
                )}
              </div>
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
