import { Suspense } from 'react';
import MovieInfo, { getMovieInfo } from '../../../components/movie-info';
import Videos from '../../../components/movie-video';

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovieInfo(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback="Loading Movie Info">
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback="Loading Videos">
        <Videos id={id} />
      </Suspense>
    </div>
  );
}
