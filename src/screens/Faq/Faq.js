import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./Faq.module.css";
import "./Faq.module.css";
import { Collapse } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import clsx from "clsx";

const { Panel } = Collapse;

const Faqscreen = () => {
  const [openedQuestion, setOpenedQuestion] = useState([]);

  const handleItemClick = (index) => {
    if (openedQuestion.includes(index)) {
      setOpenedQuestion((prevState) =>
        prevState.filter((item) => item !== index)
      );
    } else {
      setOpenedQuestion((prevState) => [...prevState, index]);
    }
  };

  const faqData = [
    {
      question: "Where are you based?",
      answer:
        "We are based in Berlin, Germany, but we are able to work with clients all over the world!",
    },
    {
      question: "What shooting packages do you have?",
      answer:
        "We don't have exact packages. We individually quote based on the project requirements of our clients. The price also depends on usage rights, extra costs and client`s deadlines. To get a quote for your project, visit Booking page of the website.",
    },
    {
      question: "What industries do you work with?",
      answer: "At the moment, we work only with beauty brands.",
    },
    {
      question: "How far in advance should I contact you for booking?",
      answer:
        "We recommend booking a shoot at least one month in advance. However, please note that this timeframe may be subject to change depending on the season and upcoming holidays, such as New Year's, February 14th, and the summer season.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Typically, the entire process from discussing your project to delivering the final images takes 21-30 business days.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payment via bank transfer.",
    },
    {
      question: "What are your payment rules?",
      answer:
        "To book our services, you need to pay a 50% deposit. After we have all the photos ready, you need to make the second payment to receive all the images in the requested resolution.",
    },
    {
      question: "Do you send products back?",
      answer:
        "Yes, we can send your products back. However, you will be responsible for all return shipping costs.",
    },
    {
      question: "Is it possible to return the paid deposit?",
      answer:
        "No, the deposit is non-refundable. However, you have the option to schedule the shoot within the next 2 months.",
    },

    {
      question: "WHAT PHOTO LICENSING CAN I GET?",
      answer:
        "You always have rights to use images on your website and social media. However, if you intend to employ them for other purposes, such as advertising, magazines, or posters, it is necessary to acquire the rights to the photos through a purchase.",
    },
  ];

  return (
    <>
      <div className={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <div
            onClick={() => handleItemClick(index)}
            className={styles.item}
            key={index}
          >
            <CaretDownOutlined className={styles.arrow} />
            <div className={styles.itemText}>
              <p className={styles.question}>{faq.question}</p>

              <p
                className={clsx(
                  styles.answer,
                  openedQuestion.includes(index) ? styles.answerOpen : ""
                )}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faqscreen;
