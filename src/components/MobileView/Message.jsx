import React from 'react'
import { useSelector } from 'react-redux';

const Message = ({msg}) => {
    const user = useSelector((state) => state.authData.session);
    const selected_room = useSelector(
      (state) => state.conversationData.selected_room
    );
    const user_id = user?.user?.id;
    
    return msg.sender_id !== user_id ? (
      <div class="flex items-end justify-start">
        {msg.profiles?.avatar_url ? (
          <img
            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
            class="object-cover h-7 w-7 rounded-full"
            alt=""
          />
        ) : (
          <span className="text-2xl font-bold font-popins bg-slate-400 px-2 h-8 w-8 rounded-full flex items-center justify-center border border-teal-600">
            <p>{msg.profiles?.username.charAt(0)}</p>
          </span>
        )}

        <div class="ml-2 py-2 px-3 bg-[#343145] rounded-br-xl rounded-tr-xl rounded-tl-xl text-white text-[12px] font-thin font-popins">
          {msg.message}
        </div>
      </div>
    ) : (
      <div class="flex items-end justify-end">
        <div class="mr-2 py-2 px-3 bg-gradient-to-l from-teal-600 to-teal-700 rounded-bl-xl rounded-tl-xl rounded-tr-xl text-white text-[12px] font-thin font-popins">
          {msg.message}
        </div>
      </div>
    );
}

export default Message