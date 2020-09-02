import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";
import FirebaseAuth from "../components/FirebaseAuth";

const CollectionCreateForm = ({ visible, onCreate, onCancel, title }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      // title={title}
      // okText="Create"
      // cancelText="Cancel"
      onCancel={onCancel}
      // onOk={() => {
      //   form
      //     .validateFields()
      //     .then((values) => {
      //       form.resetFields();
      //       onCreate(values);
      //     })
      //     .catch((info) => {
      //       console.log("Validate Failed:", info);
      //     });
      // }}
      footer={null}
    >
      <FirebaseAuth />
    </Modal>
  );
};

const LoginButton = (props) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
          console.log("sends to a donate page?");
        }}
        // style={{ marginTop: 24 }}
        size="large"
      >
        {props.title}
      </Button>
      <CollectionCreateForm
        {...props}
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default LoginButton;
