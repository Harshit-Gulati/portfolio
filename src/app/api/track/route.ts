import { defaultSong, lastFmUrl } from "@/constants/song";
import { getSong } from "@/utils/song";

export async function GET() {
  try {
    const response = await fetch(lastFmUrl);

    if (!response)
      return new Response(
        JSON.stringify({ playing: false, song: defaultSong }),
      );

    const result = await response.json();

    if (!result.recenttracks.track)
      return new Response(
        JSON.stringify({ playing: false, song: defaultSong }),
      );

    const song = getSong(result.recenttracks.track[0]);

    return new Response(JSON.stringify({ playing: true, song }));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ playing: false, song: defaultSong }));
  }
}
