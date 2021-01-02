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

12. in `src/index.jsx` file import `Provider`, `reducers` and `createStore`. Change the file as follows

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import App from './components/App';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

13. in the file where you look to receive states, import `connect` component. Do as follow

```javascript
import { connect } from 'react-redux';

function mapsStateToProps(state) {
  return { songs: state.songs };
}
export default connect(mapsStateToProps)(SongList);
```

now _songs_ are accessible through `props.songs`. It is possible to map through the _songs_ and show the required info according to each song's properties.

```javascript
renderedList() {
  return this.props.songs.map(function toRenderSong(song) {
    return (
      <SongCard song={somg} />
    )
  })
}
```

14. response to click on select button
