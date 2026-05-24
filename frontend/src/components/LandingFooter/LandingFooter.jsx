import React from "react";
import styles from "./LandingFooter.module.css";

const FOOTER_LINKS = [
  ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
  ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
  ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
  ["Media Center", "Terms of Use", "Contact Us"],
];
const LandingFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.topLine}>
          Questions? Call{" "}
          <a className={styles.phone} href="tel:0800861997">
            0800 861 997
          </a>
        </p>

        <nav className={styles.grid} aria-label="Footer links">
          {FOOTER_LINKS.map((col, colIdx) => (
            <ul className={styles.col} key={colIdx}>
              {col.map((label) => (
                <li key={label} className={styles.item}>
                  <a className={styles.link} href="#">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className={styles.controls}>
          <div className={styles.langWrap}>
            <span className={styles.langIcon} aria-hidden="true">
              あ
            </span>
            <select className={styles.select} defaultValue="en" aria-label="Language">
              <option value="en">English</option>
              <option value="am">አማርኛ</option>
            </select>
            <span className={styles.caret} aria-hidden="true">
              ▾
            </span>
          </div>
        </div>

        <p className={styles.region}>Netflix Ethiopia</p>

        <p className={styles.captcha}>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;