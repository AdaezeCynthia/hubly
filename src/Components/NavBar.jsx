import React from "react";
import Viss from "../assets/Viss.png";
import man from "../assets/man.png";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-md lg:w-[70%] w-[100%] h-[60%]">
        <img
          src={Viss}
          alt="Viss"
          className=" absolute lg:py-[20px] lg:h-[60px] h-[30px] py-[10px] lg:right-[1090px] right-[395px]"
        />
        <p className="relative font-bold lg:right-[-350px] right-[-89px] lg:py-[17px] lg:text-[15px] text-[10px]  py-[10px] ">
          About
        </p>
        <p className="relative font-bold lg:text-[15px] lg:right-[-420px] text-[10px] py-[10px]lg:text-[15px] right-[-130px] bottom-[25px] lg:py-[17px] lg:bottom-[58px]">
          clothings
        </p>
        <p className="relative font-bold lg:right-[-520px] text-[10px] py-[10px] lg:text-[15px] bottom-[50px] right-[-190px] lg:py-[17px]  lg:bottom-[114px] ">
          Accessories
        </p>
        <p className="relative font-bold lg:right-[-640px] right-[-260px] lg:text-[15px] text-[10px] py-[10px] lg:py-[17px]  bottom-[85px] lg:bottom-[172px]">
          Services
        </p>
        <div>
          <p className="relative font-bold lg:right-[-870px] text-[10px]  lg:text-[15px] py-[10px] right-[-342px] lg:py-[17px] lg:bottom-[230px] bottom-[120px]">
            Log in
          </p>
          <button className="relative lg:right-[-920px]  lg:text-[15px] right-[-390px] rounded-[2px] mx-[2px] lg:mx-[10px]  py-[3px] py[4px] lg:py-[7px] lg:px-[10px]  px-[5px] text-[10px] lg:rounded-[6px] bottom-[150px] lg:bottom-[270px] bg-[#E87A14] text-white">
            Sign Up
          </button>
        </div>
        <div>
          <h2 className=" absolute font-bold font-poppins  text-blue-400 text-[15px] right-[285px] bottom-[410px] lg:right-[1070px] lg:bottom-[340px]">
            TRENDIEST FASHION EVER
          </h2>
          <h2 className=" absolute right-[305px] bottom-[330px]  lg:right-[1090px] lg:bottom-[260px] lg:font-poppins">
            When you are in doubt,
            <br /> wear a Viss Fashions <br />
            Denim
          </h2>
          <button className=" absolute lg:top-[470px] bottom-[290px] lg:right-[2185px] right-[420px] lg:mx-[10px] mx-[10px] lg:py-[7px] py-[3px] px-[1px]  lg:px-[10px] text-[10px] rounded-[6px]  bg-[#E87A14] text-white">
            Buy Now
          </button>
        </div>
        <div>
          <img
            src={man}
            alt="man"
            className="lg:w-64 w-40 lg:h-65    absolute right-[50px] lg:right-[450px] top-[244px] lg:top-[245px]"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
