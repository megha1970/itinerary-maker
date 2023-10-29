"use client";
import { useEffect, useState } from "react";
import { Btn, SignIn, StartDest, WayPointModal } from "./Components";
import Image from "next/image";
import { UserLocationContext } from "./context/UserLocationContext";

export default function Home() {
  // USER LOCATION
  const [userLocation, setUserLocation] = useState([]);
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  console.log(userLocation);

  // MAP STYLE
  const mapContainerStyle = {
    width: "100%",
    height: "70vh",
  };

  // VISIBILITY
  const [vis, setVis] = useState(1);
  const [modalVis, setModalVis] = useState(0);
  const [wp1, setWp1] = useState("");
  const [wp2, setWp2] = useState("");
  const moveFwd = () => {
    setVis(vis + 1);
  };
  const modalNext = () => {
    setModalVis(modalVis + 1);
  };
  const modalSkip = () => {
    setModalVis(modalVis + 2);
  };
  const modalBack = () => {
    setModalVis(1);
  };
  console.log(`modal vis: ${modalVis}`);

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      <main
        className="mainBg rounded-2xl border-2 border-solid border-black 
     w-fit h-fit min-h-[90%] 
    place-self-center self-center
    grid grid-flow-row"
      >
        <SignIn vis={vis} onIn={moveFwd} />
        <StartDest vis={vis} wp1={wp1} wp2={wp2} setWp={modalNext} />
        {modalVis > 0 && (
          <WayPointModal
            modalStep={modalVis}
            incStep={modalNext}
            incStep2={modalSkip}
            decStep={modalBack}
          />
        )}
      </main>
    </UserLocationContext.Provider>
  );
}
