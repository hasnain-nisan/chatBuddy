import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { BiMenuAltRight } from "react-icons/bi";
import Input from './Input'
import MessageContainer from './MessageContainer';

const Conversation = (props) => {
  const setIsConversation = props.setIsConversation;
  return (
    <div className="h-full px-5 overflow-y-hidden">
      {/* header */}
      <div id="header" className="flex justify-between items-center py-5 z-10">
        <MdOutlineKeyboardBackspace
          fontSize={18}
          className="text-teal-600 cursor-pointer"
          onClick={() => setIsConversation(false)}
        />
        <h1 className="text-lg text-teal-400 font-popins">Jakaria Jackson</h1>
        <BiMenuAltRight
          fontSize={18}
          className="text-teal-600 cursor-pointer"
        />
      </div>

      <MessageContainer />

      <Input />
    </div>
  );
}

export default Conversation