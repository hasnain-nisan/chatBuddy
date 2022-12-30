import React from 'react'
import { MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Group from './Group';
import { BsPlusCircleFill } from "react-icons/bs";

const MessageBar = () => {
    const messages = [1, 1, 1, 1, 1, 2, 3, 3, 1, 34, 4, 3,3,3,3,3,3,3];

    const menu = useSelector((state) => state.menuData.selectedMenu);

    return (
      <div className="w-1/3 mt-1 mb-5 border-r border-teal-900">
        <div id="search" class="mx-auto mb-3">
          <div class="flex items-center w-[95%] h-12 rounded-lg bg-[#1E1C26] overflow-hidden p-1">
            <div class="grid place-items-center h-full w-12 text-teal-700">
              <MdSearch fontSize={18} />
            </div>
            <input
              class="peer h-full w-full outline-none text-sm text-teal-700 pr-2 bg-[#1E1C26] placeholder:text-teal-700 placeholder:text-sm"
              type="text"
              id="search"
              placeholder="Search.."
              autocomplete="off"
            />
          </div>
        </div>

        <div className="w-full h-[95%] scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-[#211F2C] rounded-md">
          <div id="msgContainer" className="w-[95%] flex flex-col gap-3 pb-5 ">
            {menu === "group" && <Group />}
          </div>
          <button className="fixed bottom-20 left-52 cursor-pointer">
            <BsPlusCircleFill
              fontSize={40}
              className="shadow-md text-teal-800 hover:text-teal-400 hover:shadow-teal-500/50 rounded-full "
            />
          </button>
        </div>
      </div>
    );
}

export default MessageBar