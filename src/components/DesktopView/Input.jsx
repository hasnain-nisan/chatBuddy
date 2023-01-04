import React, { useState, useRef, useEffect } from 'react'
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { HiOutlinePaperClip } from 'react-icons/hi';
import { MdEmojiEmotions } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { supabase } from '../../utils/supabase/supabaseClient';
import { toast } from 'react-toastify';

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
    <section
      id="bottom-navigation"
      className="block relative inset-x-0 bottom-0 z-10 bg-[#211F2C] px-5 py-3"
    >
      <div class="relative flex justify-between items-center w-full h-10 px-4 rounded-lg bg-[#1E1C26] overflow-hidden">
        <input
          class="peer h-full w-3/5 outline-none text-sm text-teal-700 pl-3 bg-[#1E1C26] placeholder:text-teal-700 placeholder:text-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          id="search"
          placeholder="Type something.."
          autocomplete="off"
          ref={inputField}
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
}

export default Input