import { getPlaylistModel, getSongModel, addSongModel, updateSongModel, deleteSongModel } from "../models/playlistModel.js";

export const getPlaylistService = () => {
    return getPlaylistModel();
}

export const getSongService = (id) => {
    const song = getSongModel(id);
    song.listen ++;
    return getSongModel(id);
}

export const addSongService = (title, artists, url) => {
    const listen =  0;
    return addSongModel(title, artists, url, listen);
}

export const sortByMostListenedService = () => {
    return getPlaylistModel().sort((a, b) => b.listen - a.listen);
}

export const sortByLatestService = () => {
    return getPlaylistModel().sort((a, b) => a.timestamp.localeCompare(b.timestamp));
}

export const sortByOldestService = () => {
    return getPlaylistModel().sort((a, b) => b.timestamp.localeCompare(a.timestamp));
}

export const updatedSongService = (updateId, updateTitle, updateArtists, updateUrl) => {
    const playlists = getPlaylistModel();
    const index = playlists.findIndex(playlist => playlist.id === updateId);
    const {id, title, artists, url, listen, timestamp} = getSongModel(updateId);
    const updatedSong = {
        id,
        title: updateTitle ? updateTitle : title,
        artists: updateArtists ? updateArtists : artists,
        url: updateUrl ? updateUrl : url,
        listen,
        timestamp
    }
    return updateSongModel(updatedSong, index);
}

export const deleteSongService = (id) => {
    const playlists = getPlaylistModel();
    const index = playlists.findIndex(playlist => playlist.id === id);
    return deleteSongModel(id, index);
}