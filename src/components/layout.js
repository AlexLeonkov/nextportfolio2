import { useEffect } from "react";
import Header from "./Header";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div >
      <Header />
      <main>{children}</main>
    </div>
  );
}
