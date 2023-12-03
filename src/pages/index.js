import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";
import Header from "@component/components/Header";
import BeautyScreen from "@component/screens/Beauty/BeautyScreen";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="p:domain_verify" content="73de840c6013b7f92c720ab44b79b4e4" />
      </Head>
      <BeautyScreen />
    </>
  );
}