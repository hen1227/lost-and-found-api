import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createServer} from 'http';

let port = process.env.PORT || 4004;
const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);

//MARK: MAIN
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//MARK: MAIN
app.get('/lostItems', (req, res) => {
    res.send({ items: ["LOST", "AnD", "FOUND"] });
});

httpServer.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
