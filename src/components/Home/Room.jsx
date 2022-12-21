import moment from 'moment';
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { supabase } from '../../utils/supabase/supabaseClient';
import Input from './Input';
import Message from './Message';

const Room = () => {

    const [messages, setMessages] = useState([]);
    const user = useSelector((state) => state.authData.session);
    const selected_room = useSelector(
      (state) => state.conversationData.selected_room
    );

    const scrollToBottom = () => {
      setTimeout(() => {
        var objDiv = document.getElementById("mesgContainer");
        objDiv.scrollTo({ top: objDiv.scrollHeight, behavior: 'smooth' })
        // objDiv.scrollTop = objDiv.scrollHeight;
      }, 1000)
    }

    const getRoomMessages = async (e) => {
      const { data, error } = await supabase
        .from("messages")
        .select()
        .eq("room_id", selected_room.id);

      data?.forEach(d => {
        d.date = moment(d.created_at, moment.ISO_8601).format(
          "DD/MM/YYYY"
        );
        d.time = moment(d.created_at, moment.ISO_8601).format(
          "hh:mm:ss"
        );
      })

      data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      setMessages(data)
    };

    const channel = supabase.channel("db-messages");
    const roomId = selected_room?.id;
    const userId = user.id;

    channel.on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `room_id=eq.${roomId}`,
      },
      (payload) => {
        setMessages([...messages, payload.new]);
        scrollToBottom();
      }
    );

    channel.subscribe();

    useEffect(() => {
        getRoomMessages();
        scrollToBottom();
    }, [])

    return (
        <div class="flex flex-col h-full">
            <div class="flex flex-col h-full overflow-x-auto" id="mesgContainer">
                <div class="grid grid-cols-12 gap-y-2">
                    {messages.map((message) => {
                        return <Message msg={message}/>
                    })}
                </div>
            </div>
            <Input/>
        </div>
    );
}

export default Room