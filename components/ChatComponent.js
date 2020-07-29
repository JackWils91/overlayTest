import React, {
  useEffect,
  useState,
  Fragment,
  useRef,
  useLayoutEffect,
} from "react";
import { Card, Input, Row, Col, Form } from "antd";
const { TextArea } = Input;
import ChatBox from "./ChatBox";
import { fetchPostJSON } from "../utils/routing";
import { Picker } from "emoji-mart";
const messageRoute =
  process.env.NODE_ENV === "production"
    ? "https://charity-chachacha.herokuapp.com/message"
    : "/api/pusher/message";
const messagesRoute =
  process.env.NODE_ENV === "production"
    ? "https://charity-chachacha.herokuapp.com/messages"
    : "/api/pusher/messages";

const ChatComponent = ({ user }) => {
  const [text, setText] = useState("");
  const [emojiPicker, setEmojiPicker] = useState();
  const [showEmojis, setShowEmojis] = useState(false);

  const node = useRef();

  const handleKeyUp = (evt) => {
    // const value = evt.target.value;

    console.log("value submitted-->", text);

    if (evt.keyCode === 13 && !evt.shiftKey) {
      // const { activeUser: user } = props;
      const chat = { user, message: text, timestamp: +new Date() };

      // evt.target.value = "";

      //   axios.post("/message", chat);
      fetchPostJSON(messageRoute, chat);

      setText("");

      // const heightElement = document.getElementsByClassName(
      //   "ant-layout-sider"
      // )[0].offsetHeight;

      // setHeight(heightElement * 0.7);
    }
  };

  const addEmoji = (e) => {
    let emoji = e.native;
    console.log("emoji-->", emoji);
    setText((prevText) => prevText + emoji);
    // this.setState({
    //   text: this.state.text + emoji,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const chat = { user, message: text, timestamp: +new Date() };
    fetchPostJSON(messageRoute, chat);
    this.setState({ text: "" }); //reset input field to empty
  };

  const styles = {
    container: {
      padding: 20,
      borderTop: "1px #4C758F solid",
      marginBottom: 20,
    },
    form: {
      display: "flex",
    },
    input: {
      color: "inherit",
      background: "none",
      outline: "none",
      border: "none",
      flex: 1,
      fontSize: 16,
    },
    getEmojiButton: {
      cssFloat: "right",
      border: "none",
      margin: 0,
      cursor: "pointer",
    },
    emojiPicker: {
      position: "absolute",
      bottom: 10,
      right: 0,
      cssFloat: "right",
      marginLeft: "200px",
    },
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowEmojis(false);
  };

  return (
    user && (
      <>
        <ChatBox
          // dimensions={size}
          // height={height}
          activeUser={user} /*user={user}*/
        />

        <div style={{ padding: "20px" }}>
          {/* <Form onFinish={handleSubmit}> */}
          <Input
            placeholder="Send a message"
            allowClear
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={handleKeyUp}
            // onChange={onChange}
            // handleSubmit={}
            suffix={
              <p
                style={styles.getEmojiButton}
                onClick={() => setShowEmojis(true)}
              >
                {String.fromCodePoint(0x1f60a)}
              </p>
            }
          />
          <div ref={node}>
            {
              showEmojis && (
                <span
                  style={styles.emojiPicker}
                  ref={(el) => setEmojiPicker(el)}
                >
                  <Picker emojiTooltip={true} title="" onSelect={addEmoji} />
                </span>
              )
              // <p
              //   style={styles.getEmojiButton}
              //   onClick={() => setShowEmojis(true)}
              // >
              //   {String.fromCodePoint(0x1f60a)}
              // </p>
            }
          </div>
          {/* </Form> */}
        </div>
      </>
    )
  );
};

export default ChatComponent;
