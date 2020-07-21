import React, { useState, useEffect } from "react";
// import axios from "axios";
import Pusher from "pusher-js";
import { fetchPostJSON } from "../utils/routing";
import ChatMessageHook from "./ChatMessageHook";
// import useSWR from 'swr'

const ChatHook = ({ activeUser }) => {
  const [chats, setChats] = useState([]);
  const [pusher, setPusher] = useState();
  const [channel, setChannel] = useState();

  // const { data, error } = useSWR('/api/user', fetch)

  // const domain = '/api';
  // const poster = (route, body) =>
  //   // timeout(
  //   fetch(domain + route, {
  //     credentials: 'include',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Origin: accessControlAllowOrigin
  //     },
  //     body: JSON.stringify(body)
  //   });

  const handleKeyUp = (evt) => {
    const value = evt.target.value;

    if (evt.keyCode === 13 && !evt.shiftKey) {
      // const { activeUser: user } = this.props;
      // console.log("event keycode 13->", this.state.chats);
      const timestamp = +new Date();
      const chat = {
        user: activeUser,
        message: value,
        timestamp,
        store: [...chats, { user: activeUser, message: value, timestamp }],
      };

      evt.target.value = "";
      //   axios.post("/message", chat);
      fetchPostJSON("https://charity-chachacha.herokuapp.com/message", chat);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
      encrypted: true,
    });

    const channel = pusher.subscribe("chat-room");

    channel.bind("new-message", ({ chat = null }) => {
      // chat && chats.push(chat);
      chat && setChats((chats) => [...chats, chat]);
    });

    setChannel(channel);

    pusher.connection.bind("connected", () => {
      fetchPostJSON("https://charity-chachacha.herokuapp.com/message", {}).then(
        (response) => {
          console.log("the response-->", response);
          const chats = response.messages;
          console.log("chats-->", chats);
          // const chats = { messages: [] };
          setChats(chats);
        }
      );
      console.log(
        "connected to events commented out messages api and going to connect through if statement on store so that if array < store, take store"
      );
    });

    setPusher(pusher); //could just pass this straight through useState

    return () => pusher.disconnect();
  }, []);

  return (
    activeUser && (
      <>
        <div
          className="border-bottom border-gray w-100 d-flex align-items-center bg-white"
          style={{ height: 90 }}
        >
          <h2 className="text-dark mb-0 mx-4 px-2">{activeUser}</h2>
        </div>
        <div
          className="px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative"
          style={{ height: "calc(100% - 180px)", overflowY: "scroll" }}
        >
          {chats.map((chat, index) => {
            console.log(`Chats in the render function-->${index}`, chat);
            const previous = Math.max(0, index - 1);
            const previousChat = chats[previous];
            const position = chat.user === activeUser ? "right" : "left";

            const isFirst = previous === index;
            const inSequence = chat.user === previousChat.user;
            const hasDelay =
              Math.ceil(
                (chat.timestamp - previousChat.timestamp) / (1000 * 60)
              ) > 1;

            return (
              // <Fragment key={index}>
              <>
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

                <ChatMessageHook message={chat.message} position={position} />
              </>
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
      </>
    )
  );
};

export default ChatHook;
