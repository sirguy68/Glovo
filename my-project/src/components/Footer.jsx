import React from "react";
import footer from "../picture/footer.svg";
import glovoo from "../picture/glovooo.svg";
import { Sooter } from "../data/Footer";

const Footer = () => {
  return (
    <footer className="pd-20 bg-[#E9F8F5]">
      <div className="w-full">
        <img src={footer} alt="footer" />
      </div>
      <div className="bg-[#1D1D1D] pt-10 px-5 md:px-[100px]">
        <div className="text-left">
          <img src={glovoo} alt="glovooo" />
        </div>

        <div className="grid sm:grid-cols-1  md:grid-cols-4 lg:grid-cols-4 xlg:grid-cols-4  gap-4 py-10">
          {Sooter.map((item) => (
            <div key={item.id} className="">
              <h1 className="text-white text-[20px] font-[700]">{item.head}</h1>
              <div className="flex md:block">
                <img src={item.image} alt={""} className="pr-5 md:pr-0 md:py-1" />
                <img src={item.image2} alt={""} className="py-1" />
              </div>

              <ul className="text-[#e8e2e2b9] pt-5 text-[14px] font-[300] ">
                <li>{item.li1}</li>
                <li>{item.li2}</li>
                <li>{item.li3}</li>
                <li>{item.li4}</li>
                <li>{item.li5}</li>
                <li>{item.li6}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
