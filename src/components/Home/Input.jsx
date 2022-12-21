import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import React, {useState} from 'react'
import { useSelector } from "react-redux";
import { supabase } from "../../utils/supabase/supabaseClient";

const Input = () => {
    const [message, setMessage] = useState("");
    const user = useSelector((state) => state.authData.session);

    const sendMessage = async () => {
        const msg = {
            'id': uuidv4(),
            'message': message,
            'sender_id': user.user.id,
            'room_id': "614132cb-0dcc-4fe2-9813-e68f85199755",
            'created_at': moment().format(),
        };
        const { error } = await supabase.from("messages").insert(msg);   
        setMessage("") 
    };

    return (
        <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4 z-20">
            <div>
                <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                </svg>
                </button>
            </div>
            <div class="flex-grow ml-4">
                <div class="relative w-full">
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
                <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                    </svg>
                </button>
                </div>
            </div>
            <div class="ml-4">
                <button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    onClick={sendMessage}
                >
                    <span>Send</span>
                    <span class="ml-2">
                        <svg
                        class="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Input