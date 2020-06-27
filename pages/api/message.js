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

export default async (req, res) => {
  console.log("api/message", req.body, "method", req.method);
  if (req.method === "POST") {
    const { user = null, message = "", timestamp = +new Date() } = req.body;
    const chat = { user, message, timestamp };
    chatHistory.messages.push(chat);
    pusher.trigger("chat-room", "new-message", { chat });
    console.log("message-->", { chat });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
