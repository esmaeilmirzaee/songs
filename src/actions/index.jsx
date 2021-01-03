// Action creator
export const selectSong = function selectSong(song) {
  // return an action
  return { type: 'SONG_SELECTED', payload: song };
};
