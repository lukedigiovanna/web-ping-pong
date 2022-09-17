import express from 'express';
import { Server } from 'http';

const app = express();
const server = new Server(app);

app.use(express.static('./src/public_html'))

server.listen(4000, () => {
    console.log("Listening on port 4000.");
})