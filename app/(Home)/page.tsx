import Link from 'next/link';

export const metadata = {
  title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovie() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Page() {
  const movies = await getMovie();
  return (
    <div>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link href={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </div>
  );
}
