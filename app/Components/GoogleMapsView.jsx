import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useStore } from "../store";

const GoogleMapsView = ({ vis }) => {
  const userLocation = useStore((store) => store.userLocation);
  const startPoint = useStore((store) => store.startPoint);
  const mapContainerStyle = {
    width: "100%",
    height: "70vh",
  };
  const coordinate = { lat: -34.397, lng: 150.644 };
  return (
    <div className="rounded-b-2xl">
      {vis == 2 && (
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
          mapIds={["afa51a32d8045b70"]}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={userLocation}
            options={{ mapId: "afa51a32d8045b70" }}
            zoom={15}
          >
            <MarkerF position={userLocation} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default GoogleMapsView;
