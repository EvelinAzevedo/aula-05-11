import express from "express"

const router = express.Router()

router.get('/voos/:de/:para', (req, res) => {
    const {de, para} = req.params
    res.json({
        voo:{
            de: de.toUpperCase(),
            para: para.toUpperCase(),
            preco: 50
        }
    })
})

export default router