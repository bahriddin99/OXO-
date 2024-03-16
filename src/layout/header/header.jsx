import React from "react";
import logo from "../../imgs/img/logo.svg";
import { MessagIcon } from "../../imgs/icon/messag-icon";
import { LikeIcon } from "../../imgs/icon/like-icon";
import { ContactIcon } from "../../imgs/icon/contact-icon";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="border-y-2 pb-5 shadow-sm">
      <div className="flex items-center justify-between container pt-5 ">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-8 font-bold  ">
          <div className="flex items-center gap-2">
            <MessagIcon />
            <p>Xabarlar</p>
          </div>
          <div className="flex items-center gap-2">
            <LikeIcon />
            <p>Yoqtirganlar</p>
          </div>
          <Link to={`/login`} className="flex items-center gap-2">
            <ContactIcon />
            <p>Akkaunt</p>
          </Link>
          <button className="border py-2 px-3  rounded-lg bg-blackk text-white">
            E'lonlarni joylashtirish
          </button>
        </div>
      </div>
      {/* <SearchHeader /> */}
    </div>
  );
};
