import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import styles from "./MovieCard.module.css"  

function MovieCard({ movie }) {
  return (
    <div className={styles.card}>

      {/* Default: thumbnail */}
      <div className={styles.card__thumb}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      </div>

      {/* Hover: expanded panel */}
      <div className={styles.card__hover}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        <span className={styles.card__badge}>Recently Added</span>

        <div className={styles.card__actions}>
          <div className={styles['card__actions-primary']}>  
            <button className={styles.card__btn}>
              <BsFillPlayFill size={18} />
            </button>
            <button className={styles.card__btn}>
              <AiOutlinePlus size={18} />
            </button>
            <button className={styles.card__btn}>
              <BsHandThumbsUp size={18} />
            </button>
          </div>
          <div className={styles['card__actions-secondary']}>  
            <button className={styles.card__btn}>
              <BsChevronDown size={18} />
            </button>
          </div>
        </div>

        <div className={styles.card__meta}>
          <p className={styles['card__meta-info']}>U/A 16+ · Movie · HD</p>
          <p className={styles['card__meta-genres']}>Action • Thriller • Sci-Fi</p>
        </div>
      </div>

    </div>
  );
}

export default MovieCard;