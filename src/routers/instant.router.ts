import express from "express";

let router = express.Router();

router.get('/', async (req, res) => {
    console.log("test");
    res.render('instantwin')
})

export = router;