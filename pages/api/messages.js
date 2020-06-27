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
  console.log("api/messages", req.body, "method", req.method);
  if (req.method === "POST") {
    console.log("chatHistory-->", chatHistory);
    res.status(200).json({ ...chatHistory });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
