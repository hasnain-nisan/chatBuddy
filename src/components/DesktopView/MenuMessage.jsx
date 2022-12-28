import React from 'react'

const MenuMessage = () => {
  return (
    <div>
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
    </div>
  );
}

export default MenuMessage