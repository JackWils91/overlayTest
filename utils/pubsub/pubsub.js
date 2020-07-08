const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  secret: process.env.NEXT_PUBLIC_PUSHER_APP_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
  // encrypted: true,
});

const CHANNELS = {
  TEST: "TEST",
  BLOCKCHAIN: "BLOCKCHAIN",
};

class PubSub {
  constructor({ blockchain }) {
    this.blockchain = blockchain;
  }

  handleMessage(channel, message) {
    console.log(`Message received. Channel: ${channel}. Message: ${message}`);

    const parsedMessage = JSON.parse(message);

    if (channel === CHANNELS.BLOCKCHAIN) {
      this.blockchain.replaceChain(parsedMessage);
    }
  }

  // subscribeToChannels() {
  //   Object.values(CHANNELS).forEach((channel) => {
  //     this.subscriber.subscribe(channel);
  //   });
  // }

  // publish({ channel, message }) {
  //   this.subscriber.unsubscribe(channel, () => {
  //     this.publisher.publish(channel, message, () => {
  //       this.subscriber.subscribe(channel);
  //     });
  //   });
  // }

  broadcastChain() {
    pusher.trigger(CHANNELS.BLOCKCHAIN, "new-message", {
      message: JSON.stringify(this.blockchain.chain),
    });
  }
}

module.exports = PubSub;

/**
 * NOTE ON KILLING A REDIS DAEMON SERVICE (running in background)
 * ubuntu@ip-MyIPAddress:~/Relayer$ ps -ef | grep redis-server
ubuntu    2381     1  0 18:39 ?        00:00:00 redis-server *:6379
ubuntu    2386  1358  0 18:39 pts/0    00:00:00 grep --color=auto redis-server
ubuntu@ip-MyIPAddress:~/Relayer$ sudo service redis-server stop
ubuntu@ip-MyIPAddress:~/Relayer$ ps -ef | grep redis-server
ubuntu    2381     1  0 18:39 ?        00:00:00 redis-server *:6379
ubuntu    2418  1358  0 18:39 pts/0    00:00:00 grep --color=auto redis-server
ubuntu@ip-MyIPAddress:~/Relayer$ kill 2381
ubuntu@ip-MyIPAddress:~/Relayer$ ps -ef | grep redis-server
ubuntu    2420  1358  0 18:39 pts/0    00:00:00 grep --color=auto redis-server
 */
