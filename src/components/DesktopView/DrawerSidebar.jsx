import React from 'react'
import { IoLogoIonitron } from "react-icons/io";
import { HiOutlineHome, HiUserGroup, HiChatAlt, HiMenu } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../../utils/supabase/supabaseClient';
import { auth } from '../../redux/actions/authAction';
import { setMenu } from '../../redux/actions/menuAction';

const DrawerSidebar = () => {

  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menuData.selectedMenu);

  const signOut = async (e) => {
    const { error } = await supabase.auth.signOut();
    dispatch(auth(null));
  };

  const setSelectedMenu = (type) => {
    dispatch(setMenu(type));
  };

  return (
    <aside className="w-full h-full bg-[#252331]" aria-label="Sidebar">
      <div className="flex flex-row gap-2 justify-center items-center p-5">
        <IoLogoIonitron fontSize={40} className="text-teal-400" />
        <h1 className="text-2xl font-popins font-bold text-teal-500">
          ChatBuddy
        </h1>
      </div>

      <div className="flex flex-col h-[80%] items-center justify-center">
        <div class="my-5">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
              <div class="">
                <img
                  src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                  class="shadow-xl rounded-full align-middle max-w-[100px] border border-teal-300"
                />
              </div>
            </div>
            <div class="text-center mt-2">
              <h3 class="text-xl text-teal-600 font-popins font-semibold ">
                Mike Thompson
              </h3>
            </div>
          </div>
        </div>

        <div class="px-3 py-4 overflow-y-auto rounded">
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class={`flex items-center p-2 font-normal font-popins hover:bg-[#1E1C26] hover:text-teal-600 rounded-md ${
                  menu === "home"
                    ? "bg-[#1E1C26] text-teal-600"
                    : "text-slate-500"
                }`}
              >
                <HiOutlineHome />
                <span class="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class={`flex items-center p-2 font-normal font-popins hover:bg-[#1E1C26] hover:text-teal-600 rounded-md ${
                  menu === "group"
                    ? "bg-[#1E1C26] text-teal-600"
                    : "text-slate-500"
                }`}
                onClick={() => setSelectedMenu("group")}
              >
                <HiUserGroup />
                <span class="ml-3">Group</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 font-normal text-slate-500 font-popins hover:bg-[#1E1C26] hover:text-teal-600 rounded-md"
              >
                <HiChatAlt />
                <span class="ml-3">Friends</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 font-normal text-slate-500 font-popins hover:bg-[#1E1C26] hover:text-teal-600 rounded-md"
              >
                <HiMenu />
                <span class="ml-3">Menu</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 font-normal text-slate-500 font-popins hover:bg-[#1E1C26] hover:text-teal-600 rounded-md"
                onClick={signOut}
              >
                <BiLogOut />
                <span class="ml-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default DrawerSidebar