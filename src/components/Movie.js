import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ rating, id, medium_cover_image, title, summary, genres }) {
  return (
    <div className={styles.movieBox}>
      <img src={medium_cover_image} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <h5>{`평점: ${rating}`}</h5>
      </div>
    </div>
  );
}

Movie.prototypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
