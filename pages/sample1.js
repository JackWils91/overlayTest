import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ChatHookFinal from "../components/ChatHookFinal";
import Player from "../components/Player";
import { Layout, Menu, Breadcrumb, Carousel, Button } from "antd";
import CollectionsPage from "../components/MakeADonation";
import {
  // UserOutlined,
  // LaptopOutlined,
  // NotificationOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import CarouselScrolling from "../components/CarouselScrolling";

// const Chat1 = dynamic(() => import("../components/Chat1"), {
//   ssr: false,
// });

// const Chat3 = dynamic(() => import("../components/Chat3"), {
//   ssr: false,
// });

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 9000,
//   // autoplaySpeed: 9000,
//   cssEase: "linear",

//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />,
//   rtl: true,
// };

export default function Sample() {
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
  const [user, setUser] = useState("Anonymous");

  // useEffect(() => {
  //   // Update the document title using the browser API

  //   setSettings({
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 9000,
  //     // autoplaySpeed: 9000,
  //     cssEase: "linear",

  //     nextArrow: <SampleNextArrow  />,
  //     prevArrow: <SamplePrevArrow />,
  //     rtl: true,
  //   });
  // }, []);

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
            <CollectionsPage title={"Login"} />
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
          <ChatHookFinal activeUser={user} />
        </Sider>
      </Layout>
      <Footer style={{ margin: "24 24" }}>
        <CarouselScrolling />
      </Footer>
    </Layout>
  );
}
