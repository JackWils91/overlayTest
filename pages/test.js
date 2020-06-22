import React, { useState, useEffect } from "react";

const content = {
  marginTop: "100px",
};

import { Button, notification, Divider, Space } from "antd";
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from "@ant-design/icons";

const data = [
  { name: "Kylee Kiesow", amount: "10,000" },
  { name: "Kurt Kiesow", amount: "100,000" },
  { name: "DeeDee Kiesow", amount: "1" },
  { name: "Kip Kiesow", amount: "A broken computer" },
  { name: "Jack Wilson", amount: "Everything" },
  { name: "Dave Wilson", amount: "10,000,000" },
  { name: "Cath Wilson", amount: "10,000,000" },
];

const Context = React.createContext({ name: "Default" });

export default function Test() {
  const [api, contextHolder] = notification.useNotification();

  const [count, setCount] = useState(0);

  const openNotification = () => {
    // api.info({
    notification.open({
      message: `Thank you ${data[count].name}`,
      description:
        // <Context.Consumer>{({ name }) => `For you generous donation of ${name}!`}</Context.Consumer>
        `For your generous donation of $ ${data[count].amount}!`,
      //   placement,
      //   name,
      //   amount,
    });
    if (count === data.length - 1) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount + 1);
    }

    // });
  };

  return (
    <div style={content}>
      <Context.Provider value={{ name: "Ant Design" }}>
        {contextHolder}
        <Divider />
        <Space>
          <Button type="primary" onClick={() => openNotification()}>
            {/* <RadiusBottomrightOutlined /> */}
            Update Overlay
          </Button>
        </Space>
      </Context.Provider>
    </div>
  );
}
