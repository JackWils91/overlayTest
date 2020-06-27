// store global variable here and clean up after by putting array back to zero
// do this when on unsubscribe or channel ends send back here as a third parameter and clear

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  secret: process.env.NEXT_PUBLIC_PUSHER_APP_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
  encrypted: true,
});

// console.log("works server side?", process.env.NEXT_PUBLIC_PUSHER_APP_ID);

const chatHistory = { messages: [] };

export default (req, res) => {
  const {
    query: { type },
  } = req;
  console.log("global chatHistory Variable-->", chatHistory);
  if (type === "message") {
    // do stuff
    console.log("api/pusher/message", req.body, "method", req.method);
    if (req.method === "POST") {
      try {
        const { user = null, message = "", timestamp = +new Date() } = req.body;
        const chat = { user, message, timestamp };
        chatHistory.messages.push(chat);
        pusher.trigger("chat-room", "new-message", { chat });
        console.log("message-->", { chat });
        res.status(200).json({ res: "message triggered on channel" });
      } catch (e) {
        console.log("the error in message", e);
      }
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  }

  if (type === "messages") {
    //do stuff
    console.log("api/pusher/messages", req.body, "method", req.method);
    if (req.method === "POST") {
      console.log("chatHistory-->", chatHistory);
      res.status(200).json({ ...chatHistory });
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  }

  if (type === "end-chat") {
    //clear array
    console.log("api/pusher/end-chat", req.body, "method", req.method);
    // { "name": "channel_vacated", "channel": "my-channel" } webhhok
    const { name, channel } = req.body;
    console.log("name", name, "channel_vacated", channel);
    if (name === channel_vacated) {
      chatHistory.messages = [];
      console.log(
        "global chat history variable should be cleared",
        chatHistory
      );
      res.status(200).json({ res: "Chat global variable cleared" });
    }
  } else {
    res.status(405).end("What you doing mate??");
  }
};
