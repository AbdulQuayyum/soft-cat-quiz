import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

import router from "./Router/Route.js";

const app = express();

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** routes */
app.use('/API', router) /** apis */

app.get('/', (req, res) => {
    try {
        res.json("Hi I am a Server")
    } catch (error) {
        res.json(error)
    }
})

app.listen(8080, () => {
    console.log(`Server is running`)
})