import { getPlaylistService, getSongService, addSongService, sortByLatestService, sortByMostListenedService, sortByOldestService, updatedSongService, deleteSongService } from "../services/playlistService.js";
import { validationResult } from "express-validator";

export const getPlaylist = (req, res) => {
    const filter = req.query.filter;
    let playlist;

    if(filter === 'most-listened') playlist = sortByMostListenedService();
    if(filter === 'latest') playlist = sortByLatestService();
    if(filter === 'oldest') playlist = sortByOldestService();
    else playlist = getPlaylistService();

    res.status(200).json({
        message: "Successfully fetched playlist",
        data: playlist
    });
}

export const getSong = (req, res) => {
    const {id} = req.params;
    const song = getSongService(parseInt(id));
    res.status(200).json({
        message: "successfully fetched a song",
        data: song
    });
}

export const addSong = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    
    const {title, artists, url} = req.body;

    try {
        const newSong = addSongService(title, artists, url);
        return res.status(201).json({
            message: "Song added successfully",
            data: newSong
        });
    } catch (error) {
        return res.status(500).json({ error : "Internal server error"});
    }
}

export const updateSong = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});

    const {id} = req.params;
    const {title, artists, url} = req.body;

    try {
        const updatedSong = updatedSongService(parseInt(id), title, artists, url);
        return res.status(200).json({
            message: "song updated successfully",
            data: updatedSong
        })
    } catch (error) {
        res.status(500).json({ error : "Internal server error" })
    }
}

export const deleteSong = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});

    const {id} = req.params;

    try {
        const deletedSong = deleteSongService(parseInt(id));
        return res.status(201).json({
            message: "Song deleted successfully",
            data: deletedSong
        })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}