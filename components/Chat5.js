import React, { Component, Fragment } from "react";
// import axios from "axios";
import Pusher from "pusher-js";
import { fetchPostJSON } from "../utils/routing";
import ChatMessage from "./ChatMessage";

class Chat5 extends Component {
  state = { chats: [] };

  componentDidMount() {
    this.pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
      encrypted: true,
    });

    this.channel = this.pusher.subscribe("chat-room");

    this.channel.bind("new-message", ({ chat = null }) => {
      const { chats } = this.state;
      console.log("chats-->", chats);
      console.log("new-message chat-->", chat);
      if (chats.length < chat.store.length) {
        const chatStore = chat.store;
        this.setState({ chats: chatStore });
      } else {
        chat && chats.push(chat);
        this.setState({ chats });
      }
      // if(index <== chats.array.store.length -1)

      // console.log(
      //   `at index 0, chats[0].store.length -1 == ${
      //     chats[0] && chats[0].store && chats[0].store.length - 1
      //   }`
      // );
      // console.log(
      //   `at index 1, chats[1].store.length -1 == ${
      //     chats[1] && chats[1].store && chats[1].store.length - 1
      //   }`
      // );
      // console.log(
      //   `at index 2, chats[2].store.length -1 == ${
      //     chats[2] && chats[2].store && chats[2].store.length - 1
      //   }`
      // );
      // if (chats.length !== 0) {
      //   let i = 0;
      //   let condition = true;
      //   do {
      //     if (i <= chats[i].store.length - 1) {
      //       //
      //       const chatStore = chats.store;
      //       this.setState({ chatStore });
      //       condition = false;
      //       return;
      //     }
      //     if (i === chats.length - 1) {
      //       condition = false;
      //       return;
      //     }
      //     i += 1;
      //     console.log(i);
      //   } while (condition);
      // }

      // if (chat.store.length === chats.length) {
      //   console.log("hit when other user chat is longer", chat);
      //   const chatStore = chat.store;
      //   this.setState({ chatStore });
      // }
    });

    // this.pusher.connection.bind("state_change", (state) => {
    //   console.log("querying the state-->", state);
    // });

    this.pusher.connection.bind("connected", () => {
      console.log(
        "connected to events commented out messages api and going to connect through if statement on store so that if array < store, take store"
      );
      // fetchPostJSON("/api/pusher/messages", {}).then((response) => {
      //   console.log("the response-->", response);
      //   const chats = response.messages;
      //   console.log("chats-->", chats);
      //   // const chats = { messages: [] };
      //   this.setState({ chats });
      // });
    });
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  handleKeyUp = (evt) => {
    const value = evt.target.value;

    if (evt.keyCode === 13 && !evt.shiftKey) {
      const { activeUser: user } = this.props;
      // console.log("event keycode 13->", this.state.chats);
      const timestamp = +new Date();
      const chat = {
        user,
        message: value,
        timestamp,
        store: [...this.state.chats, { user, message: value, timestamp }],
      };

      evt.target.value = "";
      //   axios.post("/message", chat);
      fetchPostJSON("/api/pusher/message", chat);
    }
  };

  render() {
    console.log("this.channel-->", this.channel);
    return (
      this.props.activeUser && (
        <Fragment>
          <div
            className="border-bottom border-gray w-100 d-flex align-items-center bg-white"
            style={{ height: 90 }}
          >
            <h2 className="text-dark mb-0 mx-4 px-2">
              {this.props.activeUser}
            </h2>
          </div>
          <div
            className="px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative"
            style={{ height: "calc(100% - 180px)", overflowY: "scroll" }}
          >
            {this.state.chats.map((chat, index) => {
              console.log(`Chats in the render function-->${index}`, chat);
              const previous = Math.max(0, index - 1);
              const previousChat = this.state.chats[previous];
              const position =
                chat.user === this.props.activeUser ? "right" : "left";

              const isFirst = previous === index;
              const inSequence = chat.user === previousChat.user;
              const hasDelay =
                Math.ceil(
                  (chat.timestamp - previousChat.timestamp) / (1000 * 60)
                ) > 1;

              //   const mood =
              //     chat.sentiment > 0
              //       ? HAPPY_EMOJI
              //       : chat.sentiment === 0
              //       ? NEUTRAL_EMOJI
              //       : SAD_EMOJI;

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

                  <ChatMessage message={chat.message} position={position} />
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
              onKeyUp={this.handleKeyUp}
              placeholder="Enter a chat message"
              style={{ resize: "none" }}
            ></textarea>
          </div>
        </Fragment>
      )
    );
  }
}

export default Chat5;
