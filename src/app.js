import express from 'express';
import bodyParser from 'body-parser';
import playlistRouter from './routes/playlistRoute.js';

const app = express();

app.use(bodyParser.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use('/playlist', playlistRouter);

export default app;
