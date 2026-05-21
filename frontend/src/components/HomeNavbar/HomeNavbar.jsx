import { useEffect, useRef, useState } from "react";
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

const ACCOUNT_MENU = [
  { label: "Account", to: "/account" },
  { label: "Help Center", to: "#" },
  { type: "divider" },
  { label: "Sign out", to: "/login" },
];

const HomeNavbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const searchWrapRef = useRef(null);
  const inputRef = useRef(null);
  const profileRef = useRef(null);

  const openSearch = () => {
    setSearchOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    if (searchOpen) closeSearch();
    else openSearch();
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Close search on click outside or Escape
  useEffect(() => {
    if (!searchOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeSearch();
    };

    const onPointerDown = (e) => {
      if (!searchWrapRef.current?.contains(e.target)) closeSearch();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [searchOpen]);

  // Close account menu on click outside or Escape
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    const onPointerDown = (e) => {
      if (!profileRef.current?.contains(e.target)) closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="home-navbar">
      <div className="home-navbar__inner">
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

        <div className="home-navbar__right">
          {/* Search toggle */}
          <div
            ref={searchWrapRef}
            className={`home-navbar__search ${searchOpen ? "home-navbar__search--open" : ""}`}
          >
            <button
              type="button"
              className="home-navbar__icon-btn home-navbar__search-btn"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              onClick={toggleSearch}
            >
              <Search size={22} strokeWidth={2} />
            </button>

            <input
              ref={inputRef}
              type="text"
              className="home-navbar__search-input"
              placeholder="Search"
              aria-label="Search titles"
              tabIndex={searchOpen ? 0 : -1}
            />
          </div>

          <button
            type="button"
            className="home-navbar__icon-btn home-navbar__icon-btn--bell"
            aria-label="Notifications"
          >
            <Bell size={22} strokeWidth={2} />
            <span className="home-navbar__badge" aria-hidden="true" />
          </button>

          <div
            ref={profileRef}
            className={`home-navbar__profile-wrap ${menuOpen ? "home-navbar__profile-wrap--open" : ""}`}
          >
            <button
              type="button"
              className="home-navbar__profile"
              aria-label="Account menu"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={toggleMenu}
            >
              <span className="home-navbar__avatar">
                <User size={18} strokeWidth={2.2} />
              </span>
              <ChevronDown
                size={18}
                strokeWidth={2.5}
                className="home-navbar__caret"
                aria-hidden="true"
              />
            </button>

            {menuOpen && (
              <div className="home-navbar__dropdown" role="menu">
                <ul className="home-navbar__dropdown-list">
                  {ACCOUNT_MENU.map((item) =>
                    item.type === "divider" ? (
                      <li key="divider" role="none">
                        <hr className="home-navbar__dropdown-divider" />
                      </li>
                    ) : (
                      <li key={item.label} role="none">
                        <Link
                          to={item.to}
                          role="menuitem"
                          className="home-navbar__dropdown-item"
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;