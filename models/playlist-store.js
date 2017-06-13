'use strict';

const _ = require('lodash')
const playlistStore = {

  playlistCollection: require('./playlist-store.json').playlistCollection,

  getAllPlaylists() {
    return this.playlistCollection;
  },

  getPlaylist(id) {
    return _.find(this.playlistCollection, { id: id });
  },
  removeSong(id, songId) {
    const playlist = this.getPlaylist(id);
    _.remove(playlist.songs, { id: songId });
    // remove the song with id songId from the playlist
  },
};

module.exports = playlistStore;