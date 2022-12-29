import moment from "moment";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRoom } from "../../redux/actions/conversationAction";
import Message from "./Message";
import { supabase } from "../../utils/supabase/supabaseClient";

const Conversation = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const room = useSelector((state) => state.conversationData.selected_room);
  const channel = supabase.channel("db-messages");
  const roomId = room?.id;

  const scrollToBottom = () => {
    setTimeout(() => {
      var objDiv = document.getElementById("bottomDivMessage");
      console.log(objDiv);
      objDiv.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  const setMsgContainerHeight = () => {
    var windowHeight = window.innerHeight;
    var bodyHeight = document.getElementsByTagName("body")[0].clientHeight;
    var bottomNavigationHeight =
      document.getElementById("bottom-navigation").clientHeight;
    var headerHeight = document.getElementById("header").clientHeight;
    var msgContanerHeight =
      bodyHeight - (bottomNavigationHeight + headerHeight + 55);
    document.getElementById("msgContainer").style.height =
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
      getMessageUserProfile(payload.new)
      scrollToBottom();
    }
  );

  channel.subscribe();

  useEffect(() => {
    getRoomMessages();
    scrollToBottom();
    setMsgContainerHeight()
  }, []);

  return (
    <div className="h-full px-5 overflow-y-hidden">
      {/* header */}
      <div id="header" className="flex justify-between items-center py-5 z-10">
        <MdOutlineKeyboardBackspace
          fontSize={18}
          className="text-teal-600 cursor-pointer"
          onClick={() => dispatch(setSelectedRoom(null))}
        />
        <h1 className="text-lg text-teal-400 font-popins">{room?.name}</h1>
        <BiMenuAltRight
          fontSize={18}
          className="text-teal-600 cursor-pointer"
        />
      </div>

      <div
        id="msgContainer"
        className="flex flex-col gap-3 overflow-y-scroll h-[90%] px-5 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-[#211F2C] pt-1"
      >
        {messages.map((msg) => {
          return <Message key={msg.id} msg={msg} />;
        })}
        <div id="bottomDivMessage"></div>
      </div>
      <Input />
    </div>
  );
};

export default Conversation;
