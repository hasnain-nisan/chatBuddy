import React from 'react'
import Logo from "../../assets/chatbuddy.png";
import { RxDragHandleDots2 } from "react-icons/rx";
import {ImBullhorn} from 'react-icons/im'
import {IoMdLogOut} from 'react-icons/io'
import { supabase } from '../../utils/supabase/supabaseClient';
import { useDispatch } from 'react-redux';
import { auth } from '../../redux/actions/authAction';

const Sidebar = () => {

  const dispatch = useDispatch();
  const signOut = async (e) => {
    const { error } = await supabase.auth.signOut();
    dispatch(auth(null))
  }

  return (
    <div class="hidden py-8 pl-6 pr-2 md:flex md:flex-col md:w-1/4 md:min-w-[250px] md:max-w-[500px] bg-white flex-shrink-0">
      <div class="flex flex-row items-center justify-center h-12 w-full mt-10">
        <img src={Logo} width="200" alt="" srcSet="" />
      </div>
      <div class="flex flex-col mt-28">
        <div class="flex flex-col space-y-1 mt-4 -mx-2">
          <button class="flex flex-row gap-3 items-center hover:bg-gray-200 rounded-xl p-2">
            <div class="flex items-center justify-center h-10 w-10 bg-indigo-200 rounded-full">
              <ImBullhorn fontSize={20} />
            </div>
            <div class="text-xl font-semibold">Shout Box</div>
          </button>
        </div>
      </div>
      <div className="w-1/4 min-w-[250px] max-w-[500px] flex justify-between items-center gap-2 absolute bottom-10">
        <div className="flex gap-3 justify-center items-center">
          <div class="relative h-16 w-16 rounded-full border border-gray-600 overflow-hidden">
            <img
              src="https://avatars3.githubusercontent.com/u/2763884?s=128"
              alt="Avatar"
              class="h-full w-full"
            />
          </div>
          <div class="text-xl font-semibold mt-2">Aminos Co.</div>
        </div>
        <div className="flex justify-center items-center mr-10 hover:bg-blue-300 p-1 border rounded-full cursor-pointer">
          {/* <RxDragHandleDots2 fontSize={30} className="" /> */}
          <IoMdLogOut fontSize={30} onClick={signOut}/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar