import styles from './HomeFooter.module.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* ── Social icons ── */}
      <div className={styles.footer__social}>
        <a href="#" className={styles.footer__icon}><FaFacebookF /></a>
        <a href="#" className={styles.footer__icon}><FaInstagram /></a>
        <a href="#" className={styles.footer__icon}><FaTwitter /></a>
        <a href="#" className={styles.footer__icon}><FaYoutube /></a>
      </div>

      {/* ── Links grid ── */}
      <div className={styles.footer__links}>

        <div className={styles.footer__col}>
          <a href="#">Audio Description</a>
          <a href="#">Investor Relations</a>
          <a href="#">Legal Notices</a>
        </div>

        <div className={styles.footer__col}>
          <a href="#">Help Centre</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
        </div>

        <div className={styles.footer__col}>
          <a href="#">Gift Cards</a>
          <a href="#">Terms of Use</a>
          <a href="#">Corporate Information</a>
        </div>

        <div className={styles.footer__col}>
          <a href="#">Media Centre</a>
          <a href="#">Privacy</a>
          <a href="#">Contact Us</a>
        </div>

      </div>

      {/* ── Copyright ── */}
      <p className={styles.footer__copy}>© 1997–2026 Netflix, Inc.</p>

    </footer>
  )
}

export default Footer