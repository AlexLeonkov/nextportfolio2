import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./Faq.module.css";
import "./Faq.module.css";
import { Collapse } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

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
        "We don't have exact packages. We custom quote based on the individual project requirements of our clients. The price also depends on usage rights, extra costs, and clients' deadlines. To get a quote for your project, please click here (link to contact form).",
    },
    {
      question: "What industries do you work with?",
      answer: "At the moment, we work only with beauty brands.",
    },
    {
      question: "How far in advance should I contact you for booking?",
      answer:
        "We recommend booking a shoot at least one month in advance, but this may vary depending on the season and upcoming holidays (such as New Year, February 14th, and the Summer season). If you have a limited timeframe and require your photos earlier, an extra fee will be added to the final price.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Typically, the entire process from discussing your project to delivering the final images takes 15-21 business days. If you have a limited timeframe and require your photos earlier, an extra fee will be added to the final price.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payment via bank transfer.",
    },
    {
      question: "What are your payment rules?",
      answer:
        "To book our services, you need to pay a 50% deposit. After we finish all the images, you need to make the second payment to receive all the images in your requested resolution.",
    },
    {
      question: "Do you send products back?",
      answer:
        "Yes, we can send your products back. However, you will be responsible for all return shipping costs.",
    },
    {
      question: "Is it possible to return the paid deposit?",
      answer:
        "No, the deposit is non-refundable in any cases. However, you have the option to schedule the shoot within the next 2 months.",
    },

    {
      question:
        "What are some common terms in a product photography licensing agreement?",
      answer:
        "Common terms in a product photography licensing agreement include usage rights, duration of usage, and exclusivity. Usage rights refer to how the images can be used, duration of usage refers to how long the client can use the images, and exclusivity refers to whether or not the photographer agrees not to license the images to any other clients for a certain period of time. ",
    },
  ];
  return (
    <>
      <Header />
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
                className={`${styles.answer} ${
                  openedQuestion.includes(index) ? styles.answerOpen : ""
                }`}
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
