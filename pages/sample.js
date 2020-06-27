import React from "react";
import dynamic from "next/dynamic";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const Chat1 = dynamic(() => import("../components/Chat1"), {
  ssr: false,
});

const Chat3 = dynamic(() => import("../components/Chat3"), {
  ssr: false,
});

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function Sample() {
  const randomVariable = 1;

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
              padding: 24,
              marginRight: 12,
              minHeight: 450,
              borderStyle: "solid",
            }}
          >
            Video
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
            <Chat3 />
          </Sider>
        </Layout>
      </Layout>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
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
        </Layout>
      </Layout>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 150,
              borderStyle: "solid",
            }}
          >
            Carousel
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
