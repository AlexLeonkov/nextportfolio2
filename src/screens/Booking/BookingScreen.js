import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import styles from "./Booking.module.css";
import { Button, DatePicker, Form, Input, message, Select } from "antd";
import Header from "../../components/Header";
import { handleClientScriptLoad } from "next/script";
import clsx from "clsx";
[];

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
    <>
      <h2 className={styles.h2}>HOW TO BOOK A SHOOTING?</h2>
      <h3 className={styles.h3}>
        We’ve prepared some basic questions to know more about your
        brand/business. <br></br>Please take time to fill in the form below and
        we will get back to you within 48 hours.
      </h3>
      <Form onFinish={onFinish} className={styles.wrapper}>
        <div className={styles.one}>
          <p className={styles.p}>Your full name</p>
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
          <p className={styles.p}>Your e-mail address</p>
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
          <p className={styles.p}>What is your brand/business about?</p>
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
          <p className={styles.p}>Link to your website/social media</p>
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
          <p className={styles.p}>What type of photos do you need?</p>
          <Input
            style={{
              borderRadius: "0",
              fontFamily: "Baskerville",
            }}
            onChange={handleOnChange}
            value={inputs.photoType}
            placeholder="Minimalistic / creative"
            id="photoType"
          />
        </div>
        <div className={styles.six}>
          <p className={styles.p}>What is your deadline for project?</p>
          <DatePicker
            style={{
              borderRadius: "0",
            }}
            onChange={handleDate}
            id="deadline"
            className={styles.date}
          />
        </div>

        <div className={styles.seven}>
          <p className={styles.p}>How many photos do you need?</p>
          <Input
            style={{
              borderRadius: "0",
            }}
            onChange={handleOnChange}
            value={inputs.quantity}
            id="quantity"
          />
        </div>
        <div className={styles.eight}>
          <p className={styles.p}>What ideas do you have in mind?</p>
          <Input
            style={{
              borderRadius: "0",
            }}
            onChange={handleOnChange}
            value={inputs.ideas}
            id="ideas"
          />
        </div>
        <div className={styles.nine}>
          <p className={styles.p}>Where these photos will be used?</p>
          <Input
            style={{
              borderRadius: "0",
            }}
            onChange={handleOnChange}
            value={inputs.usage}
            id="usage"
          />
        </div>
        <div className={styles.ten}>
          <p className={styles.p}>What is your budget for a shooting?</p>
          <Select
            style={{
              borderRadius: "0",
            }}
            className={styles.select}
            optionFilterProp="children"
            onChange={handleBudget}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            id="budget"
            options={[
              {
                value: 1,
                label: "1500 - 2000",
              },
              {
                value: 2,
                label: "2000 - 5000",
              },
              {
                value: 3,
                label: "> 5000",
              },
            ]}
          />
        </div>
        <div className={styles.eleven}>
          <p className={styles.p}>
            Other specific information we need to know about your product brand?
          </p>
          <Input
            style={{
              borderRadius: "0",
            }}
            onChange={handleOnChange}
            value={inputs.otherInfo}
            id="otherInfo"
          />
        </div>

        <Button className={styles.twelve} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      <h3 className={clsx(styles.h3, styles.button)}>
        If you have any further questions, please contact us via e-mail:
        <br />
        <a className={styles.a} href="mailto:hello@hheyphotography.com">
          <b style={{ marginTop: "10px" }}>hello@hheyphotography.com</b>
        </a>
        <div
          style={{
            height: "15px",
          }}
        ></div>
      </h3>

      {/* <h4>
        If you have any further questions please contact me via e-mail
        <b>hello@hheyphotography.com</b>
      </h4> */}
    </>
  );
};

export default BookingScreen;
