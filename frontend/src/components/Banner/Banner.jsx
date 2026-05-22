import React from "react";
import styles from "./Banner.module.css";
import logo from "../../assets/images/Netflix-logo.png";
import { Play, Info } from "lucide-react";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay} />

      {/* Bottom gradient for fade effect */}
      <div className={styles.bottomFade} />

      {/* Content */}
      <div className={styles.content}>
        {/* Netflix logo */}
        <img src={logo} alt="Netflix" className={styles.logo} />

        {/* Title */}
        <h1 className={styles.title}>Bridgerton</h1>

        {/* Description */}
        <p className={styles.description}>
          Shondaland's Emmy-winning series brings Julia Quinn's novels to life,
          as eight siblings seek their perfect match amid London's scandals and
          soirées.
        </p>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button className={styles.playBtn}>
            <Play size={20} />
            <span>Play</span>
          </button>

          <button className={styles.infoBtn}>
            <Info size={20} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;