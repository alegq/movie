"use client";
import { FC } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import reviews from "@/public/assets/icons/reviews/reviews.svg";
import photo1 from "@/public/assets/icons/reviews/photo1.png";
import photo2 from "@/public/assets/icons/reviews/photo2.png";
import photo3 from "@/public/assets/icons/reviews/photo3.png";
import photo4 from "@/public/assets/icons/reviews/photo4.png";
import unionReviews2 from "@/public/assets/icons/reviews/union-rev-2.svg";
import unionReviews3 from "@/public/assets/icons/reviews/union-rev-3.png";
import cn from "classnames";

const Reviews: FC = () => {
  return (
    <div className={styles.containerReviews}>
      <Image src={reviews} alt="reviews" className={styles.reviews} />
      {/*------------ Reviews 1--------------*/}
      <Image src={photo1} alt="photo1" className={styles.photo1} />
      <p className={cn(styles.name1, styles.name)}>Jorryn Upson</p>
      <div className={styles.reviews1}>
        <p>
          The hiring company helped me find my dream job. The process was quick
          and painless, and I received excellent support every step of the way.
          Thank you!
        </p>
      </div>
      {/*------------ Reviews 2--------------*/}
      <div className={styles.contReviews2}>
        <Image
          src={unionReviews2}
          alt="unionReviews2"
          className={styles.unionReviews2}
        />
        <p className={cn(styles.name)}>Tjay Soukup</p>
        <p className={styles.reviews2}>
          Very professional team! They really care about their clients and do
          everything they can to help find the right job. I am very grateful for
          their help.
        </p>
      </div>
      <Image src={photo2} alt="photo2" className={styles.photo2} />
      {/*------------ Reviews 3--------------*/}
      <Image src={photo3} alt="photo3" className={styles.photo3} />
      <div className={styles.contReviews3}>
        <Image
          src={unionReviews3}
          alt="unionReviews3"
          className={styles.unionReviews3}
        />
        <p className={cn(styles.name3, styles.name)}>Jadon Shaffer</p>
        <p className={styles.reviews3}>
          I have been working with this company for over a year now and I am
          very satisfied. They always provide quality jobs and answer all my
          questions promptly. I recommend it!
        </p>
      </div>
      {/*------------ Reviews 4--------------*/}

      <div className={styles.contReviews4}>
        <p className={styles.reviews41}>Great company! </p>
        <p className={styles.reviews42}>
          They provide a lot of job options and are always willing to help with
          any questions. I found a job very quickly thanks to their efforts.
        </p>
        <p className={cn(styles.name4, styles.name)}>Jadon Shaffer</p>
      </div>
      <Image src={photo4} alt="photo4" className={styles.photo4} />

      <div className={styles.horizontalLine} />
    </div>
  );
};
export default Reviews;
