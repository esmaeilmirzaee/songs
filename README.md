# Combining React with Redux

1. create-react-app AppName
2. npm install --save redux react-redux
3. cd AppName
4. code .
5. remove all files inside the `src` folder
6. create 3 folders named `actions`, `reducers` and `components`.
7. create 3 `index.js` file inside `actions`, `reducers` and `src` folders
8. create `App.jsx` inside `src/components`
9. fill in the `App.jsx` and `index.js` files with the boilerplates
10. specify the actions in the appropriate file

```javascript
const songSelected = function songSelected(song) {
  return { type: 'SONG_SELECTED', payload: song };
};
```

11. code and combine reducers

```javascript
import { combineReducers } from 'redux';

const songReducer = function songSelectedReducer() {
  return [
    { title: 'song', duration: '1:30' },
    { title: 'song', duration: '1:30' },
  ];
};

const selectedSongReducer = function selectedSongReducer(
  selectedSong = null,
  action
) {
  if (action.type == 'SONG_SELECTED') {
    return action.payload;
  }
};

export default combineReducers({
  song: songReducer,
  selectedSong: selectedSongReducer,
});
```
