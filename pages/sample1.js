import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import ChatHookFinal from "../components/ChatHookFinal";
import Player from "../components/Player";
import {
  Layout,
  Menu,
  Breadcrumb,
  Carousel,
  Button,
  Card,
  Row,
  Col,
  Input,
} from "antd";
const { TextArea } = Input;
import CollectionsPage from "../components/MakeADonation";
import LoginButton from "../components/LoginButton";

import { Picker } from "emoji-mart";

import {
  // UserOutlined,
  // LaptopOutlined,
  // NotificationOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import CarouselScrolling from "../components/CarouselScrolling";
import ChatBox from "../components/ChatBox";
import ChatComponent from "../components/ChatComponent";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

// function useDimensions(targetRef) {
//   const getDimensions = () => {
//     return {
//       width: targetRef.current ? targetRef.current.offsetWidth : 0,
//       height: targetRef.current ? targetRef.current.offsetHeight : 0,
//     };
//   };

//   const [dimensions, setDimensions] = useState(getDimensions);

//   const handleResize = () => {
//     setDimensions(getDimensions());
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useLayoutEffect(() => {
//     handleResize();
//   }, []);
//   return dimensions;
// }

export async function getServerSideProps() {
  return {
    props: {
      user: "Guest" + " " + Math.floor(Math.random() * Math.floor(100)),
    },
  };
}

export default function Sample({ user }) {
  const [emoji, setEmoji] = useState();

  console.log("sample rendering?");

  const randomVariable = 1;
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
    // width: 1920,

    // currentWidth: 1002,
    // currentHeight: 751.5,
    // videoWidth: 960,
    // videoHeight: 400,
    // marginBottom: 24,

    height: 450,
    // align: "right",

    // width: "50%",
    // position: "relative",
    // top: "0%",
    // right: "0%",
  };

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          style={{ float: "right" }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          {/* <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item> */}
          <Menu.Item key="3">
            <LoginButton title={"Login"} />
          </Menu.Item>
        </Menu>
      </Header>
      <Layout
        style={{
          marginTop: "24px",
          padding: "0 24px 24px",
        }}
      >
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Player {...videoJsOptions} />
          <br />

          <CollectionsPage title={"Make a Donation"} />
        </Content>

        <Sider width={450} className="site-layout-background">
          {/* <div ref={targetRef}> */}

          <ChatComponent user={user} />
        </Sider>
      </Layout>
      <Footer style={{ margin: "24 24" }}>
        <CarouselScrolling />
      </Footer>
    </Layout>
  );
}

// {user && (
//   <>
//     <ChatBox
//       // dimensions={size}
//       // height={height}
//       activeUser={user} /*user={user}*/
//     />

//     <div style={{ padding: "20px" }}>
//       <TextArea
//         placeholder="Say hello..."
//         allowClear
//         onKeyUp={handleKeyUp}
//         // onChange={onChange}
//       />
//     </div>
//   </>
// )}
