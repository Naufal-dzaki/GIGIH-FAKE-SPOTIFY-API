import generateId from "../utils/generateId.js";

let playlists = [];

export const getPlaylistModel = () => {
    return playlists;
}

export const getSongModel = (id) => {
    return playlists.find(playlist => playlist.id === id);
}

export const addSongModel = (title, artists, url, listen) => {
    const id = generateId();
    const timestamp = new Date().toISOString();
    const newSong = { id, title, artists, url, listen, timestamp}
    playlists.push(newSong);
    return newSong;
}

export const updateSongModel = (updatedSong, index) => {
    if(index != -1) {
        playlists[index] = {...playlists[index], ...updatedSong};
        return updatedSong;
    }
}

export const deleteSongModel = (id, index) => {
    const deletedSong = playlists.find(playlist => playlist.id === id);
    if(index != -1) {
        playlists.splice(index, 1);
        return deletedSong;
    }
}