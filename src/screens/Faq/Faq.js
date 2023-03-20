import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./Faq.module.css";


import { Collapse } from "antd";
const { Panel } = Collapse;

const Faqscreen = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer services in photography, monthly photography, stop motions, graphic design, branding, Instagram creative direction and social media content creation.",
    },
    {
      question: "Are custom packages available?",
      answer:
        "Yes, we offer custom packages that can be tailored to your specific needs. You can contact us via our contact form or fill out our intake form to receive a custom quote.",
    },
    {
      question: "Where are you based?",
      answer:
        "We are based in Berlin, Germany, but we work with brands on an international scale. We have worked with clients in countries such as New Zealand, USA, UK, Portugal and the United Arab Emirates.",
    },
    {
      question: "How far in advance should I contact you?",
      answer:
        "Due to limited availability, we recommend contacting us at least three months in advance to secure your place within our schedule. For projects that are in the mid to late stages of completion, we recommend contacting us as soon as possible to start creating visuals for your products.",
    },
    {
      question: "How does your pricing work for projects?",
      answer:
        "Our pricing is based on the scope of work required for the project. This includes the in-depth styling, photography, and editing process, as well as the usage rights for the chosen mediums and any additional costs for props that need to be sourced.",
    },
    {
      question: "What is the turnaround time?",
      answer:
        "Our aim is to deliver your final photos within 15-20 business days after receiving your products. This allows us to provide high-quality visuals and give the creative process time to flow.",
    },
    {
      question: "How do your monthly packages work?",
      answer:
        "Our monthly packages require a minimum spend per month over a contracted period of three months. This allows you to choose the services you need for your business each month, and get the best out of your package. We send out a questionnaire at the start of each month allowing you to choose the services and quantity for each service, along with any direction or style preferences.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept payment via bank transfer or PayPal. You can choose to pay a 50% deposit to secure your place within our schedule, with the remaining amount due before receiving the final photos.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We primarily work with brands in the beauty, skincare, lifestyle, and beverage industries, as well as with jewellery and fashion accessories. However, we do not work with baby or children related products.",
    },
    {
      question: "Do you keep or send back the products after the shoot?",
      answer:
        "For monthly clients, we keep the products to use for future shoots. If you would like your products sent back, please provide a return postage bag or slip. Return postage will be paid by you.",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.faqContainer}>
        <Collapse className={styles.antCollapse} defaultActiveKey={["0"]}>
          {faqData.map((faq, index) => (
            <Panel
            
              className={styles.antCollapseItem}
              header={faq.question}
              key={index}
            >
              <p>{faq.answer}</p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </>
  );
};

export default Faqscreen;
