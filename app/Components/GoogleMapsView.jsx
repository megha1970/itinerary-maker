import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useStore } from "../store";

const GoogleMapsView = ({ vis }) => {
  const userLocation = useStore((store) => store.userLocation);
  const startPoint = useStore((store) => store.startPoint);

  const mapContainerStyle = {
    width: "100%",
    height: "60vh",
  };
  const coordinate = { lat: -34.397, lng: 150.644 };

  return (
    <div>
      {vis == 2 && (
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
          mapIds={["afa51a32d8045b70"]}
        >
          <div className="m-2 border-2 border-solid border-black">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={userLocation}
              options={{ mapId: "afa51a32d8045b70" }}
              zoom={12}
            >
              <MarkerF
                position={userLocation}
                // icon={{
                //   url: "/logo.svg",
                //   scaledSize: {
                //     width: 45,
                //     height: 45,
                //   },
                // }}
              />
            </GoogleMap>
          </div>
        </LoadScript>
      )}
      {vis == 9 && (
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
          mapIds={["afa51a32d8045b70"]}
        >
          <div className="hover:cursor-not-allowed blur-md z-0 m-2 border-2 border-solid border-black">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={userLocation}
              options={{ mapId: "afa51a32d8045b70" }}
              zoom={12}
            >
              <MarkerF position={userLocation} />
            </GoogleMap>
          </div>
        </LoadScript>
      )}
    </div>
  );
};

export default GoogleMapsView;
