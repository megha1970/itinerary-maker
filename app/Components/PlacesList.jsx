"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import GlobalApi from "../Shared/GlobalApi";

const PlacesList = () => {
  const type = useStore((store) => store.type);
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    getGooglePlace();
  }, []);
  const getGooglePlace = () => {
    GlobalApi.getGooglePlace(type).then((resp) => {
      setPlaces(resp.data.product.results);
    });
  };
  console.log(places);
  return (
    <div>
      {places.map((place) => {
        let flag = 0;
        place.types.map((pType) => {
          if (pType == type) {
            flag = 1;
          }
        });
        if ((flag = 1)) {
          return (
            <>
              <h1>{place.name}</h1>
              {/* {place.photos && (
                <>
                  {" "}
                  {place.photos.map((pic) => {
                    pic.html_attributions.map((atag) => {
                      return <>{atag}</>;
                    });
                  })}
                </>
              )} */}
            </>
          );
        }
      })}
    </div>
  );
};

export default PlacesList;
