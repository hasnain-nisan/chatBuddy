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
        console.log(bodyHeight, windowHeight);
        var bottomNavigationHeight =
          document.getElementById("bottom-navigation").clientHeight;
        var headerHeight = document.getElementById("header").clientHeight;
        var searchHeight = document.getElementById("search").clientHeight;
        var msgContanerHeight =
          bodyHeight - (bottomNavigationHeight + headerHeight + searchHeight);
        document.getElementById("msgContainer").style.height =
          msgContanerHeight + "px";

        console.log(msgContanerHeight);
      };

      useEffect(() => {
        setMsgContainerHeight();
      }, []);

    return (
      <div id="msgContainer" className="flex flex-col gap-2 overflow-y-scroll">
        {msgs.map((msg) => {
          return <Message side={msg.side} />;
        })}
      </div>
    );
}

export default MessageContainer