import { defaultImgSrc, defaultSong, gradientImgSrc } from "@/constants/song";
import { Song } from "@/types/song";

export const getSong = (res: any) => {
  const key = "#text";

  const imgSrc =
    res.image[3][key] === defaultImgSrc ? gradientImgSrc : res.image[3][key];
  const songName = res.name;
  const artistName = res.artist[key];
  const albumName = res.album[key];

  if (imgSrc === "" || songName === "" || artistName === "") return defaultSong;

  return {
    src: imgSrc,
    name: songName,
    artist: artistName,
    album: albumName,
  } as Song;
};
