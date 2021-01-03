import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

import SongItem from './SongItem';

class SongList extends React.Component {
  renderedList() {
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
