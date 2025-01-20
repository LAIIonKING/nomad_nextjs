import styles from '../styles/home.module.css';
import Movie from '../components/movie';
import { API_URL } from '../constants';

export const metadata = {
  title: 'Home',
};

async function getMovie() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Page() {
  const movies = await getMovie();
  return (
    <div className={styles.container}>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            id={movie.id}
            poster_path={movie.poster_path}
          />
        );
      })}
    </div>
  );
}
