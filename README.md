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
      <SongCard song={song} />
    );
  });
}
```

14. response to click on select button; import `selectSong` and do as follow

```javascript
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderedList() {
    // using named function would be end up `undefined` error so I alter it with ES6 arrow function
    return this.props.songs.map((song) => {
      return (
        <div className='ui row' key={song.title}>
          <div className='column eight wide'>
            <SongItem song={song} selectSong={this.props.selectSong} />
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className='ui container'>
        <h1>SongList</h1>
        <div className='ui column eight wide'>{this.renderedList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);
```

14.1. in `SongItem` get the props and fill in the blanks

```javascript
import React from 'react';

const SongItem = function SongItem(props) {
  return (
    <div className='ui item'>
      <div className='ui floated right'>
        <button
          className='ui button'
          onClick={() => props.selectSong(props.song)}
        >
          Select
        </button>
      </div>
      <div className='ui title'>{props.song.title}</div>
    </div>
  );
};

export default SongItem;
```

14.2. create a new file in order to show details

```javascript
import React from 'react';
import { connect } from 'react-redux';

const SongDetails = function SongDetails({ song }) {
  if (!song) {
    return <h1>Please select a song</h1>;
  }
  return (
    <div className='ui container'>
      <div className='ui icon'>
        <i className='music icon 4x'></i>
      </div>
      <div className='title'>{song.title}</div>
      <div className='subtitle'>{song.duration}</div>
    </div>
  );
};

function mapStateToProps(state) {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetails);
```
