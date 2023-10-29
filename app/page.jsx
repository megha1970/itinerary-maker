"use client";
import { useEffect, useState } from "react";
import { Btn, SignIn, StartDest, WayPointModal } from "./Components";
import Image from "next/image";
import { UserLocationContext } from "./context/UserLocationContext";
import GlobalApi from "./Shared/GlobalApi";
import { useStore } from "./store";
import GoogleMapsView from "./Components/GoogleMapsView";
import Itin from "./Components/Itin";

export default function Home() {
  // USER LOCATION
  // const [userLocation, setUserLocation] = useState([]);
  const setUserLocation = useStore((store) => store.setUserLocation);
  const userLocation = useStore((store) => store.userLocation);
  const setStartPoint = useStore((store) => store.setStart);
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      // console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
    setStartPoint(userLocation);
  };
  // console.log(userLocation);

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
    setVis(9);
  };
  const modalSkip = () => {
    setModalVis(modalVis + 2);
  };
  const modalBack = () => {
    setModalVis(1);
  };
  const removeModal = () => {
    setModalVis(0);
    setVis(2);
  };

  console.log(`modal vis: ${modalVis}`);

  return (
    <main
      className="mainBg rounded-2xl border-2 border-solid border-black 
     w-fit h-fit min-h-[90%] max-h-[96%] 
    place-self-center self-center
    grid grid-flow-row"
    >
      <SignIn vis={vis} onIn={moveFwd} />
      <StartDest
        vis={vis}
        wp1={wp1}
        wp2={wp2}
        setWp={modalNext}
        moveFwd={moveFwd}
      />
      {modalVis > 0 && (
        <WayPointModal
          modalStep={modalVis}
          incStep={modalNext}
          incStep2={modalSkip}
          decStep={modalBack}
          removeModal={removeModal}
        />
      )}
      <GoogleMapsView vis={vis} />
      <Itin vis={vis} />
    </main>
  );
}
