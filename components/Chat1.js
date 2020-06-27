import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

const Chat1 = () => {
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    // addResponseMessage(response);
    addResponseMessage("No probs - on it like a car bonnet");
  };
  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Event Chat"
        subtitle="Keep up the hype"
        // fullScreenMode={true}
      />
    </div>
  );
};

export default Chat1;
