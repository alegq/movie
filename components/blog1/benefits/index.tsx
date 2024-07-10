"use client";
import { FC } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import star1 from "@/public/assets/icons/benefits/star-1.png";
import oneImg from "@/public/assets/icons/benefits/1.svg";
import three from "@/public/assets/icons/benefits/3.svg";
import bgLeft from "@/public/assets/icons/benefits/bg-left.png";
import becomePart from "@/public/assets/icons/benefits/become-part.png";
import bgRight from "@/public/assets/icons/benefits/bg-right.png";
import ofTheTea from "@/public/assets/icons/benefits/of-the-team.png";
import { useResizeWindow } from "@/hooks/useResizeWindow";
import cn from "classnames";

const Benefits: FC = () => {
  return (
    <div className={styles.containerBenefits}>
      <div className={styles.horizontalLineTop} />
      <div className={styles.title}>benefits</div>
      <p className={styles.title1}>Make your life into a movie</p>
      <p className={styles.text11}>
        We are looking for actors, directors, cameramen, scriptwriters, editors
        and other specialists ready to realise interesting and creative
        projects.
      </p>
      <p className={styles.text12}>
        The benefits of working with our company include:
      </p>
      <div className={styles.contUnique}>
        <div className={styles.emptyRect} />
        <div className={cn(styles.unique, styles.title)}>Unique projects</div>
        <Image src={oneImg} alt="oneImg" className={styles.oneImg} />
        <div className={styles.blueRect}>
          we always strive to create original and quality content that attracts
          viewers&apos; attention and is recognised by critics.
        </div>
        <Image src={star1} alt="star1" className={styles.star} />
      </div>
      <p className={styles.professional}>Professional development</p>
      <div className={styles.redRect}>
        <p>
          With us, you can develop as a specialist by participating in various
          projects and exchanging experience with colleagues.
        </p>
        <p>2</p>
      </div>
      <div className={styles.team}>
        <p>Team spirit</p>
        <p>
          we value teamwork and maintain a friendly atmosphere in the company
          where everyone can be heard and valued.
        </p>
        <Image src={three} alt="three" className={styles.three} />
      </div>
      <div className={styles.contBottom}>
        <div className={styles.left}>
          <Image src={bgLeft} alt="bgLeft" className={styles.bgLeft} />
          <Image
            src={becomePart}
            alt="becomePart"
            className={styles.becomePart}
          />
        </div>
        <div className={styles.center}>
          <p>
            If you dream of a career in the film industry, get in touch and
            we&apos;ll help you make your dreams come true!
          </p>
          <button>Write</button>
        </div>
        <div className={styles.right}>
          <Image src={bgRight} alt="bgRight" className={styles.bgRight} />
          <Image src={ofTheTea} alt="ofTheTea" className={styles.ofTheTea} />
        </div>
      </div>
      {/*<Image src={star} alt="star" className={styles.star} />*/}
    </div>
  );
};
export default Benefits;
