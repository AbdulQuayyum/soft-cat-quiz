import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

const app = express();

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

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