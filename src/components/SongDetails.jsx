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
