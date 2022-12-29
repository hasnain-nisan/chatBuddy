import React from 'react'
import { GoSettings } from 'react-icons/go';
import { MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Group from '../DesktopView/Group';

const MessageBar = () => {

    const menu = useSelector((state) => state.menuData.selectedMenu)

    return (
      <div className="h-full px-5 overflow-y-hidden">
        {/* header */}
        <div
          id="header"
          className="flex justify-between items-center py-5 z-10"
        >
          <h1 className="uppercase text-2xl text-teal-400 font-semibold font-popins">
            {menu}
          </h1>
          <GoSettings fontSize={20} className="text-teal-600 mt-2" />
        </div>

        {/* searchBar */}
        <div id="search" class="mx-auto mb-3">
          <div class="relative flex items-center w-full h-12 rounded-lg bg-[#1E1C26] overflow-hidden">
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

        {/* messages */}
        <div
          id="msgContainer"
          className="flex flex-col gap-2 pb-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-[#211F2C]"
        >
          {/* {messages.map((message) => {
            return (
                <div
                class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 cursor-pointer"
                onClick={() => setIsConversation(true)}
                >
                <div class="flex justify-start items-center gap-3">
                    <img
                    class="rounded-full items-start flex-shrink-0 object-cover"
                    src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
                    width="45"
                    height="45"
                    alt="Marie Zulfikar"
                    />
                    <div>
                    <h4 class="text-[15px] font-semibold font-popins text-teal-500">
                        Marie Zulfikar
                    </h4>
                    <div class="text-[11px] text-teal-700 font-popins">
                        The video chat ended · 2hrs
                    </div>
                    </div>
                </div>
                </div>
            );
            })} */}
          {menu === "group" && <Group/>}
        </div>
      </div>
    );
}

export default MessageBar