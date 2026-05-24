import { useState, useEffect } from 'react'
import axios from '../../utility/axios'
import MovieCard from '../MovieCard/MovieCard'
import styles from './MovieRow.module.css'

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className={styles.row}>

      {/* Row title */}
      <h2 className={styles.row__title}>{title}</h2>

      {/* Scrollable movie cards */}
      <div className={styles.row__cards}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  )
}

export default MovieRow