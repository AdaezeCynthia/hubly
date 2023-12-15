import React from "react";
import man from "../assets/man.png";

const Main = () => {
  return (
    <div className="lg:flex-row flex flex-col-reverse items-center md:items-start gap-20  mt-6 ">
      <div className="flex flex-col  mt-4 md:mt-16  my-auto gap-[40px]">
        <div className="flex flex-col gap-1">
          <h2 className="md:text-[30px] text-[24px] font-semibold uppercase leading-normal text-[#44C3EBCC]">
            Trendiest Fashion ever
          </h2>
          <h2 className=" text-black tracking-[4.8px] md:text-[48px] text-[28px] font-light">
            When you are in doubt,
            <br /> wear a Viss Fashions <br />
            Denim
          </h2>
        </div>
        <div className=" w-fit px-[48px] py-4 bg-[#E87A14] rounded-[20px] text-[#231212] font-medium leading-normal">
          Buy now
        </div>
      </div>
      <div className="md:w-[380px] mx-auto mt-6 mb-24 md:mb-0 w-[80%] h-[180px] md:h-[370px]">
        <img src={man} alt="man" className="w-full  shrink-0" />
      </div>
    </div>
  );
};

export default Main;
