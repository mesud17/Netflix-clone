import { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import logo from "../../assets/images/Netflix-logo.png";
import { Play, Info } from "lucide-react";
import axios from "../../utility/axios";
import requests from "../../utility/requests";

const Banner = () => {
  const [movies, setMovies] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // ── fetch movies ──
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPopular);
      setMovies(request.data.results)
    }
    fetchData();
  }, [])

  // ── auto change every 5 seconds ──
  useEffect(() => {
    if (movies.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === movies.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)  // cleanup
  }, [movies])

  // guard — wait for data
  if (movies.length === 0) return null

  const movie = movies[currentIndex]  // ← current movie

  return (
    <section
      className={styles.banner}
      style={{
        // ── dynamic background image ──
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    >
      <div className={styles.overlay} />
      <div className={styles.bottomFade} />

      <div className={styles.content}>
        <img src={logo} alt="Netflix" className={styles.logo} />

        {/* ── dynamic title ── */}
        <h1 className={styles.title}>
          {movie.title || movie.name}
        </h1>

        {/* ── dynamic description ── */}
        <p className={styles.description}>
          {movie.overview}
        </p>

        <div className={styles.buttons}>
          <button className={styles.playBtn}>
            <Play size={20} />
            <span>Play</span>
          </button>
          <button className={styles.infoBtn}>
            <Info size={20} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;