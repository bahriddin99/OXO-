import React from 'react'
import { LaksiyaIcon } from "../../imgs/icon/laksiya-icon";
import { SearchIcon } from "../../imgs/icon/search-icon";

export const SearchHeader = () => {
  return (
    <div>
        <div className="bg-header">
        <div className="input container pt-6 pb-6 mt-5">
          <form className=" flex items-center gap-5">
          <form className="flex items-center border w-[595px] h-[48px] rounded-lg p-3 bg-white ">
            <div>
              <SearchIcon />{" "}
            </div>
            <input
              type="text"
              className="outline-none w-[475px] p-2"
              placeholder="198 182 natija bo‘yicha "
            />
          </form>
          <form className="flex items-center border w-[475px] h-[48px] rounded-lg p-3 bg-white ">
            <div>
              <LaksiyaIcon />{" "}
            </div>
            <input
              type="text"
              className="outline-none w-[475px] p-2"
              placeholder="Butun O‘zbekiston "
            />
          </form>
            <button className="bg-blackk text-white h-[47px] rounded-lg px-10">Izlash</button>
          </form>
        </div>
      </div>
    </div>
  )
}
