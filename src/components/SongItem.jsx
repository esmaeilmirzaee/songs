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
