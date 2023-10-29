import React from "react";
import { Btn, PlacesList } from ".";
import { useStore } from "../store";

const WayPointModal = ({
  modalStep,
  incStep,
  incStep2,
  decStep,
  removeModal,
}) => {
  const types = useStore((store) => store.types.map((type) => type));
  const setType = useStore((store) => store.setType);
  const setWayPoint1 = useStore((store) => store.setWayPoint1);

  return (
    <>
      <div className="self-center place-self-center backdrop-blur-md grid fixed shadow-2xl rounded-3xl">
        <div
          className="bg-[#ffffff]
          self-center place-self-center
          p-6
          rounded-3xl border-[1.8px] border-solid border-black"
        >
          {modalStep == 1 && (
            <div className="grid gap-6 ">
              <Btn
                text="I know where to go"
                color="bg-[#70B570]"
                textSize="text-xl"
                hover="hover:cursor-pointer hover:opacity-75"
                onClick={incStep}
              />
              <h3 className="text-center text-3xl">or</h3>
              <Btn
                text="I need Suggestion"
                color="bg-[#46B7F4]"
                textSize="text-xl"
                hover="hover:cursor-pointer hover:opacity-75"
                onClick={incStep2}
              />
            </div>
          )}
          {/* i knwo where to go */}
          {modalStep == 2 && (
            <div className="grid gap-3">
              {/* WAY POINT */}
              <input
                onChange={(e) => {
                  setWayPoint1(e.target.value);
                }}
                type="text"
                placeholder="Enter Location"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
      pb-1 px-1 w-full
      text-sm"
              />
              {/* PRICE */}
              <div
                className="switch-field 
              self-center place-self-center"
              >
                <input
                  type="radio"
                  id="radio-three"
                  name="switch-two"
                  value="yes"
                  className="bg-[#EAD032]"
                />
                <label for="radio-three">₹</label>
                <input
                  type="radio"
                  id="radio-four"
                  name="switch-two"
                  value="maybe"
                />
                <label for="radio-four">₹₹</label>
                <input
                  type="radio"
                  id="radio-five"
                  name="switch-two"
                  value="no"
                />
                <label for="radio-five">₹₹₹</label>
              </div>

              {/* <input type="datetime" name="" id="" /> */}
              {/* BACK CONTI */}
              <div
                className="grid grid-flow-col gap-6 justify-between
              mt-6"
              >
                <Btn
                  text="Back"
                  color="bg-[#46B7F4]"
                  textSize="text-sm"
                  onClick={decStep}
                  hover="hover:cursor-pointer hover:opacity-75"
                />
                <Btn
                  text="Continue"
                  color="bg-[#46B7F4]"
                  textSize="text-sm"
                  onClick={removeModal}
                  hover="hover:cursor-pointer hover:opacity-75"
                />
              </div>
            </div>
          )}
          {/* suggest pls */}
          {modalStep == 3 && (
            <div className="grid gap-3">
              {/* <input
                type="text"
                placeholder="Choose Location"
                className="border-t-0 border-r-0 border-l-0 border-b-[1.8px] border-solid border-black 
      pb-1 px-1 w-full
      text-sm"
              /> */}
              <select
                name="types"
                id="types"
                placeholder="Choose Activity/Location"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                {types.map((type) => {
                  return <option value={type}>{type}</option>;
                })}
              </select>
              {/* PRICE */}
              <div
                className="switch-field 
              self-center place-self-center"
              >
                <input
                  type="radio"
                  id="radio-three"
                  name="switch-two"
                  value="yes"
                  className="bg-[#EAD032]"
                />
                <label for="radio-three">₹</label>
                <input
                  type="radio"
                  id="radio-four"
                  name="switch-two"
                  value="maybe"
                />
                <label for="radio-four">₹₹</label>
                <input
                  type="radio"
                  id="radio-five"
                  name="switch-two"
                  value="no"
                />
                <label for="radio-five">₹₹₹</label>
              </div>
              {/* <input type="datetime" name="" id="" /> */}
              {/* BACK CONTI */}
              <div
                className="grid grid-flow-col gap-6 justify-between
              mt-6"
              >
                <Btn
                  text="Back"
                  color="bg-[#46B7F4]"
                  textSize="text-sm"
                  onClick={decStep}
                  hover="hover:cursor-pointer hover:opacity-75"
                />
                <Btn
                  text="Continue"
                  color="bg-[#46B7F4]"
                  textSize="text-sm"
                  onClick={incStep}
                  hover="hover:cursor-pointer hover:opacity-75"
                />
              </div>
            </div>
          )}
          {modalStep == 4 && <PlacesList />}
        </div>
      </div>
    </>
  );
};

export default WayPointModal;
