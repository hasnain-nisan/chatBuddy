import React from 'react'
import { v4 as uuidv4 } from "uuid";
import { useSelector } from 'react-redux';
import { supabase } from '../../utils/supabase/supabaseClient';
import moment from "moment";
import Input from './Input';

const MessageContainer = () => {

  const user = useSelector((state) => state.authData.session);

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

  // createRoom();
  // sendMessage();

  return (
    <div class="flex flex-col flex-auto h-full p-6">
      <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div class="flex flex-col h-full overflow-x-auto mb-4">
          <div class="flex flex-col h-full">
            <div class="grid grid-cols-12 gap-y-2">
              {/* <div class="col-start-1 col-end-8 p-3 rounded-lg">
                <div class="flex flex-row items-center">
                  <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                    <div>Hey How are you today?</div>
                  </div>
                </div>
              </div>
              <div class="col-start-6 col-end-13 p-3 rounded-lg">
                <div class="flex items-center justify-start flex-row-reverse">
                  <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                    <div>I'm ok what about you?</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Input/>
      </div>
    </div>
  );
}

export default MessageContainer