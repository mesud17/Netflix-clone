import React from "react";
import styles from "./FeatureCards.module.css";

const features = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: (
      <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient
            id="screenGlow"
            cx="60%"
            cy="40%"
            r="65%"
            fx="65%"
            fy="35%"
          >
            <stop offset="0%" stopColor="#b62bf2" />
            <stop offset="35%" stopColor="#9d1a80" />
            <stop offset="70%" stopColor="#690b24" />
            <stop offset="100%" stopColor="#1b081a" />
          </radialGradient>
          <linearGradient id="frameBorder" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#731e6c" />
            <stop offset="50%" stopColor="#2a0f35" />
            <stop offset="100%" stopColor="#e62e43" />
          </linearGradient>
          <linearGradient
            id="standGradient"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#801c1c" />
            <stop offset="40%" stopColor="#541217" />
            <stop offset="100%" stopColor="#24070a" />
          </linearGradient>
          <radialGradient id="ledGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#ff99bb" />
            <stop offset="100%" stopColor="#ff99bb" stop-opacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M 62,150 Q 100,138 138,150 L 138,153 Q 100,143 62,153 Z"
          fill="url(#standGradient)"
          opacity="0.9"
        />
        <path
          d="M 94,118 L 106,118 L 103,142 L 97,142 Z"
          fill="url(#standGradient)"
        />
        <rect
          x="40"
          y="30"
          width="120"
          height="88"
          rx="4"
          fill="#1b1220"
          stroke="url(#frameBorder)"
          strokeWidth="1.5"
        />
        <rect
          x="43"
          y="33"
          width="114"
          height="76"
          rx="2"
          fill="url(#screenGlow)"
        />
        <path
          d="M 43,55 L 115,33 L 140,33 L 43,63 Z"
          fill="#ffffff"
          opacity="0.08"
        />
        <path
          d="M 70,109 L 157,45 L 157,60 L 88,109 Z"
          fill="#ffffff"
          opacity="0.04"
        />
        <rect
          x="40"
          y="109"
          width="120"
          height="9"
          rx="1"
          fill="#4d163d"
          opacity="0.4"
        />
        <ellipse cx="100" cy="113.5" rx="4" ry="2" fill="url(#ledGlow)" />
        <circle cx="100" cy="113.5" r="1.2" fill="#ffffff" />
      </svg>
    ),
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    icon: (
      /* Pink/purple glowing circle with a down-arrow */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 150"
        width="150"
        height="150"
      >
        <defs>
          <filter id="outer-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="inner-shadow">
            <feOffset dx="0" dy="3" />
            <feGaussianBlur stdDeviation="3" result="offset-blur" />
            <feComposite
              operator="out"
              in="SourceGraphic"
              in2="offset-blur"
              result="inverse"
            />
            <feFlood flood-color="white" flood-opacity="0.4" result="color" />
            <feComposite
              operator="in"
              in="color"
              in2="inverse"
              result="shadow"
            />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>

          <linearGradient id="button-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff9a9e" />
            <stop offset="50%" stop-color="#fecfef" />
            <stop offset="100%" stop-color="#b86eff" />
          </linearGradient>

          <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#cc0022" />
            <stop offset="100%" stop-color="#4a0e4e" />
          </linearGradient>
        </defs>

        <circle
          cx="75"
          cy="75"
          r="48"
          fill="#a44eff"
          opacity="0.5"
          filter="url(#outer-glow)"
        />

        <circle
          cx="75"
          cy="75"
          r="46"
          fill="url(#button-grad)"
          filter="url(#inner-shadow)"
        />

        <circle
          cx="75"
          cy="75"
          r="45.5"
          fill="none"
          stroke="white"
          stroke-opacity="0.25"
          stroke-width="1"
        />

        <g transform="translate(75, 75)">
          <path
            d="M 0,-18 L 0,14 M 0,14 L -12,2 M 0,14 L 12,2"
            fill="none"
            stroke="url(#arrow-grad)"
            stroke-width="5.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="scopeBody" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7e062e" />
            <stop offset="40%" stopColor="#c71553" />
            <stop offset="80%" stopColor="#f35185" />
            <stop offset="100%" stopColor="#fca2cc" />
          </linearGradient>
          <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#781146" />
          </linearGradient>
        </defs>
        <path d="M 24,70 L 26,72 L 24,74 L 22,72 Z" fill="#e61a4c" />
        <path d="M 82,32 L 83.5,33.5 L 82,35 L 80.5,33.5 Z" fill="#e61a4c" />
        <path
          d="M 32,25 L 35,28 L 32,31 L 29,28 Z"
          fill="#ff4d79"
          opacity="0.8"
        />
        <g transform="rotate(-36 50 50)">
          {/* Base Stand */}
          <line
            x1="38"
            y1="62"
            x2="32"
            y2="80"
            stroke="#540722"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="42"
            y1="62"
            x2="48"
            y2="78"
            stroke="#540722"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect x="22" y="45" width="16" height="10" rx="1.5" fill="#400318" />
          <path d="M 37,43 L 70,41 L 70,59 L 37,57 Z" fill="url(#scopeBody)" />
          <ellipse cx="70" cy="50" rx="3" ry="9" fill="url(#lensGrad)" />
          <rect x="42" y="34" width="14" height="4" fill="#a60c42" />
          <line
            x1="46"
            y1="38"
            x2="46"
            y2="43"
            stroke="#400318"
            strokeWidth="3"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: (
      /* Double Overlapping Smiling Profile Avatars */
      <svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgBack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc9ebb" />
            <stop offset="100%" stopColor="#7a4269" />
          </linearGradient>
          <linearGradient id="bgFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e53659" />
            <stop offset="60%" stopColor="#b11140" />
            <stop offset="100%" stopColor="#50031c" />
          </linearGradient>
        </defs>

        {/* Back Profile Minimal */}
        <g transform="translate(14, 12)">
          <rect
            x="0"
            y="0"
            width="52"
            height="52"
            rx="12"
            fill="url(#bgBack)"
          />
          <circle cx="18" cy="20" r="3.5" fill="#401833" />
          <circle cx="34" cy="20" r="3.5" fill="#401833" />
          <path
            d="M 15,34 Q 26,41 37,34"
            fill="none"
            stroke="#401833"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        {/* Front Profile Dominant */}
        <g transform="translate(42, 34)">
          <rect
            x="0"
            y="0"
            width="54"
            height="54"
            rx="14"
            fill="url(#bgFront)"
            stroke="#161124"
            strokeWidth="3"
          />
          <circle cx="18" cy="20" r="3.5" fill="#ffffff" />
          <circle cx="36" cy="20" r="3.5" fill="#ffffff" />
          <path
            d="M 14,33 Q 27,44 40,33"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    ),
  },
];

const FeatureCards = () => {
  return (
    <section className={styles.root}>
      <div className={styles.headingWrap}>
        <h2 className={styles.heading}>More Reasons to Join</h2>
      </div>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
            <div className={styles.cardIcon} aria-hidden="true">
              {feature.icon}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
