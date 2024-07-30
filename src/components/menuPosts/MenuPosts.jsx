import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/posts/whirledaway-off-the-beaten-path-adventure-travel-blog" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel 2.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
          WhirledAway: Off the Beaten Path & Adventure Travel Blog
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Michael Drew</span>
            <span className={styles.date}> - 09.11.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/the-untold-romani-roots-of-boho-culture" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/boho 2.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
          The untold Romani roots of Boho culture
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Will Byers</span>
            <span className={styles.date}> - 06.07.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/the-fascinating-world-of-mlb-ballpark-food" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/food 2.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
          The Fascinating World of MLB Ballpark Food
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Mad Max</span>
            <span className={styles.date}> - 22.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/air-jordan-14-ferrari-is-set-to-make-a-return-next-year" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/shoes 3.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
          Air Jordan 14 "Ferrari" Is Set To Make a Return Next Year
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Steve Harrington</span>
            <span className={styles.date}> - 17.06.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;