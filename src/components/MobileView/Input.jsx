import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import {
  HiChatAlt,
  HiMenu,
  HiOutlineHome,
  HiOutlinePaperClip,
  HiUserGroup,
} from "react-icons/hi";
import { MdEmojiEmotions, MdSearch } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../utils/supabase/supabaseClient";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const Input = () => {
  const inputField = useRef();
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.authData.session);
  const selected_room = useSelector(
    (state) => state.conversationData.selected_room
  );

  const sendMessage = async (message) => {
    if(message === ""){
      toast.error('Message can not be empty')
    } else {
      const msg = {
        id: uuidv4(),
        message: message,
        sender_id: user.user.id,
        room_id: selected_room.id,
        created_at: moment().format(),
      };
      const { error } = await supabase.from("messages").insert(msg);
      setMessage("");
    }
  };

  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
        if (document.activeElement === inputField.current) {
          let msg = inputField.current.value
          sendMessage(msg)
        }
      }
    };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
  }, [])

  return (
    <section className="block fixed inset-x-0 bottom-0 z-10 bg-[#252331] shadow px-5 py-3">
      <Picker data={data} onEmojiSelect={console.log} />
      <div class="relative flex justify-between items-center w-full h-10 px-4 rounded-lg bg-[#1E1C26] overflow-hidden">
        <input
          class="peer h-full w-3/5 outline-none text-sm text-teal-700 pl-3 bg-[#1E1C26] placeholder:text-teal-700 placeholder:text-sm"
          type="text"
          id="search"
          placeholder="Type something.."
          autocomplete="off"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div class="flex justify-between items-center h-full w-20 text-teal-700 pr-2">
          <MdEmojiEmotions fontSize={18} />
          <HiOutlinePaperClip fontSize={18} />
          <RiSendPlaneFill
            fontSize={18}
            className="cursor-pointer"
            onClick={() => sendMessage(message)}
          />
        </div>
      </div>
    </section>
  );
};

export default Input;
