import React from 'react'
import { useSelector } from 'react-redux';
import { supabase } from '../../utils/supabase/supabaseClient';

const Message = ({msg}) => {
    const user = useSelector((state) => state.authData.session);
    const selected_room = useSelector(
      (state) => state.conversationData.selected_room
    );
    const user_id = user?.user?.id;

    const channel = supabase.channel("db-messages");
    const roomId = selected_room?.id;
    const userId = user_id;

    channel.on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `room_id=eq.${roomId}`,
      },
      (payload) => console.log(payload)
    );

    channel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        const res = await supabase.from("messages").insert({
          room_id: roomId,
          user_id: userId,
          message: "Welcome to Realtime!",
        });
        console.log(res);
      }
    });

    return (
      <>
        {msg.sender_id === user_id ? (
          <div class="col-start-6 col-end-13 p-3 rounded-lg">
            <div class="flex items-center justify-start flex-row-reverse">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                A
              </div>
              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                <div>{msg.message}</div>
              </div>
            </div>
          </div>
        ) : (
          <div class="col-start-1 col-end-8 p-3 rounded-lg">
            <div class="flex flex-row items-center">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                A
              </div>
              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>{msg.message}</div>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Message