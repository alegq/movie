"use client";
import { FC } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import ourWayBackground from "@/public/assets/icons/aboutUs/ourWay-background.png";
import ourWayText from "@/public/assets/icons/aboutUs/ourWay-text.svg";
import star from "@/public/assets/icons/info/star.png";

const AboutUs: FC = () => {
  return (
    <div className={styles.containerAboutUs}>
      <div className={styles.nameAboutUs}>
        <div className={styles.title}>About us</div>
        <div className={styles.creativity}>Creativity</div>
      </div>
      <div className={styles.ourWay}>
        <div className={styles.name}>
          <Image
            src={ourWayBackground}
            alt="ourWayBg"
            className={styles.ourWayBg}
          />
          <Image
            src={ourWayText}
            alt="ourWayText"
            className={styles.ourWayText}
          />
        </div>
        <div className={styles.redRect}>
          <div className={styles.grayRect1} />
          <div className={styles.grayRect2} />
          <div className={styles.grayRect3} />
        </div>
        <div className={styles.info}>info</div>
      </div>
    </div>
  );
};
export default AboutUs;
