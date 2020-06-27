import React, { useEffect } from "react";
import {
  MessageBox,
  ChatItem,
  ChatList,
  SystemMessage,
  MessageList,
  Input,
  Button,
  Avatar,
  Navbar,
  SideBar,
  Dropdown,
  Popup,
} from "react-chat-elements";

const Chat3 = () => {
  // useEffect(() => {
  //   addResponseMessage("Welcome to this awesome chat!");
  // }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // // Now send the message throught the backend API
    // // addResponseMessage(response);
    // addResponseMessage("No probs - on it like a car bonnet");
  };
  return (
    <>
      <MessageList
        className="message-list"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={[
          {
            position: "right",
            type: "text",
            text: "Text 1",
            date: new Date(),
          },
          {
            position: "right",
            type: "text",
            text: "Text2",
            date: new Date(),
          },
          {
            position: "left",
            type: "text",
            text: "Text 3",
            date: new Date(),
          },
          {
            position: "right",
            type: "text",
            text: "Text4",
            date: new Date(),
          },
          {
            position: "left",
            type: "text",
            text:
              "Text 5 whcih is super much longer and will hopefully spread over 2 lines",
            date: new Date(),
          },
        ]}
      />
      <Input
        placeholder="Type here..."
        multiline={true}
        rightButtons={
          <Button
            color="white"
            backgroundColor="black"
            text="Send"
            onClick={() => {
              handleNewUserMessage();
            }}
          />
        }
      />
      {/* <SideBar
        top={<div>'TOP' area</div>}
        center={<div>'CENTER' area</div>}
        bottom={<div>'BOTTOM' area</div>}
      /> */}
      {/* <Navbar
        left={<div>'LEFT' area</div>}
        center={<div>'CENTER' area</div>}
        right={<div>'RIGHT' area</div>}
      /> */}
      {/* I like the idea of having a nav element whcih can say whether the comment is left or right */}
    </>
  );
};

export default Chat3;
