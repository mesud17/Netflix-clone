import { Link } from "react-router-dom";
import styles from "./LandingNavbar.module.css";
import logo from "../../assets/images/Netflix-logo.png";

const LandingNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Netflex Logo" />
      </div>
      <Link to="/login">
        <button className={styles.signInBtn}>Sign In</button>
      </Link>
    </nav>
  );
};

export default LandingNavbar;
