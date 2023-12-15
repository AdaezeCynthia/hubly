import React from "react";

const SocialCard = ({ icon, content }) => {
  return (
    <div className="border cursor-pointer hover:bg-[#E87A14] hover:text-white border-[#333] flex gap-3 rounded-[40px] text-[#333333] md:py-5 md:px-12 px-4 py-1 items-center justify-center">
      <img src={icon} alt="" className="w-[32px] h-[32px]" />
      <span className="text-[22px] font-normal">{content}</span>
    </div>
  );
};

export default SocialCard;
