import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

import Connect from "./Database/Connect.js";
import router from "./Router/Route.js";

const app = express();
let port = 8080;

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** routes */
app.use('/v1', router) /** apis */

app.get('/', (req, res) => {
    try {
        res.json("Hi I am a Server")
    } catch (error) {
        res.json(error)
    }
})

Connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is running`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})
