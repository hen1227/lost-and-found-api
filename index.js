import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createServer} from 'http';
import routes from './Routes.js';
import sequelize from "./models/Sequelize.js";

let port = process.env.PORT || 4004;
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(cors());
app.use(express.json());
app.use('/', routes);
const httpServer = createServer(app);

sequelize.sync({ force: true, alter: true })
    .then(() => {
        console.log('All tables have been successfully created, if they didn\'t already exist');
        // Only start the server after the sync has completed
        httpServer.listen(port, () => {
            console.log(`Server started on port: ${port}`);
        });
    })
    .catch(error => console.log('This error occurred', error));
