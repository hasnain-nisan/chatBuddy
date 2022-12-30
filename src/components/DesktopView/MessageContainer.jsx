import React, {useEffect, useState} from 'react'
import moment from "moment";
import Input from './Input';
import Message from '../MobileView/Message';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import NoConvImage from '../../assets/vector1.png'
import { supabase } from '../../utils/supabase/supabaseClient';


const MessageContainer = () => {
    let msgs = [
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "left",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },
      {
        id: 1,
        message: "heloo",
        side: "right",
      },

    ];

    const [messages, setMessages] = useState([]);
    const room = useSelector((state) => state.conversationData.selected_room)
    const channel = supabase.channel("db-messages");
    const roomId = room?.id;

    const scrollToBottom = () => {
      setTimeout(() => {
        setMsgContainerHeight();
        var objDiv = document.getElementById("msgContainerr");
        objDiv.scrollTo({ top: objDiv.scrollHeight, behavior: "smooth" });
      }, 1500);
    };

    const setMsgContainerHeight = () => {
      var windowHeight = window.innerHeight;
      var bodyHeight = document.getElementsByTagName("body")[0].clientHeight;
      var bottomNavigationHeight =
        document.getElementById("bottom-navigation").clientHeight;
      var headerHeight = document.getElementById("header").clientHeight;
      var msgContanerHeight =
        bodyHeight -
        (bottomNavigationHeight + headerHeight + bottomNavigationHeight + 30);
      document.getElementById("msgContainerr").style.height =
        msgContanerHeight + "px";
    };

    const getRoomMessages = async (e) => {
      const { data, error } = await supabase
        .from("messages")
        .select(`*, profiles(*)`)
        .eq("room_id", room?.id);

      data?.forEach((d) => {
        d.date = moment(d.created_at, moment.ISO_8601).format("DD/MM/YYYY");
        d.time = moment(d.created_at, moment.ISO_8601).format("hh:mm:ss");
      });

      data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      setMessages(data);
    };

    const getMessageUserProfile = async (msg) => {
      const { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("id", msg.sender_id);

      msg.profiles = data[0];
      setMessages([...messages, msg]);
    };

    channel.on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `room_id=eq.${roomId}`,
      },
      (payload) => {
        getMessageUserProfile(payload.new);
        scrollToBottom();
      }
    );

    channel.subscribe();

    useEffect(() => {
      scrollToBottom();
    }, [])

    useEffect(() => {
      getRoomMessages();
      scrollToBottom();
    }, [room]);

    return (
      <div className="w-2/3 h-full pb-5">
        {room ? (
          <>
            <div
              id="header"
              className="flex justify-between items-center p-4 mb-2 bg-[#1E1C26] rounded-md mt-1 h-12"
            >
              <div className="flex items-center gap-3">
                {room?.photo ? (
                  <img
                    class="rounded-full items-start flex-shrink-0 object-cover"
                    src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
                    width="45"
                    height="45"
                    alt="Marie Zulfikar"
                  />
                ) : (
                  <span className="text-2xl font-bold font-popins bg-slate-400 px-2 h-8 w-8 rounded-full flex items-center justify-center border border-teal-600">
                    <p>{room?.name.charAt(0)}</p>
                  </span>
                )}
                <h1 className="text-xl text-teal-400 font-popins">
                  {room?.name}
                </h1>
              </div>
              <BiMenuAltRight
                fontSize={25}
                className="text-teal-600 cursor-pointer"
              />
            </div>
            <div
              id="msgContainerr"
              className="a flex flex-col gap-3 overflow-y-scroll h-[85%] px-5 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-[#211F2C] pt-1"
            >
              {messages.map((msg) => {
                return <Message key={msg.id} msg={msg} />;
              })}
              <div id="bottomDivMessage"></div>
            </div>
            <Input />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <img src={NoConvImage} alt="" srcset="" className="object-cover" />
            <p className="font-semibold font-popins text-2xl text-teal-700">
              No conversation is selected
            </p>
            <div id="bottomDivMessage"></div>
          </div>
        )}
      </div>
    );
}

export default MessageContainer