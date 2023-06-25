import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import styles from "./Booking.module.css";
import { Button, DatePicker, Form, Input, message, Select } from "antd";
import Header from "../../components/Header";
import { handleClientScriptLoad } from "next/script";
import clsx from "clsx";

const { TextArea } = Input;

const BookingScreen = () => {
  const [deadLineDate, setDeadlineDate] = useState("");
  const [photoType, setPhotoType] = useState("test");
  const [other, setOther] = useState("");

  const onFinish = async () => {
    axios({
      method: "POST",
      url: "https://formbold.com/s/oyra6",
      data: inputs,
    })
      .then((r) => {
        message.success("The message has been sent");
        setInputs({
          name: "",
          email: "",
          brandInfo: "",
          website: "",
          photoType: "",
          deadline: "",
          quantity: "",
          ideas: "",
          usage: "",
          budget: "",
          otherInfo: "",
        });
      })
      .catch((r) => {
        message.error("Please try again later");
      });
  };

  const handleDate = (date, dateString) => {
    setInputs((prev) => ({
      ...prev,
      deadline: `our date is ${dateString}`,
    }));
  };

  const handleBudget = (value) => {
    setInputs((prev) => ({
      ...prev,
      budget: value,
    }));
  };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    brandInfo: "",
    website: "",
    photoType: "",
    deadline: "",
    quantity: "",
    ideas: "",
    usage: "",
    budget: "",
    otherInfo: "",
  });

  const handleOnChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div className={styles.booking}>
      {/* <h2 className={styles.h2}>HOW TO BOOK A SHOOTING?</h2> */}
      <h3 className={styles.h3}>
        For booking requirements please fill out the form below. We will get
        back to you within 48 hours with a response.
      </h3>
      <Form onFinish={onFinish} className={styles.wrapper}>
        <div className={styles.one}>
          <p className={styles.p}>
            <strong>First Name</strong> <i>(required)</i>
          </p>

          <Input
            style={{
              borderRadius: "0",
            }}
            onChange={handleOnChange}
            value={inputs.name}
            id="name"
          />
        </div>
        <div className={styles.two}>
          <p className={styles.p}>
            <strong>Last Name</strong>
          </p>
          <Input
            style={{
              borderRadius: "0",
            }}
            onChange={handleOnChange}
            value={inputs.email}
            id="email"
          />
        </div>
        <div className={styles.three}>
          <p className={styles.p}>
            <strong>Email</strong> <i>(required)</i>
          </p>
          <Input
            style={{
              borderRadius: "0",
            }}
            onChange={handleOnChange}
            value={inputs.brandInfo}
            id="brandInfo"
          />
        </div>
        <div className={styles.four}>
          <p className={styles.p}>
            <strong>Company / Website</strong> <i>(required)</i>
          </p>
          <Input
            style={{
              borderRadius: "0",
            }}
            onChange={handleOnChange}
            value={inputs.website}
            id="website"
          />
        </div>
        <div className={styles.five}>
          <p className={styles.p}>
            <strong>Message</strong> <i>(required)</i>
          </p>

          <TextArea
            rows={4}
            style={{
              borderRadius: "0",
              fontFamily: "Arial",
            }}
            onChange={handleOnChange}
            value={inputs.photoType}
            id="photoType"
          />
        </div>

        <button className={styles.twelve} htmlType="submit">
          SUBMIT
        </button>
      </Form>

      <h3 className={clsx(styles.h3, styles.button)}>
        If you have any further questions, please contact us at e-mail:
        <br />
        <a className={styles.a} href="mailto:hello@hheyphotography.com">
          <b style={{ marginTop: "10px" }}>hello@hheyphotography.com</b>
        </a>
        <div
          style={{
            height: "30px",
          }}
        ></div>
      </h3>

      {/* <h4>
        If you have any further questions please contact me via e-mail
        <b>hello@hheyphotography.com</b>
      </h4> */}
    </div>
  );
};

export default BookingScreen;
