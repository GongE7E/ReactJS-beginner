import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFaceSmile,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <nav className={styles.nav}>
        <div>
          <a>GongFlix</a>
        </div>
        <ul className={styles.navType}>
          <li>Movie</li>
          <li>Drama</li>
        </ul>
        <div className={styles.navIcon}>
          <li>
            <FontAwesomeIcon icon={faTv} />
          </li>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFaceSmile} />
          </li>
        </div>
      </nav>
      <div className={styles.container}>
        {loading ? (
          <h1 className={styles.loading}>Loadig...</h1>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                medium_cover_image={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
