import { Link } from "react-router-dom";
import { Search, Bell, ChevronDown, User } from "lucide-react";
import styles from "./HomeNavbar.module.css";
import logo from "../../assets/images/Netflix-logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeNavbar() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY>50){
      setIsScrolled(true)
    }
    else{
      setIsScrolled(false)
    }
  }
  window.addEventListener("scroll",handleScroll)
  return()=>window.removeEventListener("scroll",handleScroll)
},[])

  return (
    <header className={`${styles.navbar} ${isScrolled?styles.scroll:""}`}>
      <div className={styles.inner}>
        {/* Left: logo + nav */}
        <div className={styles.left}>
          <Link to="/home" className={styles.logo}>
            <img src={logo} alt="Netflix" />
          </Link>
          <nav className={styles.nav}>
            <Link
              to="/home"
              className={`${styles.navLink} ${styles.navLinkActive}`}
            >
              Home
            </Link>
            <Link to="#" className={styles.navLink}>
              TV Shows
            </Link>
            <Link to="#" className={styles.navLink}>
              Movies
            </Link>
            <Link to="#" className={styles.navLink}>
              New & Popular
            </Link>
            <Link to="#" className={styles.navLink}>
              My List
            </Link>
            <Link to="#" className={styles.navLink}>
              Browse by Languages
            </Link>
          </nav>
        </div>

        {/* Right: icons + profile */}
        <div className={styles.right}>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search size={22} strokeWidth={2} />
          </button>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
          )}

          <button
            type="button"
            className={`${styles.iconBtn} ${styles.bellBtn}`}
            aria-label="Notifications"
          >
            <Bell size={22} strokeWidth={2} />
            <span className={styles.badge} aria-hidden="true" />
          </button>
          <div
            className={`${styles.profileWrap} ${isProfileOpen ? styles.profileWrapOpen : ""}`}
          >
            <button
              type="button"
              className={styles.profile}
              aria-label="Account menu"
              aria-expanded={isProfileOpen}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <span className={styles.avatar}>
                <User size={18} strokeWidth={2.2} />
              </span>
              <ChevronDown
                size={18}
                strokeWidth={2.5}
                className={styles.caret}
              />
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link
                  to="#"
                  className={styles.profileItem}
                  onClick={() => setIsProfileOpen(false)}
                >
                  Account
                </Link>
                <Link
                  to="#"
                  className={styles.profileItem}
                  onClick={() => setIsProfileOpen(false)}
                >
                  Help Center
                </Link>
                <hr className={styles.profileDivider} />
                <button
                  type="button"
                  className={styles.profileItem}
                  onClick={() => {
                    setIsProfileOpen(false);
                    navigate("/");
                  }}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeNavbar;
