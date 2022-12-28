import React from 'react'
import Input from './Input';
import Message from '../MobileView/Message';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';

const MessageContainer = () => {
    let msgs = [
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },

    ];

     

    return (
      <div className="w-2/3 h-full pb-5">
        <div
          id="header"
          className="flex justify-between items-center p-4 mb-2 bg-[#1E1C26] rounded-md mt-1 h-12"
        >
          <div className="flex gap-3">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-7 w-7 rounded-full"
              alt=""
            />
            <h1 className="text-xl text-teal-400 font-popins">
              Jakaria Jackson
            </h1>
          </div>
          <BiMenuAltRight
            fontSize={25}
            className="text-teal-600 cursor-pointer"
          />
        </div>
        <div
          id="msgContainer"
          className="flex flex-col gap-3 overflow-y-scroll h-[90%] px-5 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-[#211F2C] pt-1"
        >
          {msgs.map((msg) => {
            return <Message side={msg.side} />;
          })}
        </div>
        <Input />
      </div>
    );
}

export default MessageContainer