import React from 'react'
import { HiOutlineHome, HiUserGroup, HiChatAlt, HiMenu } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../../utils/supabase/supabaseClient';
import { auth } from '../../redux/actions/authAction';
import { setMenu } from '../../redux/actions/menuAction';

const BottomNavigationBar = () => {

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menuData.selectedMenu);

  console.log(menu);

  const signOut = async (e) => {
    const { error } = await supabase.auth.signOut();
    dispatch(auth(null));
  };

  const setSelectedMenu = (type) => {
    dispatch(setMenu(type));
  };

  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-10 bg-[#1E1C26] shadow p-2"
    >
      <div id="tabs" className="flex justify-between">
        <a
          href="#"
          className={`w-full focus:text-teal-400 hover:text-teal-400 flex justify-center items-center text-center pt-2 pb-1 ${
            menu === "home" ? "text-teal-400" : "text-teal-800"
          }`}
          onClick={() => setSelectedMenu("home")}
        >
          <HiOutlineHome fontSize={22} className="inline-block mb-1" />
        </a>
        <a
          href="#"
          className={`w-full hover:text-teal-400 flex justify-center items-center text-center pt-2 pb-1 ${
            menu === "group" ? "text-teal-400" : "text-teal-800"
          }`}
          onClick={() => setSelectedMenu("group")}
        >
          <HiUserGroup fontSize={22} className="inline-block mb-1" />
        </a>
        <a
          href="#"
          className={`w-full hover:text-teal-400 flex justify-center items-center text-center pt-2 pb-1 ${
            menu === "chat" ? "text-teal-400" : "text-teal-800"
          }`}
        >
          <HiChatAlt fontSize={22} className="inline-block mb-1" />
        </a>
        <a
          href="#"
          className="w-full text-teal-800 hover:text-teal-400 flex justify-center items-center text-center pt-2 pb-1"
        >
          <HiMenu fontSize={22} className="inline-block mb-1" />
        </a>
        <a
          href="#"
          className="w-full text-teal-800 hover:text-teal-400 flex justify-center items-center text-center pt-2 pb-1"
          onClick={signOut}
        >
          <BiLogOut fontSize={22} className="inline-block mb-1" />
        </a>
      </div>
    </section>
  );
}

export default BottomNavigationBar