"use client";
import { FC } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import facebook from "@/public/assets/icons/socialMedia/facebook.png";
import write from "@/public/assets/icons/socialMedia/write.png";
import instagram from "@/public/assets/icons/socialMedia/instagram.png";
import three from "@/public/assets/icons/socialMedia/3.svg";

const SocialMedia: FC = () => {
  return (
    <div className={styles.containerSocialMedia}>
      <div className={styles.contTitle}>
        <div className={styles.text}>social media</div>
      </div>
      <div className={styles.facebook}>
        <p className={styles.text}>We&apos;re on Facebook </p>
        <Image src={facebook} alt="facebook" className={styles.facebookImg} />
      </div>
      <div className={styles.write}>
        <p className={styles.text}>Write to us </p>
        <Image src={write} alt="write" className={styles.writeImg} />
      </div>
      <div className={styles.instagram}>
        <p className={styles.text}>We&apos;re on instagram</p>
        <Image
          src={instagram}
          alt="instagram"
          className={styles.instagramImg}
        />
      </div>
      <p className={styles.textBottom1}>
        Our company differs from other agencies in that we employ experienced
        professionals who have travelled all the way from novice artists to
        well-known and respected professionals.
      </p>
      <p className={styles.textBottom2}>
        We know all the nuances of the industry and are ready to share our
        knowledge and experience with our clients.
      </p>
      <p className={styles.textBottom3}>
        We have a professional team of specialists ready to support you at every
        stage of movie making.
      </p>

      <Image src={three} alt="three" className={styles.three} />
    </div>
  );
};
export default SocialMedia;
