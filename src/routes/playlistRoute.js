import express from 'express';
import { getPlaylist, getSong, addSong, updateSong, deleteSong } from '../controllers/playlistController.js';
import { body, param } from 'express-validator';

const playlistRouter = express.Router();

// todo: add new route with query parameter filter most-listened, latest, and oldest
// todo : add validation
// todo : add update delete feature
playlistRouter.get('/', getPlaylist);
playlistRouter.get('/:id', getSong);
playlistRouter.post('/', [
    body('title').notEmpty().withMessage('Title is required').isString().withMessage('Title must be a string'),
    body('artists').notEmpty().withMessage('Artist is required').isArray().withMessage('artists must be an array'),
    body('url').notEmpty().withMessage('Url is required').isString().withMessage('url must be a string')
], addSong);
playlistRouter.put('/:id', [
    param('id').notEmpty().withMessage('Id is required').bail().isNumeric().withMessage('Id must be a number'),
    body('title').optional().isString().withMessage('Title must be a string'),
    body('artists').optional().isArray().withMessage('Artists must be an array'),
    body('url').optional().isString().withMessage('Url must be a string')
], updateSong)
playlistRouter.delete('/:id', [
    param('id').notEmpty().withMessage('Id is required').bail().isNumeric().withMessage('Id must be a number')
], deleteSong);

export default playlistRouter;