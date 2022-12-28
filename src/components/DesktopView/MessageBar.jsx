import React from 'react'
import { MdSearch } from 'react-icons/md';

const MessageBar = () => {
    const messages = [1, 1, 1, 1, 1, 2, 3, 3, 1, 34, 4, 3,3,3,3,3,3,3];
    return (
      <div className="w-1/3 px-5 mt-1">
        <div id="search" class="mx-auto mb-3">
          <div class="flex items-center w-full h-12 rounded-lg bg-[#1E1C26] overflow-hidden p-1">
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
            {messages.map((message) => {
              return (
                <div
                  class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 cursor-pointer bg-[#252331] rounded-md p-3"
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
            })}
          </div>
        </div>
      </div>
    );
}

export default MessageBar