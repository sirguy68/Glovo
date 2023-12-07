import React from "react";
import good from "../picture/good.png";
import { store } from "../data/store";
import Best from "./Best";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const { ref: myRef, inView: visible } = useInView({
    threshold: 0,
  });


  return (
    <React.Fragment>
      <section ref={myRef} className={`px-20 ${visible ? "showing" : "show"}`}>
        <div className="flex items-center">
          <img src={good} alt="good" width={40} className="pr-2" />
          <h1 className=" font-bold text-[20px] md:text-[30px]">
            Stores you might like
          </h1>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-4 gap-4">
          {store.map((item) => (
            <div className="my-12">
              <div className="relative ">
                <img
                  src={item.image}
                  alt="yup"
                  width={350}
                  className="rounded-[10px] shadow-2xl transform hover:-translate-y-2 hover:border-b-2 hover:border-black transition-transform duration-300"
                />
                <p className="bg-[#2b2828c5] rounded-[5px] text-white absolute bottom-5 w-[25%] ml-2 flex justify-center items-center">
                  {item.title}
                </p>
                {/* <p className="bg-[#FFC244FF] absolute bottom-[9rem] left-[16rem] px-2 text-white rounded-[5px]">
                  -{item.discount}%
                </p> */}
                <div className="absolute ">
                  <h1 className="font-bold my-[8px] text-xl">{item.owner}</h1>
                  <div className="flex text-left">
                    <img src={item.image2} width={23} alt="rate" />
                    <span className="px-2">{item.rate}%</span>
                    <span className="text-[#31303072]">({item.amount})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Best />
    </React.Fragment>
  );
};

export default Main;
