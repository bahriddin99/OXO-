import React from "react";
import loginimg from "../../imgs/img/login-img.svg";
import { Tab } from "@headlessui/react";
import logo from "../../imgs/img/logo.svg"


export const Login = () => {
  return (
    <>
      <div className="container w-[407px] h-[410px] border-2 shadow-sm mt-[64px] rounded-md ">
        <div className="w-[343px] h-[346px]   mt-8 ml-8">
          <div className="">
            <Tab.Group>
              <Tab.List className="flex gap-8 justify-center ">
                
                <Tab>Kirish</Tab>
                <Tab>Ro’yxatdan o’tish</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <form>
                    <form className="">
                      <div className="pt-6">
                        <h1>Telefon raqam</h1>
                        <input
                          type="phone"
                          className="border w-full h-12 mt-4 rounded p-2 outline-none"
                          placeholder="+9989..."
                        />
                      </div>
                    </form>
                    <form className="">
                      <div className="pt-6">
                        <h1>Parolingiz</h1>
                        <input
                          type="password"
                          className="border w-full h-12 p-2 mt-4 rounded outline-none"
                          placeholder="35"
                        />
                      </div>
                    </form>
                    <button className="bg-blackk text-white font- w-[343px] h-[56px] mt-12 rounded-lg">
                      Kirish
                    </button>
                  </form>
                </Tab.Panel>

                <Tab.Panel>
                  
                  <form className="">
                      <div className="pt-6">
                        <h1>Telefon raqam</h1>
                        <input
                          type="phone"
                          className="border w-full h-12 mt-4 rounded p-2 outline-none"
                          placeholder="+9989..."
                        />
                      </div>
                      {/* <button className="bg-blackk text-white font- w-[343px] h-[56px] mt-12 rounded-lg">Ro’yhatdan o’tish</button> */}
                    </form>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>

      <div className="mt-[-180px]">
        <img className="w-[410px] h-[283px]" src={loginimg} alt="" />
      </div>
    </>
  );
};
