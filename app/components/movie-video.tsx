import { API_URL } from '../(Home)/page';

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function Videos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div>
      <h6>{JSON.stringify(videos)}</h6>
    </div>
  );
}
