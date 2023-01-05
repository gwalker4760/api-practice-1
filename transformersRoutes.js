import Router from "express";

const transformersRouter = Router();

const charactersArray = ["Optimus Prime", "Bumblebee", "Megatron", "Iron Hide", "Ratchet", "Starscream"]

transformersRouter.get("/", (req, res) => {
    res.status(200).send({
        message: "Here are all the characters from Transformers",
        characters: charactersArray
    })
})

transformersRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)

    res.status(200).send({
        characters: charactersArray[id] || "Character not found"
    })
})

transformersRouter.post("/", (req, res) => {
    charactersArray.push(req.body.characters)
    res.status(201).send({
        message: "Character created"
    })
})

transformersRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const deletedCharacter = charactersArray.splice(id, 1)
    res.status(201).send(`${deletedCharacter} deleted`)
})
export default transformersRouter;