import React from "react";
import bg from "../assets/loginA.png";
import overlay from "../assets/overlay.png";
import { FaFacebook, FaApple, FaTwitter, FaVoicemail } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const LoginA = () => {
  return (
    <>
      <div
        className="w-full h-screen relative bg-no-repeat bg-center bg-cover flex items-center "
        style={{
          backgroundImage: `url(${bg})  `,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[1160px] bg-[#ffffff] rounded-[24px] mx-auto overflow-hidden  flex  ">
          <form
            action=""
            className="w-[580px] bg-[#FFFFFF] rounded-[24px] mx-auto px-[50px] "
          >
            <div className="w-full flex flex-col items-center ">
              <div className=" w-[48px]  h-[48px] bg-[#C4C4C4] rounded-full "></div>
              <p>Log in or sign up</p>
              <p>Use your email or other serivce to continue with us </p>
            </div>
            <div className="w-full flex flex-col items-center  gap-[12px] ">
              <button className="w-full flex justify-center items-center h-[72px] border-[1px] border-[#333333] rounded-[40px] ">
                <FaFacebook
                  size={32}
                  className=" text-[#0C82EE] mr-[16px] font-poppins font-medium text-[22px] leading-[28px] "
                />
                Continue with Facebook
              </button>
              <button className="w-full flex justify-center items-center h-[72px] border-[1px] border-[#333333] rounded-[40px] ">
                <FcGoogle
                  size={32}
                  className=" text-[#0C82EE] mr-[16px] font-poppins font-medium text-[22px] leading-[28px] "
                />
                Continue with Google
              </button>
              <button className="w-full flex justify-center items-center h-[72px] border-[1px] border-[#333333] rounded-[40px] ">
                <div className=" w-[38px] h-[38px] bg-[#333333] rounded-full flex items-center justify-center  mr-[16px]">
                  <FaApple
                    size={32}
                    className=" text-[#ffffff]  font-poppins font-medium text-[22px] leading-[28px]  "
                  />
                </div>
                Continue with Apple
              </button>
              <button className="w-full flex justify-center items-center h-[72px] border-[1px] border-[#333333] rounded-[40px] ">
                <FaTwitter
                  size={32}
                  className=" text-[#47ACDF] mr-[16px] font-poppins font-medium text-[22px] leading-[28px] "
                />
                Continue with Twitter
              </button>
              <button className="w-full flex justify-center items-center h-[72px] border-[1px] border-[#333333] rounded-[40px] ">
                <MdEmail
                  size={32}
                  className=" text-[#333333] mr-[16px] font-poppins font-medium text-[22px] leading-[28px] "
                />
                Continue with Email
              </button>
              <button className="w-full flex justify-center items-center h-[72px] border-[1px] border-[#333333] rounded-[40px] ">
                <IoIosPhonePortrait
                  size={32}
                  className=" text-[#333333] mr-[16px] font-poppins font-medium text-[22px] leading-[28px] "
                />
                Continue with Phone
              </button>
            </div>
          </form>
          <div
            className=" w-[580px] h-[650px] "
            style={{
              backgroundImage: `url(${overlay})  `,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LoginA;
