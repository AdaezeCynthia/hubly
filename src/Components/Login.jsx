import React from "react";
import { MdOutlineClose } from "react-icons/md";
import white from "../assets/white.jpg";
import orange from "../assets/orange.jpg";
import sign from "../assets/sign.png";
import hubly from "../assets/hubly.svg";
import facebook from "../assets/facebook.jpg";
import apple from "../assets/apple.jpg";

import google from "../assets/google.jpg";
import mail from "../assets/mail.jpg";
import phone from "../assets/phone.jpg";
import x from "../assets/x.png";
import SocialCard from "./SocialCard";

import { IoLogoFacebook } from "react-icons/io";

const Login = () => {
  return (
    <div
      className="   w-full md:py-[25px] py-2 h-screen "
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dbkc6y0cy/image/upload/v1702553436/Backdrop_tljqi0.jpg")',
      }}
    >
      <div className="md:w-[88%] w-[95%] grid  rounded-[12px] mx-auto my-auto items-center  justify-center grid-cols-1  lg:grid-cols-2">
        <div className="flex flex-col h-full  gap-4 items-center lg:px-[89px] px-[20px] py-2 md:py-10 mt-16 lg:mt-0 rounded-2xl lg:pt-3 bg-white justify-center">
          <div className="flex justify-center text-center flex-col gap-4 lg:gap-2">
            <img src={hubly} alt="logo" className=" mx-auto w-12 h-12" />
            <p className="text-zinc-800 text-[32px] font-medium">
              Log in or Sign up
            </p>
            <p className="text-stone-500 text-base font-normal">
              Use your email or other serivce to continue with us{" "}
            </p>
          </div>
          <div className=" flex flex-col lg:gap-4 gap-4 md:gap-6">
            <SocialCard icon={facebook} content={"Continue with Facebook"} />
            <SocialCard icon={google} content={"Continue with Google"} />
            <SocialCard icon={apple} content={"Continue with Apple"} />
            <SocialCard icon={x} content={"Continue with Twitter"} />
            <SocialCard icon={mail} content={"Continue with email"} />
            <SocialCard icon={phone} content={"Continue with phone"} />
          </div>
        </div>
        <div className="lg:flex h-[80%] hidden  items-center justify-left">
          <img
            src={orange}
            alt="orange"
            className="w-[85%] flex shrink-0 h-fit"
            // className=" absolute lg:bottom-[-50px] bottom-[269.9px] lg:right-[60px] right-[30px] lg:rounded-lg h-[300px] lg:h-[600px] lg:w-[40%] w-[40%] rounded-lg lg:my-[100px] my-[50px] lg:mx-[50px] mx-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
