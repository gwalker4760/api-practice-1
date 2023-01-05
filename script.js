import express from "express";

import bodyParser from "body-parser";
import moviesRouter from "./moviesRouter.js";
import spiderManRouter from "./spidermanRoutes.js";
import transformersRouter from "./transformersRoutes.js";

const app = express();

const port = 3100;

app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}, have a wonderful day!`)
})

app.use(bodyParser.json());

app.use("/api/movies/", moviesRouter)
app.use("/api/movies/Spider-Man", spiderManRouter)
app.use("/api/movies/Transformers", transformersRouter)