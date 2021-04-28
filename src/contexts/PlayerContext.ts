import { createContext } from "react";

type Episode = {
  id: string,
  title: string,
  members: string,
  duration: number,
  thumbnail: string
}

type PlayerContextData = {
  episodeList: Episode[],
  currentEpisodeIndex: number,
  isPlaying: boolean,
  play: (episodes: Episode) => void,
  togglePlay: () => void,
  setState: (state: boolean) => void
}

export const PlayerContext = createContext({} as PlayerContextData);