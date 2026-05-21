import styles from "./LandingHero.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LandingNavbar from "../LandingNavbar/LandingNavbar";
import { useNavigate } from "react-router-dom";

const LandingHero = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        setMovies(res.data.results.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentMovie((prev) =>
        prev === movies.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [movies]);
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: movies[currentMovie]
          ? `linear-gradient(to bottom,
              rgba(0,0,0,0.55) 0%,
              rgba(0,0,0,0.20) 40%,
              rgba(0,0,0,0.75) 80%,
              #000 100%),
            url(https://image.tmdb.org/t/p/original${movies[currentMovie]?.backdrop_path})`
          : undefined
      }}
    >
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
          <button type="submit" onClick={handleSubmit}>
            <Link to="/register">Get Started</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;