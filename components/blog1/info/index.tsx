"use client";
import { FC } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import makeYour from "@/public/assets/icons/info/make-your.svg";
import cinema from "@/public/assets/icons/info/cinema.png";
import star from "@/public/assets/icons/info/star.png";
import { useResizeWindow } from "@/hooks/useResizeWindow";

const Info: FC = () => {
  const { isMobile } = useResizeWindow();
  return (
    <div className={styles.containerInfo}>
      <div className={styles.horizontalLineTop} />
      <div className={styles.title}>info</div>
      <Image src={makeYour} alt="makeYour" className={styles.makeYour} />
      <p className={styles.creativity}>Creativity</p>
      <div className={styles.contText}>
        <p>
          Our company specializes in creating cinematic masterpieces that make
          viewers experience a wide range of emotions, from delight to deep
          reflection.
        </p>
        <p>
          We are looking for talented directors and actors who can bring our
          ambitious ideas to life.
        </p>
      </div>
      <div className={styles.emptyRect}>
        <div className={styles.redRect} />
      </div>
      <div className={styles.horizontalLineCenter} />
      <div className={styles.horizontalLineBottom} />
      <div className={styles.blueRect}>
        <Image src={cinema} alt="cinema" className={styles.cinema} />
      </div>
      <Image src={star} alt="star" className={styles.star} />
    </div>
  );
};
export default Info;
