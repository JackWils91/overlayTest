import React from "react";
import dynamic from "next/dynamic";

// import { Layout, Menu, Breadcrumb } from "antd";
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from "@ant-design/icons";

const Chat3 = dynamic(() => import("../components/Chat3"), {
  ssr: false,
});

// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;

export default function Sample() {
  return (
    <>
      <Chat3 />
    </>
  );
}
