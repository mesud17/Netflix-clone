import { Link } from "react-router-dom";
import styles from "./LandingNavbar.module.css";
import logo from "../../assets/images/Netflix-logo.png";

const LandingNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Netflex Logo" />
      </div>
      <button className={styles.signInBtn}>
        <Link to="/login">Sign In</Link>
      </button>
    </nav>
  );
};

export default LandingNavbar;
