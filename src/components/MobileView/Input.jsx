import React from 'react'
import { HiChatAlt, HiMenu, HiOutlineHome, HiOutlinePaperClip, HiUserGroup } from 'react-icons/hi';
import { MdEmojiEmotions, MdSearch } from 'react-icons/md';
import {RiSendPlaneFill} from 'react-icons/ri'

const Input = () => {
  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-3 mx-5 z-10 bg-[#1E1D26] shadow p-2 rounded-md"
    >
      <div class="relative flex justify-between items-center w-full h-6 rounded-lg bg-[#1E1C26] overflow-hidden">
        <input
          class="peer h-full w-3/5 outline-none text-sm text-teal-700 pl-3 bg-[#1E1C26] placeholder:text-teal-700 placeholder:text-sm"
          type="text"
          id="search"
          placeholder="Type something.."
          autocomplete="off"
        />
        <div class="flex justify-between items-center h-full w-20 text-teal-700">
          <MdEmojiEmotions fontSize={18} />
          <HiOutlinePaperClip fontSize={18} />
          <RiSendPlaneFill  fontSize={18}/>
        </div>
      </div>
    </section>
  );
}

export default Input