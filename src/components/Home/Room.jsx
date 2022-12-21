import moment from 'moment';
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { supabase } from '../../utils/supabase/supabaseClient';
import Input from './Input';
import Message from './Message';

const Room = () => {

    const [messages, setMessages] = useState([]);
    const selected_room = useSelector(
      (state) => state.conversationData.selected_room
    );

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

    useEffect(() => {
        getRoomMessages();
    }, [])

    return (
        <div class="flex flex-col h-full overflow-x-auto">
            <div class="flex flex-col h-full">
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