import React, { useState } from "react";
import dynamic from "next/dynamic";
import ChatHookFinal from "../components/ChatHookFinal";
import Player from "../components/Player";
import { Layout, Menu, Breadcrumb, Carousel, Button } from "antd";
import CollectionsPage from "../components/MakeADonation";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

// const Chat1 = dynamic(() => import("../components/Chat1"), {
//   ssr: false,
// });

// const Chat3 = dynamic(() => import("../components/Chat3"), {
//   ssr: false,
// });

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 9000,
  // autoplaySpeed: 9000,
  cssEase: "linear",
};

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
    height: 450,
    // currentWidth: 1002,
    // currentHeight: 751.5,
    // videoWidth: 960,
    // videoHeight: 400,
    // marginBottom: 24,
  };
  const [user, setUser] = useState("Anonymous");
  return (
    <>
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
            <Menu.Item key="3">Login</Menu.Item>
          </Menu>
        </Header>

        <Layout style={{ marginTop: "24px", padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              // padding: 24,
              // marginRight: 12,
              minHeight: 450,
              // borderStyle: "solid",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Video 1920 x 1080px */}
            <Player {...videoJsOptions} />
            {/* <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 70,
                // borderStyle: "solid",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            > */}
            {/* <Button
              onClick={() => {
                console.log("sends to a donate page?");
              }}
              style={{ marginTop: 24 }}
              size="large"
              type="primary"
            >
              Make a donation
            </Button> */}
            <CollectionsPage />
            {/* </Content> */}
          </Content>

          <Sider
            style={{
              padding: "0 24px 24px",
              borderStyle: "solid",
              marginLeft: "12px",
            }}
            width={450}
            className="site-layout-background"
          >
            {/* <Chat3 /> */}
            {/* {user && <ChatHookFinal activeUser={user} />} */}
            <ChatHookFinal activeUser={user} />
          </Sider>
        </Layout>
      </Layout>
      <Layout>
        {/* <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 70,
              borderStyle: "solid",
            }}
          >
            Make a Donation
          </Content>
        </Layout> */}
      </Layout>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              // padding: 24,
              margin: 0,
              minHeight: 150,
              // borderStyle: "solid",
            }}
          >
            <Carousel {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
