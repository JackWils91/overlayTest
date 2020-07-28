import React, {
  useEffect,
  useState,
  Fragment,
  useRef,
  useLayoutEffect,
} from "react";
import { Card, Input, Row, Col } from "antd";
const { TextArea } = Input;

import Pusher from "pusher-js";
import { fetchPostJSON } from "../utils/routing";
import ChatMessageHookFinal from "./ChatMessageHookFinal";

const messageRoute =
  process.env.NODE_ENV === "production"
    ? "https://charity-chachacha.herokuapp.com/message"
    : "/api/pusher/message";
const messagesRoute =
  process.env.NODE_ENV === "production"
    ? "https://charity-chachacha.herokuapp.com/messages"
    : "/api/pusher/messages";

const ChatBox = (props) => {
  const [pusher, setPusher] = useState();
  const [channel, setChannel] = useState();
  const [chats, setChats] = useState([]);

  console.log("heught props", props);

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
      fetchPostJSON(messagesRoute, {}).then((response) => {
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

    console.log("valur submitted-->", value);

    if (evt.keyCode === 13 && !evt.shiftKey) {
      const { activeUser: user } = props;
      const chat = { user, message: value, timestamp: +new Date() };

      evt.target.value = "";
      //   axios.post("/message", chat);
      fetchPostJSON(messageRoute, chat);

      const heightElement = document.getElementsByClassName(
        "ant-layout-sider"
      )[0].offsetHeight;

      setHeight(heightElement * 0.7);
    }
  };

  console.log("channel-->", channel);

  const onChange = (e) => {
    console.log("test box", e.target.value);
  };

  const stylingMessage = {
    left: {
      type: "inner",
      size: "small",
      bordered: false,
      // title: <a href="#">{`${user} 1`}</a>,
      // extra: "",
      headStyle: { background: "#ffffff", borderBottom: 0 },
      bodyStyle: {
        // display: "inline-block",
        // background: "#f0f2f5",
        // maxWidth: "70%",
        // textAlign: "left",
        // float: "left",
      },
      position: "start",
    },
    right: {
      type: "inner",
      size: "small",
      bordered: false,
      // title: "",
      // extra: <a href="#">{`${user} 1`}</a>,
      headStyle: { background: "#ffffff", borderBottom: 0 },
      bodyStyle: {
        // display: "inline-block",
        // background: "#f0f2f5",
        // maxWidth: "70%",
        textAlign: "right",
        paddingRight: 0,
        marginRight: 12,
        // float: "right",
      },
      position: "end",
    },
  };
  console.log("chats-->", chats);

  console.log("size-->", props);

  const [height, setHeight] = useState();

  const scrollToBottom = useRef();
  useEffect(() => {
    const heightElement = document.getElementsByClassName("ant-layout-sider")[0]
      .offsetHeight;

    setHeight(heightElement);
  }, []);

  // scrollToBottom.current &&
  //   scrollToBottom.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "end",
  //     inline: "nearest",
  //   });

  console.log("the height-->", height);
  console.log("scroll to bottom-->", scrollToBottom);

  // const [renderCount, setRenderCount] = useState();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    scrollToBottom.current &&
      scrollToBottom.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  }, [chats]);

  return (
    props.activeUser && (
      <>
        <Card
          title={props.activeUser}
          style={{
            // boxSizing: "border-box",
            height: "82%",
            // display: "flex",
            // maxHeight: height,
            // position: "fixed",
          }}
          bodyStyle={{
            // maxHeight: height, <-- from window port
            maxHeight: 350,
            overflow: "auto",
            padding: 0,
          }}
        >
          <div ref={scrollToBottom}>
            {chats.map((chat, index) => {
              const previous = Math.max(0, index - 1);
              const previousChat = chats[previous];
              const position =
                chat.user === props.activeUser ? "right" : "left";

              const isFirst = previous === index;
              const inSequence = chat.user === previousChat.user;
              const hasDelay =
                Math.ceil(
                  (chat.timestamp - previousChat.timestamp) / (1000 * 60)
                ) > 1;
              console.log("each chat-->", chat);
              console.log(
                `logic-->isFirst ${isFirst} inSequence ${!inSequence} hasDelay ${hasDelay}`
              );

              // const heightElement = document.getElementsByClassName(
              //   "ant-layout-sider"
              // )[0].offsetHeight;

              // setHeight(heightElement * 0.7);

              return (
                <Fragment key={index}>
                  {/* {(isFirst || !inSequence || hasDelay) && ( */}
                  {/* <div ref={scrollToBottom}> */}
                  <div className="site-card-wrapper">
                    <Row justify={stylingMessage[position].position}>
                      <Col span={12}>
                        <Card
                          type={stylingMessage[position].type}
                          size={stylingMessage[position].size}
                          bordered={stylingMessage[position].bordered}
                          title={
                            position === "left" ? (
                              <a href="#">{chat.user}</a>
                            ) : (
                              ""
                            )
                          }
                          extra={
                            position === "right" ? (
                              <a href="#">{chat.user}</a>
                            ) : (
                              ""
                            )
                          }
                          headStyle={stylingMessage[position].headStyle}
                          bodyStyle={stylingMessage[position].bodyStyle}
                        >
                          <span style={{ background: "#f0f2f5", padding: 7 }}>
                            {chat.message}
                          </span>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </Card>
      </>
    )
  );
};

export default ChatBox;
