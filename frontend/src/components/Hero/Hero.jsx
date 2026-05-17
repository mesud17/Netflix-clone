import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import LandingNavbar from "../LandingNavbar/LandingNavbar";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); // Stops page reload
    navigate('/register');  // Navigates after validation passes
  };
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
        <h3>
          Starts at USD 2.99. Cancel anytime.
        </h3>
        <p>
          Ready to watch? 
        </p>

        <div className={styles.inputContainer}>
        <button type="submit" onClick={ handleSubmit}>
            <Link to="/register">Get Started</Link>  
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;