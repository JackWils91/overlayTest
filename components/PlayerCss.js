import "videojs-youtube";

const PlayerCSS = () => {
  return (
    <>
      <h1>
        {" "}
        Live streaming the Auction event through youtube on the website eg with
        Sky news live (not using react)
      </h1>
      <div data-vjs-player>
        <video
          id="my-video"
          className="video-js vjs-theme-city"
          playsInline
          controls
          preload="auto"
          autoPlay={true}
          data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=9Auq9mYxFEE"}] }'
        ></video>
      </div>
    </>
  );
};

export default PlayerCSS;
