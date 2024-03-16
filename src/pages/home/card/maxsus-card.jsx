import React from "react";
import tavar from "../../../imgs/img/tavar.svg";
import { LikeIcon } from "../../../imgs/icon/like-icon";

export const MaxsusCard = () => {
  return (
    <div className="w-[210px] h-[316px] border bg-white rounded-lg p-1 mb-5 mt-5">
      <img src={tavar} alt="" className="text-center p-1" />
      <div className="w-[202px] h-[150px] p-2 flex flex-col gap-2  ">
        <h1>Tovar nomi maksimum ikki qator bo’lishi kerak...</h1>
        <p className="font-bold text-price">23 000 UYE</p>
        <p className="text-joy">Tashkent, Yakkasaroy</p>
        <div className="flex items-center justify-between ">
          <p className="text-joy ">Bugun 12:27</p>
          <button className=" "><LikeIcon color={"#88888"} /></button>
        </div>
      </div>
    </div>
  );
};
