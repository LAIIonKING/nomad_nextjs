import { Suspense } from 'react';
import MovieInfo from '../../../components/movie-info';
import Videos from '../../../components/movie-video';

export const metadata = {
  title: 'Movie',
};

export default async function MovieDetail({ params: { id } }) {
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
