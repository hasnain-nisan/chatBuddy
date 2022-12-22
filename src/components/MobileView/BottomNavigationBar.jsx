import React from 'react'
import { HiOutlineHome, HiUserGroup, HiChatAlt, HiMenu } from "react-icons/hi";

const BottomNavigationBar = () => {
  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-10 bg-[#1E1C26] shadow p-2"
    >
      <div id="tabs" className="flex justify-between">
        <a
          href="#"
          className="w-full text-teal-400 focus:text-teal-400 hover:text-teal-400 flex justify-center items-center text-center pt-2 pb-1"
        >
          <HiOutlineHome fontSize={22} className="inline-block mb-1" />
        </a>
        <a
          href="#"
          className="w-full text-teal-800 focus:text-teal-400 hover:text-teal-400 flex justify-center items-center text-center pt-2 pb-1"
        >
          <HiUserGroup fontSize={22} className="inline-block mb-1" />
        </a>
        <a
          href="#"
          className="w-full text-teal-800 focus:text-teal-400 hover:text-teal-400 flex justify-center items-center text-center pt-2 pb-1"
        >
          <HiChatAlt fontSize={22} className="inline-block mb-1" />
        </a>
        <a
          href="#"
          className="w-full text-teal-800 focus:text-teal-400 hover:text-teal-400 flex justify-center items-center text-center pt-2 pb-1"
        >
          <HiMenu fontSize={22} className="inline-block mb-1" />
        </a>
      </div>
    </section>
  );
}

export default BottomNavigationBar