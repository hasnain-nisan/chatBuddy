import React from 'react'
import Logo from "../../assets/chatbuddy.png";
import { RxDragHandleDots2 } from "react-icons/rx";
import {ImBullhorn} from 'react-icons/im'

const Sidebar = () => {
  return (
    <div class="hidden py-8 pl-6 pr-2 md:flex md:flex-col md:w-1/4 md:min-w-[250px] md:max-w-[500px] bg-white flex-shrink-0">
      <div class="flex flex-row items-center justify-center h-12 w-full mt-10">
        <img src={Logo} width="200" alt="" srcSet="" />
      </div>
      <div class="flex flex-col mt-28">
        {/* <div class="flex flex-row items-center justify-between text-xs">
          <span class="font-bold">Active Conversations</span>
          <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            4
          </span>
        </div>
        <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
              H
            </div>
            <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
          </button>
          <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
              M
            </div>
            <div class="ml-2 text-sm font-semibold">Marta Curtis</div>
            <div class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
              2
            </div>
          </button>
          <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
              P
            </div>
            <div class="ml-2 text-sm font-semibold">Philip Tucker</div>
          </button>
          <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
              C
            </div>
            <div class="ml-2 text-sm font-semibold">Christine Reid</div>
          </button>
          <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
              J
            </div>
            <div class="ml-2 text-sm font-semibold">Jerry Guzman</div>
          </button>
        </div>
        <div class="flex flex-row items-center justify-between text-xs mt-6">
          <span class="font-bold">Archivied</span>
          <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            7
          </span>
        </div>
        <div class="flex flex-col space-y-1 mt-4 -mx-2">
          <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
              H
            </div>
            <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
          </button>
        </div> */}
        <div class="flex flex-col space-y-1 mt-4 -mx-2">
          <button class="flex flex-row gap-3 items-center hover:bg-gray-200 rounded-xl p-2">
            <div class="flex items-center justify-center h-10 w-10 bg-indigo-200 rounded-full">
              <ImBullhorn fontSize={20}/>
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
          <RxDragHandleDots2 fontSize={30} className="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar