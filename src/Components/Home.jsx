import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";

const Home = () => {
  return (
    <div className="lg:py-[39px] lg:px-[100px] p-[20px] md:p-[36px] ">
      <NavBar />
      <Main />
    </div>
  );
};

export default Home;
