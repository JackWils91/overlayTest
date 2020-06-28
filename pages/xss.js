import Link from "next/link";
import { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { PageHeader, Menu, Dropdown, Tag, Typography, Row } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;
// import image from "../public/profilePic.jpg";

const image = "/xss.jpg";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Xss = (props) => {
  const [comments, setComments] = useState([
    <script src="/api/xss/test"></script>,
    "This sucks",
    "can;t belive you let this happen",
    "wow",
    "<script>alert(document.cookie)</script>",
    `<script type="text/javascript">
    fetch("http://localhost:3000/api/xss/test")
    </script>`,
  ]);
  const onFinish = (values) => {
    console.log("Success:", values);
    setComments((prevComments) => [...prevComments, values.username]);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  const DropdownMenu = () => {
    return (
      <Dropdown key="more" overlay={menu}>
        <Button
          style={{
            border: "none",
            padding: 0,
          }}
        >
          <EllipsisOutlined
            style={{
              fontSize: 20,
              verticalAlign: "top",
            }}
          />
        </Button>
      </Dropdown>
    );
  };

  const routes = [
    {
      path: "index",
      breadcrumbName: "First-level Menu",
    },
    {
      path: "first",
      breadcrumbName: "Second-level Menu",
    },
    {
      path: "second",
      breadcrumbName: "Third-level Menu",
    },
  ];

  const IconLink = ({ src, text }) => (
    <a className="example-link">
      <img className="example-link-icon" src={src} alt={text} />
      {text}
    </a>
  );

  const content = (
    <>
      <Paragraph>
        Ant Design interprets the color system into two levels: a system-level
        color system and a product-level color system.
      </Paragraph>
      <Paragraph>
        Ant Design&#x27;s design team preferred to design with the HSB color
        model, which makes it easier for designers to have a clear psychological
        expectation of color when adjusting colors, as well as facilitate
        communication in teams.
      </Paragraph>
      <div>
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          text="Quick Start"
        />
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          text=" Product Info"
        />
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
          text="Product Doc"
        />
      </div>
    </>
  );

  const Content = ({ children, extraContent }) => {
    return (
      <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
      </Row>
    );
  };

  //   {
  //     <img src={image} />;
  //   }
  return (
    // <div>
    <>
      {/* <script src="/api/xss/test"></script> */}
      {/* <script>{alert("ALert")}</script> */}
      <img source={image} />
      <p>
        This page is static because it does not fetch any data or include the
        authed user info.
      </p>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <PageHeader
        title="Title"
        className="site-page-header"
        subTitle="This is a subtitle"
        tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
          <DropdownMenu key="more" />,
        ]}
        // avatar={{
        //   src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        // }}
        avatar={{
          src: image,
        }}
        breadcrumb={{ routes }}
      >
        <Content
          extraContent={
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
              alt="content"
              width="100%"
            />
          }
        >
          {content}
        </Content>
      </PageHeader>

      {typeof window !== "undefined" &&
        comments.map((comment, index) => {
          comment;
        })}
      {/* </div> */}

      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item> */}

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Xss;
