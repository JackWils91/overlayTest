import React from "react";
import dynamic from "next/dynamic";

// import { Layout, Menu, Breadcrumb } from "antd";
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from "@ant-design/icons";

const Chat1 = dynamic(() => import("../components/Chat1"), {
  ssr: false,
});

// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;

export default function Sample() {
  return (
    <>
      <Chat1 />
    </>
  );
}
