import { combineReducers } from 'redux';
// Our reducers which is the list of the songs
const songReducer = function songReducer() {
  return [
    { title: 'Set fire', duration: '3.54' },
    { title: 'Are we safe here?', duration: '2.32' },
  ];
};

const selectedSongReducer = function selectedSongReducer(
  selectedSong = null,
  action
) {
  if (action.type == 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
