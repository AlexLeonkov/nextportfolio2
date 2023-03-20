import { Button, Form, Input, InputNumber, message } from "antd";
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [issue, setIssue] = useState("");

  const onFinish = async () => {
    console.log(name, issue);
    axios({
      method: "POST",
      url: "https://formbold.com/s/oyra6",
      data: { name: name, contact: contact, issue: issue },
    })
      .then((r) => {
        message.success("The message has been sent");
        setContact("");
        setIssue("");
        setName("");
      })
      .catch((r) => {
        message.error("Please try again later");
      });
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleIssue = (e) => {
    setIssue(e.target.value);
  };

  return (
    <Form name="nest-messages" onFinish={onFinish}>
      <Form.Item>
        <Input
          onChange={handleName}
          placeholder="How can I call you?"
          value={name}
        />
      </Form.Item>
      <Form.Item>
        <Input
          onChange={handleContact}
          placeholder="Enter your contact information"
          value={contact}
        />
      </Form.Item>

      <Form.Item>
        <Input.TextArea
          onChange={handleIssue}
          placeholder="How can I help"
          value={issue}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
