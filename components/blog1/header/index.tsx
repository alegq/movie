"use client";
import { FC, useState } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useResizeWindow } from "@/hooks/useResizeWindow";
import ellipse from "@/public/assets/icons/header/ellipse.png";
import starWhite from "@/public/assets/icons/header/star-white.svg";
import starOrange from "@/public/assets/icons/header/star-orange.svg";
import cn from "classnames";

interface IHeaderProps {
  setSelectedRef: (id: number) => void;
}

const Header: FC<IHeaderProps> = ({ setSelectedRef }) => {
  const { isMobile } = useResizeWindow();
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const handleFeedbackClick = () => {
    setSelectedRef(0);
  };

  const handleAboutUsClick = () => {
    setSelectedRef(1);
  };

  const handleVacanciesClick = () => {
    setSelectedRef(2);
  };

  const handleBenefitsClick = () => {
    setSelectedRef(3);
  };

  const handleClickBurgerMenu = () => {
    setIsOpenBurgerMenu((prevState) => !prevState);
  };

  const handleClickMenuItems = (id: number) => {
    switch (id) {
      case 0:
        setSelectedRef(2);
        break;
      case 1:
        setSelectedRef(3);
        break;
      case 2:
        setSelectedRef(0);
        break;
      case 3:
        setSelectedRef(1);
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <button onClick={handleAboutUsClick}>Actor</button>
        <button onClick={handleFeedbackClick}>write to us</button>
      </div>
      <p className={styles.title}>Make your life into a movie</p>
      <div className={styles.bottomTitle}>
        <p>Creativity</p>
        <Image src={ellipse} alt="ellipse" className={styles.ellipse} />
        <p>Freedom</p>
        <Image src={ellipse} alt="ellipse" className={styles.ellipse} />
        <p>Taste</p>
      </div>
      <div className={styles.bottomHeader}>
        <div className={styles.leftRect} />
        <div className={styles.extraMenu}>
          <div className={styles.row}>
            <button>About us</button>
            <button>vacancies</button>
          </div>
          <div className={styles.row}>
            <button>info</button>
            <button>social media</button>
            <button>benefits</button>
          </div>
        </div>
      </div>
      <div className={cn(styles.verticalLine, styles.line1)} />
      <div className={cn(styles.verticalLine, styles.line2)} />
      <div className={cn(styles.verticalLine, styles.line3)} />
      <div className={cn(styles.verticalLine, styles.line4)} />
      <div className={styles.bgStar} />
      <Image src={starWhite} alt="starWhite" className={styles.starWhite} />
      <Image src={starOrange} alt="starOrange" className={styles.starOrange} />
    </div>
  );
};
export default Header;
