import React from "react";
import star from "../picture/star.png";
import city from "../picture/cities.svg";
import { Data } from "../data/Best";
import { categories } from "../data/categories";
import Together from "./Together";
import { useInView } from "react-intersection-observer";

const Best = () => {
  const { ref: myRef, inView: visible } = useInView({
    threshold: 0.1,
  });

  return (
    <React.Fragment>
      <section
        ref={myRef}
        className={`px-20 my-20 ${visible ? "showing" : "show"}`}
      >
        <div className="flex items-center">
          <img src={star} alt="good" width={40} className="pr-2" />
          <h1 className=" font-bold text-[20px] md:text-[30px]">
            Best of Abuja
          </h1>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-4 gap-4">
          {Data.map((item) => (
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
        <div>
          <div className="flex items-center justify-center  mt-[6rem] mb-3">
            <img src={city} alt="city" />
          </div>
          <div className="text-center">
            <h1 className="text-[24px] font-bold md:text-[36px]">
              Top Categories in Abuja
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-[6px] mt-7 ">
              {categories.map((item) => (
                <div>
                  <p className="bg-[#fff3DA] py-1 px-3 font-semibold rounded-full hover:cursor-pointer hover:bg-[#FFC244FF]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Together />
    </React.Fragment>
  );
};

export default Best;
