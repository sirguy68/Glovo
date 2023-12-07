import React, { useState } from "react";
import icon from "../picture/glovo.svg";
import { TbFlag3Filled } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa6";
import { items } from "../data/delivery";
import Location from "../Ui/modal/Location";
import Login from "../Ui/modal/Login";
import { useInView } from "react-intersection-observer";


const Header = () => {
  const { ref: myRef, inView: visible } = useInView({
    threshold: 0,
  });
  const { ref: urRef, inView: dePlay } = useInView({
    threshold: 0,
  });

  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);




  return (
    <section className="bg-[#FFC244FF]">
      <div className="fixed z-10 top-0 w-full flex justify-between items-center py-5 px-5  bg-[#FFC244FF] md:px-[110px]">
        <div className="flex">
          {/* <h1 className='text-[#00A082] text-4xl font-bold pt-4'>Glovo</h1> */}
          <img src={icon} alt="icon" width={150} height={100} />
        </div>
        <button
          onClick={() => {
            setIsLogin(true);
          }}
          className="bg-[#00A082] px-3 py-1 text-[14px] rounded-full text-white shadow-lg hover:bg-yellow-900 md:px-9 md:text-[18px]"
        >
          Get started
        </button>
        {isLogin && (
          <div
            className="modal-background"
            // onClick={() => {
            //   setIsOpen(false);
            // }}
          >
            <Login oyaOpen={setIsLogin} />
          </div>
        )}
      </div>
      <div
        ref={urRef}
        className={`md:flex justify-center items-center mt-[100px] pt-10 ${
          dePlay ? "showing" : "show"
        }`}
      >
        <div className="flex justify-center items-center mb-5 md:pr-5">
          <video loop autoPlay muted>
            <source
              src="https://res.cloudinary.com/glovoapp/video/upload/website_assets/images/landing/address-container-animation.webm"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="pl-5">
          <h1 className="  text-center text-[35px] font-bold  pb-5 text-black md:font-extrabold text-5xl">
            Explore delivery in Abuja
          </h1>
          <div className="flex justify-center items-center py-10">
            <div className="bg-[#00A082] p-[6px] rounded-l-[5px] md:p-2">
              <TbFlag3Filled size={30} className="text-white" />
            </div>
            <input
              placeholder=" What's your address?"
              onClick={() => {
                setIsOpen(true);
              }}
              className="py-[12.5px] text-[12px] pl-2 border-none focus:outline-none md:pr-[80px] md:text-[14px]"
            />

            <div className="flex justify-center items-center bg-white py-[11px] rounded-r-[5px] md:py-[12.5px] ">
              <FaLocationArrow
                size={21}
                className="mx-1 text-[#00A082] bg-[#00a0833b] rounded-full p-1"
              />
              <p className="text-[12px] pr-1 md:px-3 text-[#00A082] md:w-[150px]">
                Use current location
              </p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="modal-background"
          // onClick={() => {
          //   setIsOpen(false);
          // }}
        >
          <Location oyaOpen={setIsOpen} />
        </div>
      )}

      <div
        ref={myRef}
        className={`my-5 py-10  grid grid-cols-2 mx-[80px] place-items-center items-center sm:grid-cols-2 sm:mx-[200px] md:grid-cols-3 md:mx-[200px] lg:grid-cols-6 lg:mx-[160px] ${
          visible ? "showing" : "show"
        }`}
      >
        {items.map((item) => (
          <div className="">
            <div className=" text-center pb-2 transform hover:-translate-y-2 hover:border-b-2 hover:border-black transition-transform duration-300">
              <img
                src={item.image}
                alt="cart"
                width={100}
                className="flex justify-center items-center bg-white rounded-full p-5"
              />
              <h2 className="pt-3 mx-[-1px] w-full font-semibold text-sm">
                {item.detail}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div class="relative h-40 overflow-hidden  w-full">
        <div class="absolute inset-0 bg-white rounded-full transform -skew-y-6"></div>
      </div>
    </section>
  );
};

export default Header;
