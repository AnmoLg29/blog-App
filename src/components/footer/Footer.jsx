import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Lieutenant Blog" width={50} height={50} />
          <h1 className={styles.logoText}>Lieutenant Journal</h1>
        </div>
        <p className={styles.desc}>
        Meet Lieutenant Journal, the quintessential adventurer and travel junkie with a heart full of wanderlust and a pen always at the ready. From the towering peaks of the Himalayas to the vibrant markets of Marrakech, Journal’s journeys span the globe, and his stories capture the essence of each destination. With a knack for finding the road less traveled, Journal brings his readers along on his thrilling escapades, blending rich, descriptive storytelling with practical travel tips. His blog is a treasure trove of experiences, filled with breathtaking photography, cultural insights, and a genuine passion for exploration. Whether you’re an armchair traveler or planning your next adventure, Journal’s tales are sure to inspire and guide you on your own journey.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;