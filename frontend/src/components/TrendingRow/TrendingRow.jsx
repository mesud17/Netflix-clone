import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import styles from "./TrendingRow.module.css";

const TrendingRow = () => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef();
  useEffect(() => {
    const fetchTrending = async () => {
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
    fetchTrending();
  }, []);
  const scrollRight = () => {
    rowRef.current.scrollLeft += 900;
  };
  return (
    <section className={styles.trendingSection}>
      <div className={styles.curve}></div>
      <div className={styles.content}>
        <h2>Trending Now</h2>
        <div className={styles.sliderWrapper}>
          <div className={styles.row} ref={rowRef}>
            {movies.map((movie, index) => (
              <div key={movie.id} className={styles.card}>
                <span className={styles.number}>{index + 1}</span>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            ))}
          </div>
          <button className={styles.scrollBtn} onClick={scrollRight}>
            <ChevronRight size={25} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingRow;