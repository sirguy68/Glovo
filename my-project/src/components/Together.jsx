import React from "react";
import wave from "../picture/wave.svg";
import together from "../picture/together.svg";
import { Soft } from "../data/Together";
import { useInView } from "react-intersection-observer";

const Together = () => {
   const { ref: myRef, inView: visible } = useInView({
     threshold: 0,
   });

  return (
    <section
      ref={myRef}
      className={`pb-[5rem] bg-[#E9F8F5] ${visible ? "showing" : "show"}`}
    >
      <div>
        <img src={wave} alt="wave" className="w-full h-[86px] absolute" />
        <div className="relative flex justify-center items-center">
          <img src={together} alt="together" width={117} />
        </div>
      </div>
      <div className="bg-[#E9F8F5] relative">
        <h1 className="font-bold text-[28px] md:text-[40px] pt-5 mb-5 text-black flex justify-center items-center">
          Let’s do it together
        </h1>

        <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xlg:grid-cols-3 gap-4">
          {Soft.map((item) => (
            <div  className="flex flex-col justify-center items-center my-5" key={item.id}>
              <div>
                <img src={item.image} alt={item.image} width={250} />
              </div>
              <div className="text-center">
                <h1 className="font-bold text-[24px] my-3">{item.title}</h1>
                <p className="text-[16px] font-medium mx-5">{item.detail}</p>
              </div>
              <button className="bg-[#00A082] font-[18px] text-white py-2 px-[16px] rounded-full mt-3">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Together;
