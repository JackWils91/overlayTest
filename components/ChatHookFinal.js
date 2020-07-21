import React, { Component, Fragment, useEffect, useState } from "react";
// import axios from "axios";
import Pusher from "pusher-js";
import { fetchPostJSON } from "../utils/routing";
import ChatMessageHookFinal from "./ChatMessageHookFinal";

const Chat = (props) => {
  const [pusher, setPusher] = useState();
  const [channel, setChannel] = useState();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
      encrypted: true,
    });

    const channel = pusher.subscribe("chat-room");

    channel.bind("new-message", ({ chat = null }) => {
      // chat && chats.push(chat);
      // this.setState({ chats });

      setChats((chats) => [...chats, chat]);
    });

    pusher.connection.bind("connected", () => {
      fetchPostJSON(
        "https://charity-chachacha.herokuapp.com/messages",
        {}
      ).then((response) => {
        console.log("the response-->", response);
        const chats = response.messages;
        console.log("chats-->", chats);
        // const chats = { messages: [] };
        // this.setState({ chats });
        setChats(chats);
      });
    });
    setPusher(pusher);
    setChannel(channel);

    return () => pusher.disconnect();
  }, []);

  const handleKeyUp = (evt) => {
    const value = evt.target.value;

    if (evt.keyCode === 13 && !evt.shiftKey) {
      const { activeUser: user } = props;
      const chat = { user, message: value, timestamp: +new Date() };

      evt.target.value = "";
      //   axios.post("/message", chat);
      fetchPostJSON("https://charity-chachacha.herokuapp.com/message", chat);
    }
  };

  console.log("channel-->", channel);
  return (
    props.activeUser && (
      <Fragment>
        <div
          className="border-bottom border-gray w-100 d-flex align-items-center bg-white"
          style={{ height: 90 }}
        >
          <h2 className="text-dark mb-0 mx-4 px-2">{props.activeUser}</h2>
        </div>
        <div
          className="px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative"
          style={{ height: "calc(100% - 180px)", overflowY: "scroll" }}
        >
          {chats.map((chat, index) => {
            const previous = Math.max(0, index - 1);
            const previousChat = chats[previous];
            const position = chat.user === props.activeUser ? "right" : "left";

            const isFirst = previous === index;
            const inSequence = chat.user === previousChat.user;
            const hasDelay =
              Math.ceil(
                (chat.timestamp - previousChat.timestamp) / (1000 * 60)
              ) > 1;

            return (
              <Fragment key={index}>
                {(isFirst || !inSequence || hasDelay) && (
                  <div
                    className={`d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`}
                    style={{ fontSize: "0.9rem" }}
                  >
                    {/* <span className="d-block" style={{ fontSize: "1.6rem" }}>
                      {String.fromCodePoint(...mood)}
                    </span> */}
                    <span>{chat.user || "Anonymous"}</span>
                  </div>
                )}

                <ChatMessageHookFinal
                  message={chat.message}
                  position={position}
                />
              </Fragment>
            );
          })}
        </div>
        <div
          className="border-top border-gray w-100 px-4 d-flex align-items-center bg-light"
          style={{ minHeight: 90 }}
        >
          <textarea
            className="form-control px-3 py-2"
            onKeyUp={handleKeyUp}
            placeholder="Enter a chat message"
            style={{ resize: "none" }}
          ></textarea>
        </div>
      </Fragment>
    )
  );
};

export default Chat;
