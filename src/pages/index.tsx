import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [osConfig, setOsConfig] = useState<any>("");

  useEffect(() => {
    if (!!navigator.userAgent) {
      setOsConfig(navigator.userAgent);
    }
  }, []);
  return (
    <>
      <p className={`${inter.className}`}>{`OS Config: ${osConfig}`}</p>
    </>
  );
}
