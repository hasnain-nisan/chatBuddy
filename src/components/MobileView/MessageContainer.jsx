import React, {useEffect} from 'react'
import Message from './Message'

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
    ];

      const setMsgContainerHeight = () => {
        var windowHeight = window.innerHeight;
        var bodyHeight = document.getElementsByTagName("body")[0].clientHeight;
        var bottomNavigationHeight =
          document.getElementById("bottom-navigation").clientHeight;
        var headerHeight = document.getElementById("header").clientHeight;
        var msgContanerHeight =
          bodyHeight - (bottomNavigationHeight + headerHeight);
        document.getElementById("msgContainer").style.height =
          msgContanerHeight + "px";
      };

      useEffect(() => {
        setMsgContainerHeight();
      }, []);

    return (
      <div
        id="msgContainer"
        className="flex flex-col gap-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-[#211F2C]"
      >
        {msgs.map((msg) => {
          return <Message side={msg.side} />;
        })}
      </div>
    );
}

export default MessageContainer