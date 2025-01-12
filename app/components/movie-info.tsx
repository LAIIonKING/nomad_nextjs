import { API_URL } from '../(Home)/page';

async function getMovieInfo(id: string) {
  throw new Error();
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovieInfo(id);
  return (
    <div>
      <h6>{JSON.stringify(movieInfo)}</h6>
    </div>
  );
}
