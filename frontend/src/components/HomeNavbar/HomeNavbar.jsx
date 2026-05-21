import { Link } from "react-router-dom";
import { Search, Bell, ChevronDown, User } from "lucide-react";
import "./HomeNavbar.css";
import NetflixLogo from "../../assets/images/Netflix-logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/home", active: true },
  { label: "TV Shows", to: "#" },
  { label: "Movies", to: "#" },
  { label: "New & Popular", to: "#" },
  { label: "My List", to: "#" },
  { label: "Browse by Languages", to: "#" },
];

const HomeNavbar = () => {
  return (
    <header className="home-navbar">
      <div className="home-navbar__inner">
        {/* Left: logo + nav */}
        <div className="home-navbar__left">
          <Link to="/home" className="home-navbar__logo" aria-label="Netflix Home">
            <img src={NetflixLogo} alt="Netflix Logo" />
          </Link>

          <ul className="home-navbar__links">
            {NAV_LINKS.map(({ label, to, active }) => (
              <li key={label}>
                <Link
                  to={to}
                  className={`home-navbar__link ${active ? "home-navbar__link--active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: search, notifications, profile */}
        <div className="home-navbar__right">
          <button type="button" className="home-navbar__icon-btn" aria-label="Search">
            <Search size={22} strokeWidth={2} />
          </button>

          <button
            type="button"
            className="home-navbar__icon-btn home-navbar__icon-btn--bell"
            aria-label="Notifications"
          >
            <Bell size={22} strokeWidth={2} />
            <span className="home-navbar__badge" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="home-navbar__profile"
            aria-label="Account menu"
          >
            <span className="home-navbar__avatar">
              <User size={18} strokeWidth={2.2} />
            </span>
            <ChevronDown size={18} strokeWidth={2.5} className="home-navbar__caret" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;