import { SmileFilled } from "@ant-design/icons";

import Link from "next/link";

import useSWR from "swr";

import { useUser } from "../utils/auth/useUser";

import Player from "../components/Player";
// import PlayerCSS from "../components/PlayerCss";

const content = {
  marginTop: "100px",
};

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

export default function Home() {
  const { user, logout } = useUser();
  // const { data, error } = useSWR(
  //   user ? ["/api/getFood", user.token] : null,
  //   fetcher
  // );

  const videoJsOptions = {
    techOrder: ["youtube"],
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "https://www.youtube.com/watch?v=9Auq9mYxFEE",
        type: "video/youtube",
      },
    ],
  };

  //?showinfo=0&enablejsapi=1&&origin=http://localhost:3000

  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{" "}
          <Link href={"/auth"}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    );
  }

  return (
    <>
      <div style={content}>
        <div>
          <div>
            <p>You're signed in. Email: {user.email}</p>
            <p
              style={{
                display: "inlinelock",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => logout()}
            >
              Log out
            </p>
          </div>
          <div>
            <Link href={"/example"}>
              <a>Another example page</a>
            </Link>
          </div>
          {/* {error && <div>Failed to fetch food!</div>}
          {data && <div>Your favorite food is {data.food}.</div>} */}
        </div>
        <div className="text-center mb-5">
          <Link href="#">
            <a className="logo mr-0">
              <SmileFilled size={48} strokeWidth={1} />
            </a>
          </Link>

          <p className="mb-0 mt-3 text-disabled">Welcome to the world Kylee!</p>
        </div>

        {user && <Player {...videoJsOptions} />}
      </div>

      {/* <PlayerCSS /> */}
    </>
  );
}
