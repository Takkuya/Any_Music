export function getTrendingSongs(allSongs) {
  const trending = allSongs.sort(
    (song1, song2) => song2.playCount - song1.playCount
  );
  return trending.slice(0, 10);
}
