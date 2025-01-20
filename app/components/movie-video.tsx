import { API_URL } from '../(Home)/page';
import styles from '../styles/movie-videos.module.css';

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function Videos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => {
        return (
          <iframe
            key={video.id}
            title={video.name}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      })}
    </div>
  );
}
