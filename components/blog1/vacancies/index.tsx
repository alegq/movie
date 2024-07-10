"use client";
import { FC } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import creation from "@/public/assets/icons/vacancies/creation.svg";
import scriptwriterImg from "@/public/assets/icons/vacancies/scriptwriter-img.png";
import operatorImg from "@/public/assets/icons/vacancies/operator-img.png";
import directorImg from "@/public/assets/icons/vacancies/director-img.png";
import operatorName from "@/public/assets/icons/vacancies/name-operator.png";
import scriptwriterName from "@/public/assets/icons/vacancies/name-scriptwriter.png";
import directorName from "@/public/assets/icons/vacancies/name-director.png";
import { useResizeWindow } from "@/hooks/useResizeWindow";
import cn from "classnames";

const Vacancies: FC = () => {
  const { isMobile } = useResizeWindow();
  return (
    <div className={styles.containerVacancies}>
      <div className={styles.title}>vacancies</div>
      <div className={styles.redRect}>
        <Image src={creation} alt="creation" className={styles.creation} />
      </div>
      <div className={styles.cards}>
        <div className={cn(styles.card1, styles.card)}>
          <Image
            src={operatorImg}
            alt="operatorImg"
            className={styles.cardImg}
          />
          <Image
            src={operatorName}
            alt="operatorName"
            className={styles.name}
          />
          <button>
            <span>Read More</span>
          </button>
        </div>
        <div className={cn(styles.card2, styles.card)}>
          <div className={styles.horizontalLine} />
          <Image
            src={scriptwriterImg}
            alt="scriptwriterImg"
            className={styles.cardImg}
          />
          <Image
            src={scriptwriterName}
            alt="scriptwriterName"
            className={styles.name}
          />
          <button>
            <span>Read More</span>
          </button>
        </div>
        <div className={cn(styles.card3, styles.card)}>
          <Image
            src={directorImg}
            alt="directorImg"
            className={styles.cardImg}
          />
          <Image
            src={directorName}
            alt="directorName"
            className={styles.name}
          />
          <button>
            <span>Read More</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Vacancies;
