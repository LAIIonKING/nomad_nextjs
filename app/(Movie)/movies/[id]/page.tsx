import { Suspense } from 'react';
import MovieInfo, { getMovieInfo } from '../../../components/movie-info';
import Videos from '../../../components/movie-video';

type IParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: IParams }) {
  const { id } = await params;
  const movie = await getMovieInfo(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: { params: IParams }) {
  const { id } = await params;
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
