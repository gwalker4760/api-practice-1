import Router from "express";

const spiderManRouter = Router();

const charactersArray = ["Spider-Man", "Green Goblin", "Doc Ock", "Lizard", "Electro", "Sandman"]

spiderManRouter.get("/", (req, res) => {
    res.status(200).send({
        message: "Here are all the characters from Spider-Man No Way Home",
        characters: charactersArray
    })
})

spiderManRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)

    res.status(200).send({
        characters: charactersArray[id] || "Character not found"
    })
})

spiderManRouter.post("/", (req, res) => {
    charactersArray.push(req.body.characters)
    res.status(201).send({
        message: "Character created"
    })
})

spiderManRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const deletedCharacter = charactersArray.splice(id, 1)
    res.status(201).send(`${deletedCharacter} deleted`)
})
export default spiderManRouter;