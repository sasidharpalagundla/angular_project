import express from 'express';
import router from './router/router';
import * as db from './config/dbConfig';
import cors from 'cors';

let app = express();
let port = 9090;
db.dbConnection;

app.use(express.json());
app.use(cors());

app.use("/", router)

app.listen(port, () => console.log("Server on 9090"))