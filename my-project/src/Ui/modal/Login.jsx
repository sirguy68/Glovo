import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Login = ({oyaOpen}) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center rounded-[10px] px-4 pb-[64px] pt-5 ">
      <div className=" ml-auto px-[20px] md:px-5">
        <button
          onClick={() => {
            oyaOpen(false);
          }}
        >
          <IoClose size={30} />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[28px] md:text-[45px] font-bold">Welcome</h1>
        <p className="text-[#06060692] font-semibold text-[14px] mt-4 mb-6">
          Continue with one of the following options
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center mb-4 py-2 rounded-full border border-b-2">
          <div className="w-[20%] ml-3">
            <FaGoogle />
          </div>
          <div className=" px-[8rem] md:px-[10rem]">
            <p>Google</p>
          </div>
        </div>
        <div className="flex items-center mb-4 py-2 rounded-full border border-b-2">
          <div className="w-[20%] ml-3">
            <FaFacebook />
          </div>
          <div className="px-[7.4rem] md:px-[9.4rem]">
            <p>Facebook</p>
          </div>
        </div>
        <div className="flex items-center mb-4 py-2 rounded-full border border-b-2">
          <div className="w-[20%] ml-3">
            <AiOutlineMail />
          </div>
          <div className="  px-[8.3rem] md:px-[10.4rem]">
            <p>Email</p>
          </div>
        </div>
      </div>
      <p className=" text-[10px] md:text-[12px] font-[300]">
        By creating an account, you automatically accept our <br /> Terms of
        service, Privacy Policy and Cookies Policy
      </p>
    </div>
  );
}

export default Login;