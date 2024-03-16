import React from "react";
import { Link } from "react-router-dom";
// import house from "../../../imgs/img/1.svg";

export const CaterogiyaCard = ({ img, name }) => {
  return (
    <Link to={"/"}>
      <div className="w-[84px] h-[152px]  text-center">
        <div className="h-[84px] w-[84px] rounded-full bg-black flex items-center justify-center ">
          <img src={img} alt="" />
        </div>
        <h1 className="pt-3">{name}</h1>
      </div>
    </Link>
  );
};
