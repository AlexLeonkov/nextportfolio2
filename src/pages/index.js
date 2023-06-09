import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";
import Header from "@component/components/Header";
import BeautyScreen from "@component/screens/Beauty/BeautyScreen";
import { useEffect } from "react";

export default function Home() {
  return <BeautyScreen />;
}
