import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Hero.module.css";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(0);

  // fetch movies
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

  // auto background slider
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
        backgroundImage: `url(
          https://image.tmdb.org/t/p/original${
            movies[currentMovie]?.backdrop_path
          }
        )`,
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Starts at USD 2.99. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>

        <div className={styles.inputContainer}>
          <input type="email" placeholder="Email address" />

          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;