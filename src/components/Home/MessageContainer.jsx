import React from 'react'
import { v4 as uuidv4 } from "uuid";
import { useSelector } from 'react-redux';
import { supabase } from '../../utils/supabase/supabaseClient';
import moment from "moment";
import Noroom from './Noroom';
import Room from './Room';

const MessageContainer = () => {

  const user = useSelector((state) => state.authData.session);
  const selected_room = useSelector(
    (state) => state.conversationData.selected_room
  );

  const data = {
    'id': uuidv4(),
    'slug': 'shout-box',
    'name': 'Shout Box',
    'created_at': moment().format(),
    'participents': '[]'
  }

  const createRoom = async () => {
    const { error } = await supabase.from("rooms").insert(data);
    console.log('as');
  };

  const sendMessage = async () => {
    const { error } = await supabase.from("messages").insert(message);
  };

  return (
    <div class="flex flex-col flex-auto h-full p-6">
      <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
          {selected_room ? (
            <Room/>
          ) : (
            <Noroom/>
          )}
      </div>
    </div>
  );
}

export default MessageContainer