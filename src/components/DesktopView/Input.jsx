import React from 'react'
import { HiOutlinePaperClip } from 'react-icons/hi';
import { MdEmojiEmotions } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';

const Input = () => {
  return (
    <section
      id="bottom-navigation"
      className="block relative inset-x-0 bottom-0 z-10 bg-[#211F2C] px-5 py-3"
    >
      <div class="relative flex justify-between items-center w-full h-10 px-4 rounded-lg bg-[#1E1C26] overflow-hidden">
        <input
          class="peer h-full w-3/5 outline-none text-sm text-teal-700 pl-3 bg-[#1E1C26] placeholder:text-teal-700 placeholder:text-sm"
          type="text"
          id="search"
          placeholder="Type something.."
          autocomplete="off"
        />
        <div class="flex justify-between items-center h-full w-20 text-teal-700 pr-2">
          <MdEmojiEmotions fontSize={18} />
          <HiOutlinePaperClip fontSize={18} />
          <RiSendPlaneFill fontSize={18} />
        </div>
      </div>
    </section>
  );
}

export default Input