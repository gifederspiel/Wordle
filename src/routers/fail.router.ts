import express from "express";
import prisma from "@prisma/client";

let router = express.Router();

router.get('/', async (req, res) => {
    res.render('fail')
})

export = router;