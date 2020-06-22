import React, { useState, useEffect, useRef } from "react";

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
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    // Your custom logic here
    openNotification(count);
    setCount(count + 1);
    if (count === data.length - 1) {
      setCount(0);
    }
  }, 3000);

  const [api, contextHolder] = notification.useNotification();

  const [count, setCount] = useState(0);

  const openNotification = (count) => {
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
    // if (count === data.length - 1) {
    //   setCount(0);
    // } else {
    //   setCount((prevCount) => prevCount + 1);
    // }

    // });
  };

  return (
    <div style={content}>
      <Context.Provider value={{ name: "Ant Design" }}>
        {contextHolder}
        <Divider />
        <Space>
          {/* <Button type="primary" onClick={() => openNotification()}>
            {/* <RadiusBottomrightOutlined /> 
            Update Overlay
          </Button> */}
          <h1>{count}</h1>
          {/* {() => openNotification(count)} */}
        </Space>
      </Context.Provider>
    </div>
  );
}
