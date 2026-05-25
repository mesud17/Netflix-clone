import styles from "./LandingHero.module.css";
import { Link } from "react-router-dom";
import LandingNavbar from "../LandingNavbar/LandingNavbar";

const LandingHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <LandingNavbar />
      <div className={styles.heroContent}>
        <h1>
          Unlimited movies, TV
          <br />
          shows, and more
        </h1>
        <h3>Starts at USD 2.99. Cancel anytime.</h3>
        <p>Ready to watch?</p>
        <div className={styles.inputContainer}>
          <button type="submit">
            <Link to="/register">Get Started</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;