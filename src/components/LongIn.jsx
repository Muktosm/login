import React from "react";
import bg from "../assets/image.png";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const LongIn = () => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => {
    setShow(!show);
  };
  return (
    <div
      className="w-full h-screen relative bg-no-repeat bg-center bg-cover  "
      style={{ backgroundImage: `url(${bg})  ` }}
    >
      <div className="w-full h-full bg-[rgba(17,17,17,0.2)] filter backdrop:blur-[.8]  flex items-center ">
        <form
          action=""
          className=" w-[500px] bg-[#FFFFFF] rounded-[24px] mx-auto  "
        >
          <div className="w-[400px] mx-auto py-[20px] ">
            <div className=" flex flex-col items-center  ">
              <div className=" w-[28px] h-[28px] bg-[#C4C4C4] rounded-full  "></div>
              <h2 className=" font-poppins font-medium text-[32px] text-[#333333] mt-[14px] mb-[2px]">
                Log In
              </h2>
              <p className=" font-poppins font-normal text-[16px] text-[#333333]">
                Don’t have an ccount?
                <a
                  href="#"
                  className="text-[#111111] border-b border-[#111111] ml-2 "
                >
                  Sign up
                </a>
              </p>
            </div>

            <div className=" w-full my-[20px]  flex flex-col items-center gap-[16px] ">
              <button className=" w-full h-[52px] rounded-[40px] border-[1px] border-[#333333] flex items-center justify-center ">
                <FaFacebook className=" w-[32px] h-[32px] text-[#0C82EE] mr-[16px] " />
                Log in with Facebook
              </button>
              <button className=" w-full h-[52px] rounded-[40px] border-[1px] border-[#333333] flex items-center justify-center ">
                <FcGoogle className=" w-[32px] h-[32px]  mr-[16px] " />
                Log in with Google
              </button>
            </div>
            <div>
              <p
                className=" relative text-center before:bg-[rgba(102,102,102,0.25)] before:absolute before:w-[173px] before:h-[2px] before:left-0 before:top-[50%] 
            after:bg-[rgba(102,102,102,0.25)] after:absolute after:w-[173px] after:h-[2px] after:right-0 after:top-[50%]  font-poppins font-medium text-[24px ] text-[#666666] "
              >
                OR
              </p>
            </div>
            <div className=" w-full mt-[40px] flex flex-col gap-[16px] ">
              <div>
                <label
                  htmlFor="Email"
                  className=" font-poppins font-normal text-[16px] text-[#333333]  "
                >
                  Your Email
                </label>
                <input
                  autoComplete="true"
                  id="Email"
                  name="Email"
                  type="text"
                  className=" w-full h-[40px] pl-[10px] rounded-[10px] border-[1px] border-[#666666] outline-none "
                />
              </div>
              <div>
                <div className=" font-poppins font-normal text-[16px] text-[#333333] flex justify-between  ">
                  <label htmlFor="Password">Your Password</label>
                  <div className="flex min-w-[75px] justify-between items-center">
                    {show ? (
                      <FaEye onClick={handleShowPassword} className="cursor-pointer" />
                    ) : (
                      <FaEyeSlash onClick={handleShowPassword} className="cursor-pointer" />
                    )}
                    {show ? (
                      <p
                        onClick={handleShowPassword}
                        className="cursor-pointer    "
                      >
                        Hide
                      </p>
                    ) : (
                      <p
                        onClick={handleShowPassword}
                        className="cursor-pointer"
                      >
                        Show
                      </p>
                    )}
                  </div>
                </div>
                <input
                  id="Password"
                  name="Password"
                  type={show ? "text" : "password"}
                  className=" w-full h-[40px] rounded-[10px] pl-[10px] border-[1px] border-[#666666] outline-none "
                />
              </div>
            </div>
            <div className=" w-full flex justify-end font-poppins font-normal text-[16px] text-[#111111]  ">
              <a
                href="#"
                className=" relative after:absolute after:w-full after:h-[1px] after:bg-[#111111] after:bottom-[2px] after:left-0 after:-translate-y-[50%]  "
              >
                Forget your password
              </a>
            </div>
            <div>
              <button className=" w-full h-[52px] rounded-[40px] mt-[24px] bg-[rgba(17,17,17,0.25)] font-poppins font-medium text-[22px] text-[#FFFFFF] ">
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LongIn;
