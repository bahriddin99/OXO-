import React from "react";
import logofooter from "../../imgs/img/logofooter.svg";
import app from "../../imgs/img/appstore.svg";
import story from "../../imgs/img/playstore.svg";

export const Footer = () => {
  return (
    <footer className="bg-blackk pb-10 font-sans">
      <div className="container grid grid-cols-4 pt-8 gap-6">
        <img src={logofooter} alt="" />
        <div className="text-white">
          <p>Mobil ilovalar</p>
          <p>Yordam</p>
          <p>Pullik xizmatlar</p>
          <p>OXO da biznes</p>
          <p>Saytda reklama</p>
          <p>Foydalanish shartlari</p>
          <p>Maxfiylik siyosati</p>
          <p>Foydalanish shartlari</p>
        </div>
        <div className="text-white">
          <p>Qanday qilib sotish va sotib olish kerak?</p>
          <p>Xavfsizlik qoidalari</p>
          <p>Sayt xaritasi</p>
          <p>Mintaqalar xaritasi</p>
          <p>OXO da karyera</p>
          <p>Qayta aloqa</p>
        </div>
        <div>
          <img src={app} alt="" />
          <img src={story} alt="" />
        </div>
      </div>
      <div className="container w-full pt-6">
 <h1 className="h-[1px] bg-white"></h1>
      </div>
      <h3 className="container text-white pt-6">© 2022 Barcha huquqlar himoyalangan.Ushbu sayt cookie-fayllardan foydalanadi. Brauzeringizda cookie sozlamalarini o'zgartirishingiz mumkin.</h3>
    </footer>
  );
};
