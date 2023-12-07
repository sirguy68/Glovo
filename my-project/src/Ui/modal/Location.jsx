import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { TbFlag3Filled } from "react-icons/tb";
import map from "../../picture/map.jpeg";
import { IoClose } from "react-icons/io5";

const Location = ({ oyaOpen }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center rounded-[10px] ">
      <div className="my-5 ml-auto px-[50px] md:px-5">
        <button
          onClick={() => {
            oyaOpen(false);
          }}
        >
          <IoClose size={30} />
        </button>
      </div>
      <h1 className="mb-12 text-[20px] md:text-[28px] font-extrabold">
        Add a delivery address
      </h1>
      <div className="flex flex-wrap justify-center items-center px-10 pb-20">
        <div className="pr-5">
          <div className="flex justify-center items-center pr-[10rem]  md:pr-10 border-b-2 pb-1">
            <TbFlag3Filled size={30} className="mr-2" />
            <input
              placeholder="Search for streets, cities, districts..."
              className="pr-10 focus:outline-none text-[12px]"
            />
          </div>
          <div className="flex justify-center items-center bg-white py-[11px] rounded-r-[5px] md:py-[12.5px]">
            <FaLocationArrow
              size={21}
              className="mx-1 text-[#00A082] bg-[#00a0833b] rounded-full p-1"
            />
            <p className="text-[12px] pr-1 md:px-3 text-[#00A082] md:w-[150px]">
              Use current location
            </p>
          </div>
          <div className=" mt-[16rem] md:mt-[12rem]">
            <p className="   text-[16px]  md:text-[12px] text-center pr-1 md:px-3 md:text-left text-[#00A082] ">
              Or set your location on the map
            </p>
          </div>
        </div>
        <div className="mt-2">
          <img src={map} alt="map" width={300} className="hidden md:block"/>
        </div>
      </div>
    </div>
  );
};

export default Location;
