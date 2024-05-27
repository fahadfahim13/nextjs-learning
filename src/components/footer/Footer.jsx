import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2024 Fahim, Inc. All rights reserved.</div>
      <div className={styles.imgContainer}>
        <Image src="/1.png" className={styles.icon} width={15} height={15} alt="Facebook" />
        <Image src="/2.png" className={styles.icon} width={15} height={15} alt="Instagram" />
        <Image src="/3.png" className={styles.icon} width={15} height={15} alt="skype" />
        <Image src="/4.png" className={styles.icon} width={15} height={15} alt="website" />
      </div>
    </div>
  );
};

export default Footer;
Footer;
