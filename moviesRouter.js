import Router from "express";

const moviesRouter = Router();

const moviesArray = ["Transformers", "Spider-Man No Way Home"]

moviesRouter.get("/", (req, res) => {
    res.status(200).send({
        message: "Here are your movie choices",
        movies: moviesArray
    })
})

export default moviesRouter;