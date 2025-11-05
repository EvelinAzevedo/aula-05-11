import produtosRouter from "./produtos"
import voosRouter from "./voos"
import pingRouter from "./ping"

import express from "express"

const router = express.Router()

router.use("/ping", pingRouter)
router.use("/", voosRouter)
router.use("/produtos", produtosRouter)
router.use("/", router)


router.get("/", (req,res) => {
    let nome = "john"
    let idade = 90
    res.json({nome, idade})
})

export default router