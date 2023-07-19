import app from './app.js';
import readConfig from './config.js';

const port = readConfig().PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})