import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Lieutenant here!</b> Discover my stories and creative ideas.
      </h1>
      <Link href="/posts/iceland-a-feast-for-the-senses-the-icelandic-experience">
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/iceland.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Iceland – A Feast for the Senses The Icelandic Experience </h1>
          <p className={styles.postDesc}>
          Iceland is the land of fire and ice. It is the land of glaciers and volcanoes and has the beauty of the rough landscape of lava fields and geothermal waters.  It has always been this way, and it’s what makes Iceland one of the top destinations in the world.  What is...
          </p>
          <button className={styles.button}>Read More</button>

        </div>
      </div>
      </Link>
    </div>
  );
};

export default Featured;