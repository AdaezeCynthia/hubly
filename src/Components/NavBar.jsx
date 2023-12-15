import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import hubly from "../assets/hubly.svg";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex w-full justify-between items-center bg-white">
        <h1 className="text-black text-[28px] md:text-[48px] font-normal leading-normal">
          Viss Fashions
        </h1>
        <div className="hidden lg:flex gap-[44px] text-black justify-center items-center ">
          <p className="text-[24px] font-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold leading-normal">
            About
          </p>
          <p className="text-[24px] font-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold leading-normal">
            Clothing
          </p>
          <p className="text-[24px] font-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold leading-normal">
            Accessories
          </p>
          <p className="text-[24px] font-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold leading-normal">
            Services
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-[48px]">
          <Link
            to="/login"
            className="text-[24px] font-normal leading-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold"
          >
            Log in
          </Link>

          <Link
            to="/login"
            className="bg-[#E87A14] text-white w-fit rounded-[20px] py-[16px] px-[48px]"
          >
            Sign up
          </Link>
        </div>
        <button onClick={toggleMenu} className="items-center lg:hidden flex">
          <BiMenu className="text-4xl cursor-pointer" />
        </button>{" "}
        {isOpen && (
          <div className="fixed px-[20px] lg:hidden pt-5 top-0 left-0 w-screen text-[#00002F] text-[18px] leading-7 h-screen  flex flex-col justify-left  bg-white z-50">
            <div className="flex flex-col items-center relative gap-8 py-[16px]">
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="cursor-pointer mt-[48px] flex mx-auto hover:text-[#000075] hover:font-bold w-[82.55px] h-[50px] "
              >
                <img src={hubly} alt="logo" className="w-100%" />
              </Link>
              <button
                //
                className="absolute top-8 right-8 text-black"
                onClick={toggleMenu}
              >
                <AiOutlineClose className=" text-2xl font-semibold" />
              </button>
              <div className="lg:hidden flex flex-col gap-[18px] text-black justify-center items-center ">
                <p className="text-[24px] font-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold leading-normal">
                  About
                </p>
                <p className="text-[24px] font-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold leading-normal">
                  Clothing
                </p>
                <p className="text-[24px] font-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold leading-normal">
                  Accessories
                </p>
                <p className="text-[24px] font-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold leading-normal">
                  Services
                </p>
              </div>
              <div className="lg:hidden flex  items-center gap-[48px]">
                <Link
                  to="/login"
                  className="text-[24px] font-normal leading-normal cursor-pointer hover:text-[#E87A14] hover:font-semibold"
                >
                  Log in
                </Link>

                <Link
                  to="/login"
                  className="bg-[#E87A14] text-white w-fit rounded-[20px] py-[16px] px-[48px]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
