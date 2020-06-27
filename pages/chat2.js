import React from "react";
import dynamic from "next/dynamic";

// import { Layout, Menu, Breadcrumb } from "antd";
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from "@ant-design/icons";

// const Chat3 = dynamic(() => import("../components/Chat3"), {
//   ssr: false,
// });

import ChatDesign from "../components/ChatDesign";

// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;

export default function Sample() {
  return (
    <>
      <ChatDesign />
    </>
  );
}
