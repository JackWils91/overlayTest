import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";

const ItemDonationCreateForm = ({ visible, onCreate, onCancel, title }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title={title}
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name on your card",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="card"
          label="Card"
          rules={[
            {
              required: true,
              message: "Please input your card number",
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ItemDonationCreateForm;
